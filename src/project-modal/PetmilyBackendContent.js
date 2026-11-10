import diagram0 from "./task-img/petmily-backend/jwt-flow.svg";
import diagramMobile0 from "./task-img/petmily-backend/jwt-flow-mobile.svg";
import diagram1 from "./task-img/petmily-backend/admin-authorization.svg";
import diagramMobile1 from "./task-img/petmily-backend/admin-authorization-mobile.svg";
import diagram2 from "./task-img/petmily-backend/profile-boundary.svg";
import diagramMobile2 from "./task-img/petmily-backend/profile-boundary-mobile.svg";
import diagram3 from "./task-img/petmily-backend/password-preservation.svg";
import diagramMobile3 from "./task-img/petmily-backend/password-preservation-mobile.svg";

// Explanatory assets from actual local source and recorded isolated tests.
export const backendCases = [
    {
        key: "jwt-flow",
        title: "JWT Role 처리와 요청 흐름",
        problem: "토큰의 ROLE_USER / ROLE_ADMIN과 도메인 Enum의 USER / ADMIN 사이에 표현 차이가 있었습니다.",
        technology: "Spring Security, JWTFilter, GrantedAuthority, Controller–Service–MyBatis 계층",
        improvement: "팀의 로그인·JWT 기반을 유지하면서 ROLE_ 접두사 정규화와 category·필수 claim·파싱 실패 처리를 보완했습니다.",
        verification: "기존 H2·MockMvc에서 두 Role 표기의 동일 인가, 만료·잘못된 서명/category·Refresh의 Access 사용에 대한 401을 확인했습니다.",
        limitation: "알 수 없는 Role은 USER로 제한합니다. 모든 URL의 인증 정책이 같다는 의미는 아니며 local 프로필의 일반 fallback 체인은 별도 한계가 있습니다.",
        evidence: "JWTFilter · CustomUserDetails · AdminMemberApiTest",
        diagram: diagram0,
        mobileDiagram: diagramMobile0,
    },
    {
        key: "admin-authorization",
        title: "관리자 API와 최신 DB Role 검증",
        problem: "과거 관리자 JWT만 확인하면 DB에서 강등된 계정이 관리자 요청을 계속 수행할 수 있었습니다.",
        technology: "우선 SecurityFilterChain, 서비스 접근 검사, MyBatis 현재 계정 조회",
        improvement: "관리자 URL의 JWT 권한 확인과 서비스의 현재 DB ADMIN 확인을 함께 적용했습니다. DB 승격만으로 구 USER 토큰을 관리자 토큰으로 취급하지도 않습니다.",
        verification: "단위 검사에서 강등·구 토큰 승격 거부와 삭제 계정을 확인했습니다. 별도 MariaDB HTTP 기록에서는 강등 후 구 JWT의 목록/삭제가 403이었습니다.",
        limitation: "관리자·회원 서비스의 현재 권한 검사입니다. 모든 API의 토큰 폐기 목록이나 진행 중인 요청 취소를 구현했다는 뜻은 아닙니다.",
        evidence: "AdminMemberSecurityConfiguration · MemberAccessService · AdminMemberService · MemberSecurityUnitTest",
        diagram: diagram1,
        mobileDiagram: diagramMobile1,
    },
    {
        key: "profile-boundary",
        title: "DTO와 SQL 프로젝션으로 민감정보 보호",
        problem: "Member 전체를 조회해 직렬화하던 타인 프로필 응답에 비밀번호 해시와 주소 등 불필요한 필드가 포함됐습니다.",
        technology: "공개/상세 DTO, 명시적 SELECT 프로젝션, Jackson WRITE_ONLY",
        improvement: "PublicMemberProfile과 PrivateMemberProfile을 분리하고 조회할 필드 자체를 제한했습니다. 도메인 직렬화·toString에서도 인증값이 나오지 않도록 보완했습니다.",
        verification: "단위 검사로 프로젝션 선택·인증용 SELECT 미호출·직렬화 방어를 확인했습니다. 별도 MariaDB HTTP 기록에서 타인 공개 3필드와 상세 응답의 비밀번호 제외를 확인했습니다.",
        limitation: "본인 또는 현재 관리자에게는 편집에 필요한 상세 필드가 제공됩니다. 공개 DTO는 필드 등급이며 익명 URL 개방을 의미하지 않습니다.",
        evidence: "MemberService · MemberMapper · PublicMemberProfile · PrivateMemberProfile · MemberSecurityUnitTest",
        diagram: diagram2,
        mobileDiagram: diagramMobile2,
    },
    {
        key: "password-preservation",
        title: "선택적 비밀번호 수정과 기존 해시 보존",
        problem: "비밀번호를 수정하지 않을 때에도 password 컬럼을 UPDATE해 null 저장 오류나 기존 해시 손상이 발생했습니다.",
        technology: "입력 상태 분리, BCryptPasswordEncoder, MyBatis 동적 UPDATE",
        improvement: "생략/null/빈 문자열은 변경 없음으로 정규화하고 SET에서 제외했습니다. 명시적 변경만 형식을 검증해 BCrypt를 한 번 적용합니다.",
        verification: "단위 검사에서 미입력 encoder 미호출과 명시 변경 1회를 확인했습니다. 별도 MariaDB HTTP 기록에서는 생략/null/빈 값의 해시 보존과 원래 비밀번호 재로그인을 확인했습니다.",
        limitation: "공백만 있는 입력은 변경 없음이 아니라 형식 오류입니다. 현재 비밀번호 재입력이나 별도 MFA를 추가한 구현은 아닙니다.",
        evidence: "MemberService.update · MemberMapper.update · MemberSecurityUnitTest",
        diagram: diagram3,
        mobileDiagram: diagramMobile3,
    }
];
