import hairRegistration from "./task-img/haircall/02-simulator-call-registration-photo-preview.png";
import hairPhoto from "./task-img/haircall/05-simulator-stylist-preaccept-photo.png";
import hairMatch from "./task-img/haircall/06-simulator-customer-match.png";
import hairTerms from "./task-img/haircall/07-simulator-service-terms-confirmed.png";
import hairFeed from "./task-img/haircall/09-simulator-stylist-preaccept-feed.png";
import petmilyCover from "./task-img/petmily-latest/main-1440.png";
import portfolioCover from "../img/jwplogo.png";
import shopLanding from "./task-img/shopcsv-fixer/01-landing-desktop.png";
import shopMapping from "./task-img/shopcsv-fixer/02-file-and-column-mapping.png";
import shopValid from "./task-img/shopcsv-fixer/03-valid-preview.png";
import shopBlocked from "./task-img/shopcsv-fixer/04-handle-error-blocked.png";
import shopBatch from "./task-img/shopcsv-fixer/07-batch-zip-ready.png";

export const petmily = {
    title: "Petmily",
    theme: "petmily",
    period: "2024년 6~7월 · 5인 팀 프로젝트",
    summary: "반려동물과 반려인을 위한 종합 커뮤니티 “Petmily”",
    cover: [{src: petmilyCover, alt: "Petmily 메인 화면"}],
    stack: "React · Spring Boot · Spring Security · MyBatis · MariaDB",
    highlights: "미니홈피 · 다이어리 · 방명록",
};

export const webPortfolio = {
    title: "Web Portfolio",
    theme: "portfolio",
    period: "2024년 9월 시작",
    summary: "기술에 대한 호기심과 새로움을 향한 도전은 제가 코딩을 즐기는 이유입니다.",
    cover: [{src: portfolioCover, alt: "Web Portfolio 로고"}],
    layout: "brand",
    stack: "React · Chakra UI · GitHub Pages",
    highlights: "프로젝트 소개 · 기술 사례 · 반응형 UI",
};

