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
        improvement: "팀에서 만든 로그인·JWT 흐름을 유지하면서 ROLE_ 접두사를 정리해 Enum으로 변환했습니다. 토큰 종류(category)와 필수 claim을 확인하고, 토큰을 파싱할 수 없을 때도 인증을 거부하도록 했습니다.",
        verification: "토큰의 두 Role 표기는 같은 권한으로 처리되고, 만료되거나 서명·종류가 잘못된 토큰과 Access Token 대신 보낸 Refresh Token은 거부되는 것을 확인했습니다.",
        limitation: "알 수 없는 Role은 USER로 제한합니다. local 프로필의 일반 fallback 체인은 별도 인증 정책을 적용합니다.",
        diagram: diagram0,
        mobileDiagram: diagramMobile0,
    },
    {
        key: "admin-authorization",
        title: "관리자 API와 최신 DB Role 검증",
        problem: "과거 관리자 JWT만 확인하면 DB에서 강등된 계정이 관리자 요청을 계속 수행할 수 있었습니다.",
        improvement: "관리자 URL에서는 토큰의 관리자 권한을 검사하고, 서비스에서 현재 DB 권한도 확인하도록 했습니다. DB에서 승격된 계정도 기존 USER 토큰으로는 관리자 API를 호출할 수 없습니다.",
        verification: "관리자 권한을 회수한 뒤 기존 JWT로 회원 목록을 조회하거나 삭제를 요청해도 403으로 거부되는 것을 확인했습니다.",
        limitation: "현재 권한 검사는 관리자·회원 서비스에 적용했습니다. 전체 API의 토큰 폐기 목록과 진행 중인 요청 취소는 구현 범위 밖입니다.",
        diagram: diagram1,
        mobileDiagram: diagramMobile1,
    },
    {
        key: "profile-boundary",
        title: "DTO와 SQL 프로젝션으로 민감정보 보호",
        problem: "Member 전체를 조회해 직렬화하던 타인 프로필 응답에 비밀번호 해시와 주소 등 불필요한 필드가 포함됐습니다.",
        improvement: "공개용 PublicMemberProfile과 상세용 PrivateMemberProfile로 나누고, SQL에서 각 응답에 필요한 컬럼만 조회했습니다. 도메인 객체를 직렬화하거나 toString으로 출력할 때도 인증값을 제외했습니다.",
        verification: "다른 회원의 프로필을 조회하면 공개 필드만 반환되고, 본인용 상세 응답에서도 비밀번호가 빠지는 것을 확인했습니다.",
        limitation: "편집에 필요한 상세 필드는 본인과 현재 관리자만 볼 수 있습니다. 공개 필드 응답에도 기존 인증 조건을 적용합니다.",
        diagram: diagram2,
        mobileDiagram: diagramMobile2,
    },
    {
        key: "password-preservation",
        title: "선택적 비밀번호 수정과 기존 해시 보존",
        problem: "프로필만 수정해도 SQL이 password 컬럼을 갱신해 null 저장 오류가 나거나 기존 해시가 바뀌었습니다.",
        improvement: "비밀번호를 생략하거나 null 또는 빈 문자열로 보내면 UPDATE 대상에서 제외했습니다. 새 비밀번호를 보내면 형식을 검사한 뒤 BCrypt를 한 번 적용합니다.",
        verification: "비밀번호를 생략하거나 null 또는 빈 문자열로 보낸 뒤에도 기존 해시가 유지되고 원래 비밀번호로 다시 로그인할 수 있었습니다.",
        limitation: "공백만 입력하면 형식 오류로 처리합니다. 현재 비밀번호 재입력과 MFA는 구현 범위 밖입니다.",
        diagram: diagram3,
        mobileDiagram: diagramMobile3,
    }
];