export const hairCall = {
    title: "HairCall",
    theme: "haircall",
    period: "2026년 3월~현재",
    status: "개발 중 · 소스코드 비공개",
    summary: "사진을 바탕으로 미용 시술 요청을 등록하고 디자이너와 매칭하는 서비스입니다.",
    cover: [
        {src: hairRegistration, alt: "시술 요청에 테스트 이미지 등록"},
        {src: hairMatch, alt: "고객 앱의 매칭 완료 화면"},
        {src: hairFeed, alt: "디자이너의 수락 전 요청 피드"},
    ],
    layout: "phones",
    highlights: "사진 기반 요청 · 동시 수락 방지 · 시술 조건 확인",
    cardStack: "Spring Boot · Firebase · React Native",
    introduction: "디자이너가 요청을 수락하기 전에 고객의 모발 상태와 희망 시술을 함께 확인할 수 있도록 사진 기반 매칭 흐름을 개발하고 있습니다. 고객·디자이너 앱의 요청 등록과 매칭, 관리자 웹 심사 흐름, Spring Boot API의 인증·자격 검사와 데이터 정합성 처리를 구현했습니다.",
    flow: "고객은 모발 사진과 희망 시술 조건을 담아 Call을 올리고, 대기 중에는 요청을 취소할 수 있습니다. 디자이너는 활동을 신청하고 자료를 제출합니다. 관리자가 자료를 심사하고 활동 자격을 관리하며, 자격이 활성화된 디자이너는 피드에서 Call을 확인하고 수락할 수 있습니다. 매칭되면 양측이 방문 조건을 확인하고, 시술이 끝나면 완료 상태와 고객 후기를 기록합니다.",
    architecture: "React Native 앱과 관리자 웹은 Firebase Auth에서 받은 ID 토큰으로 Spring Boot API를 호출합니다. 서버가 Call 생성·수락과 조건 변경을 처리하고 Firebase Admin SDK로 Firestore의 요청, 자격, 조건 데이터를 갱신합니다. 앱의 직접 구독은 소유자와 매칭 디자이너의 요청 상태로 제한했습니다. 고객 사진은 Firestore의 비공개 하위 문서에, 관리자 심사용 제출 파일은 Firebase Storage에 분리해 저장합니다.",
    stack: "Java 21 · Spring Boot · Spring Security · Firebase Auth · Firestore · React Native · Expo",
    cases: [
        {
            heading: "Firebase 인증·인가",
            paragraphs: [
                "Firebase ID 토큰을 Spring Security 필터에서 검증하고, 토큰에서 확인한 UID를 인증 주체로 등록했습니다. 요청 본문에 사용자 ID가 들어 있어도 권한은 검증된 UID를 기준으로 판단합니다. 이 UID로 Call 소유자와 매칭 참여자를 확인합니다.",
            ],
        },
        {
            heading: "수락 전 사진 접근 제어",
            paragraphs: [
                "디자이너가 시술 가능 여부를 판단하려면 수락 전에 고객의 모발 상태를 볼 수 있어야 합니다. 사진은 인증이 필요한 API에서 제공하고, 서버가 디자이너의 현재 활동 자격과 Call 상태를 확인합니다. 사진 문서에 대한 클라이언트의 직접 접근은 Firestore Rules로 막고, 공개 URL은 발급하지 않습니다. 같은 Call의 사진을 디자이너가 수락 전에 열어볼 수 있는 흐름을 Simulator에서 확인했습니다.",
            ],
            mobile: true,
            shots: [{src: hairPhoto, caption: "활동 자격이 활성화된 디자이너가 수락 전에 테스트 이미지와 시술 정보를 확인합니다."}],
        },
        {
            heading: "사진 등록 재시도와 멱등성",
            paragraphs: [
                "저장은 됐지만 응답이 유실됐을 때 사진을 다시 보내도 중복으로 등록되지 않도록 설계했습니다. 앱은 같은 제출에 멱등 키를 재사용하고, 서버는 요청 지문을 비교해 같은 내용인지 확인합니다. 새 제출은 파일 형식과 크기를 검증한 뒤 사진과 Call의 참조 관계를 저장합니다.",
            ],
            mobile: true,
            shots: [{src: hairRegistration, caption: "고객이 요청을 등록하기 전에 합성 테스트 이미지의 미리보기를 확인합니다."}],
        },
        {
            heading: "Firestore 트랜잭션으로 동시 수락 제어",
            paragraphs: [
                "두 디자이너가 대기 상태를 동시에 읽으면, 뒤늦은 수락이 첫 매칭을 덮어쓸 수 있습니다. 이 상황을 예방하기 위해 요청 상태 확인과 매칭 저장을 한 트랜잭션에 묶었습니다. Firestore 트랜잭션 안에서 최신 Call 상태와 디자이너 자격을 읽고, 대기 중이며 수락할 수 있을 때만 매칭 상대와 상태를 함께 저장합니다.",
                "한 요청이 먼저 확정되면 경쟁 요청은 갱신된 상태를 기준으로 거절됩니다. Simulator에서는 같은 Call이 수락 전 피드에서 고객의 매칭 완료 화면으로 이어지는 흐름을 확인했습니다.",
            ],
            mobile: true,
            shots: [
                {src: hairFeed, caption: "고객이 등록한 동일 Call이 디자이너 피드에 대기 상태로 표시됩니다."},
                {src: hairMatch, caption: "디자이너가 수락하면 고객 홈에서 매칭 완료를 확인할 수 있습니다."},
            ],
        },
        {
            heading: "시술 조건 변경과 Revision 관리",
            paragraphs: [
                "매칭 후 방문 시간, 장소, 시술 내용이나 예상 비용을 바꾸면 이전 조건에 대한 확인이 남을 수 있습니다. 조건을 수정할 때 revision을 올리고 양측 확인을 초기화해 같은 버전에 다시 동의하도록 했습니다.",
                "확인 요청을 처리하는 트랜잭션에서 현재 revision과 Call 상태를 함께 검사합니다. 로컬 HTTP와 Simulator에서 비용을 바꾼 뒤 동의 초기화와 재확정을 확인했고, 이전 revision으로 요청하면 HTTP 409를 반환하는 것도 검증했습니다.",
            ],
            mobile: true,
            shots: [{src: hairTerms, caption: "고객과 디자이너가 같은 버전의 시술 조건을 확인하면 확정 상태가 표시됩니다."}],
        },
        {
            heading: "관리자 권한 관리와 디자이너 심사",
            paragraphs: [
                "권한을 회수해도 기존 ID 토큰에는 관리자 Claim이 남을 수 있습니다. 관리자 API는 Claim과 Firestore의 활성 허용 목록을 함께 확인합니다. 로컬 HTTP에서 Claim만 있는 계정의 접근과 권한 회수 직후 같은 토큰으로 보낸 접근이 차단되는 것을 확인했습니다.",
                "심사 승인은 제출 자료에 대한 결정입니다. 활동 자격 활성화는 요청 조회·사진 열람·수락 권한을 부여하는 별도 단계입니다. 관리자 화면에서 합성 신청을 승인한 뒤 다시 조회해, 심사는 승인됐지만 활동 자격은 비활성 상태로 남는 것을 확인했습니다. 공식 자격 확인 절차는 준비 중입니다.",
            ],
        },
    ],
    availability: "현재 개발 중이며 GitHub 저장소와 기술문서는 비공개입니다. 주요 흐름은 로컬과 Simulator에서 확인했습니다. 일부 사진 등록과 관리자 보호 흐름의 자동화에는 실패 기록이 남아 있습니다. 클라우드 Staging 연동, 운영 부하, HairCall 앱의 실기기 테스트는 아직 완료하지 않았습니다.",
};

export const shopCsvFixer = {
    title: "ShopCSV Fixer",
    theme: "shopcsv",
    summary: "공급업체 상품 CSV를 검증하고 Shopify용 비공개 초안 CSV를 만드는 도구입니다.",
    period: "2026년 11월 · 개인 프로젝트",
    cover: [{src: shopMapping, alt: "ShopCSV Fixer 변환 도구의 CSV 로드 및 열 매핑 화면"}],
    layout: "tool",
    highlights: "컬럼 매핑 · 중복 검증 · 배치 ZIP",
    cardStack: "JavaScript · Cloudflare Pages",
    introduction: "공급업체마다 상품명·SKU·판매가 열의 이름과 순서가 달랐습니다. Unit Price처럼 판매가인지 원가인지 헤더만으로는 알기 어려운 열도 있어, Shopify에 가져오기 전에 직접 매핑과 오류를 확인할 도구를 만들었습니다. 개인 프로젝트로 CSV 파서와 검증 로직, 반복 매핑·배치 화면, 테스트와 정적 사이트 배포를 맡았습니다.",
    architecture: "HTML·CSS·JavaScript로 구성한 정적 사이트를 Cloudflare Pages에 배포했습니다. 브라우저에서 파일을 읽고 파싱·매핑·검증을 거쳐 Draft CSV 또는 ZIP을 생성하므로 상품 파일을 별도 서버에 업로드할 필요가 없습니다. 같은 브라우저의 localStorage에는 프로필 이름과 헤더·매핑 정보만 저장합니다. Shopify 관리자에서의 가져오기는 사용자가 직접 진행합니다.",
    stack: "HTML · CSS · JavaScript · Node.js 테스트 · Cloudflare Pages",
    cases: [
        {
            heading: "CSV 파싱과 판매가 매핑",
            paragraphs: [
                "쉼표와 줄바꿈을 그대로 구분자로 쓰면 상품명과 여러 줄 설명이 여러 셀로 나뉩니다. UTF-8을 검사하고 쉼표·세미콜론·탭 중 구분자를 추정합니다. 그다음 따옴표 안팎을 구분해 셀을 읽고, BOM과 CRLF, 이스케이프된 따옴표를 처리했습니다. 닫히지 않은 따옴표, 빈 헤더·중복 헤더, 열 개수가 다른 행은 파일 오류로 표시합니다.",
                "헤더의 대소문자와 공백 등을 정규화하고 동의어를 기준으로 매핑을 제안합니다. 상품명과 판매가는 필수로 두되, Unit Price는 원가를 뜻할 수도 있어 판매가로 자동 매핑하지 않고 사용자가 직접 확인하도록 했습니다.",
            ],
            shots: [{src: shopMapping, caption: "샘플 CSV를 열고 상품명, SKU, 판매가에 연결된 원본 열을 확인합니다."}],
        },
        {
            heading: "데이터 검증과 초안 내보내기",
            paragraphs: [
                "누락된 판매가와 통화 기호·천 단위 구분자·음수 등 허용하지 않는 가격 형식에는 행 번호와 수정 안내를 표시합니다. 중복 SKU와 상품 URL 식별자(Handle) 충돌도 같은 방식으로 안내합니다. Handle이 같을 때 원본 행·제목·SKU·이미지 URL을 비교해 완전 중복과 옵션·추가 이미지 후보를 구분합니다. 충돌한 행은 그대로 두고 초안 다운로드를 막아, 사용자가 안내를 보고 원본을 수정할 수 있게 했습니다.",
                "파일 전체가 검증을 통과하면 Shopify용 11개 열로 변환하고, 상태는 draft, 온라인 스토어 공개 값은 false로 고정합니다. 수식으로 해석될 수 있는 상품 텍스트와 HTML 형식 입력도 검증하며, 오류 리포트의 수식형 셀은 안전한 문자열로 대체합니다.",
            ],
            shots: [{src: shopBlocked, caption: "샘플 행의 Handle이 충돌하면 수정 안내가 표시되고 초안 CSV 다운로드가 비활성화됩니다."}],
        },
        {
            heading: "이미지 등록 실패에 대응한 Safe Mode",
            paragraphs: [
                "v0.2 개발 스토어에서 단순 상품 두 개가 초안으로 생성됐지만, 예시 URL을 넣은 한 상품은 미디어 등록에 실패했습니다. v0.3부터 기본 Safe Mode에서는 이미지 열을 비우고 어떤 행의 링크가 제외됐는지 경고로 안내합니다. 이후 Safe Mode로 만든 CSV를 개발 스토어에서 가져와 단순 상품 두 개가 초안으로 등록되는 것을 확인했습니다.",
                "이미지를 포함하는 모드에서는 HTTPS 형식을 검사하고 예시 주소와 일부 사설 주소 등을 차단합니다. URL 형식을 통과한 경우에도 실제 응답과 Shopify에서의 다운로드 성공 여부는 미검증으로 표시합니다.",
            ],
            shots: [{src: shopValid, caption: "Safe Mode에서 검증을 통과한 샘플의 미리보기에 빈 이미지 열과 초안 상태가 표시됩니다."}],
        },
        {
            heading: "매핑 복원과 배치 ZIP 처리",
            paragraphs: [
                "열 번호로 매핑을 저장하면 공급업체가 열 순서만 바꿔도 상품명이나 가격을 잘못 읽을 수 있습니다. 매핑을 열 이름으로 저장하고 정규화한 헤더 집합이 일치할 때 현재 파일에서 위치를 다시 찾습니다.",
                "최대 10개 파일을 개별 검증하고 파일 간 Handle·SKU 중복까지 검사합니다. 모두 통과하면 각 CSV의 CRC32를 계산한 뒤 ZIP의 로컬 헤더, 중앙 디렉터리, 종료 레코드를 기록해 무압축 ZIP을 브라우저에서 만듭니다. 열 순서를 바꾼 샘플로 매핑 복원을 확인했고, 내려받은 ZIP의 CSV와 CRC를 확인했습니다. 파일 간 Handle이 충돌하면 ZIP 다운로드가 차단되는 것도 확인했습니다.",
            ],
            shots: [{src: shopBatch, caption: "열 순서가 다른 샘플 CSV 두 개가 검증을 통과하면 ZIP을 내려받을 수 있습니다."}],
        },
    ],
    availability: "신규 단순 상품의 초안 생성을 지원합니다. 변형 상품과 기존 상품 갱신은 지원 범위 밖이며, 현재 배포 버전의 Shopify 가져오기와 모바일 실기기·Safari 동작은 아직 확인하지 않았습니다.",
    supplementary: {src: shopLanding, caption: "ShopCSV Fixer 서비스 소개 화면"},
    links: [
        {href: "https://github.com/parkjaewook1/shopcsv-fixer", label: "GitHub 저장소"},
        {href: "https://github.com/parkjaewook1/shopcsv-fixer/blob/main/docs/PORTFOLIO.md", label: "구현 및 검증 기록"},
        {href: "https://shopcsv-fixer.pages.dev/", label: "서비스 소개"},
        {href: "https://shopcsv-fixer.pages.dev/tool.html", label: "변환 도구 열기"},
    ],
};
