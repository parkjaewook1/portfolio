import React, {useState} from "react";
import login from "./task-img/login.png";
import signUp from "./task-img/sign-up.png";
import memberRead from "./task-img/member-read.png";
import memberUpdate from "./task-img/member-update.png";
import memberDelete from "./task-img/member-delete.png";
import socialLogin from "./task-img/social-login.png";
import adminPage from "./task-img/admin-page.png";
import {Image,} from "@chakra-ui/react";

export function PetmilyModal() {

    return (<>
        <div className="modal-info">
            <h2 className="modal-info-heading">Summary</h2>
            <p className="modal-info-content">
                반려동물과 반려인을 위한 종합 커뮤니티 “Petmily”
            </p>
            <br/>
            <hr/>
            <br/>
            <h2 className="modal-info-heading">Overview</h2>
            <p className="modal-info-content">
                반려동물 및 반려인 인구가 폭발적으로 증가함에 따라 펫코노미(Pet+Economy) 시장이 국내외적으로 관심을 받고 있습니다. 주인에게 기쁨을 준다는 의미의 ‘애완동물’이라는
                명칭에의 전통적인 주종관계에서, 동반자적 의미의 ‘반려동물’로의 인식 전환과 함께, 양육 정보, 건강 관리, 교육, 사회화 등의 다양한 정보를 반려인들이 공유하고 소통할 수 있는
                플랫폼이 부족한 상황이라고 생각했습니다. 이에 사용자들이 보다 쉽게
                접근할 수 있는 웹 애플리케이션의 필요성을 느꼈으며, 이에 프로젝트의 개발을 시작했습니다.

            </p>
            <br/>
            <hr/>
            <br/>
            <h2 className="modal-info-heading">Project Goals</h2>
            <br/>
            <h4>반려동물 정보 공유 플랫폼 구축</h4>
            <p className="modal-info-content">
                <span className="emphasis">*</span>반려동물 관련 정보 공유 및 소통의 장 마련
            </p>
            <h4>커뮤니티 활성화를 통한 반려인 네트워크 강화</h4>
            <p className="modal-info-content">
                <span className="emphasis">*</span>사용자 간의 커뮤니케이션을 활성화하여 건전한 반려인 커뮤니티 형성
            </p>
            <h4>반려동물 건강 관리 및 초보자 지원</h4>
            <p className="modal-info-content">
                <span className="emphasis">*</span>건강 관리 및 초보 반려인을 위한 정보를 제공하여 사용자 편의성 증대
            </p>
            <h4>사용자 중심의 직관적인 UI/UX 제공</h4>
            <p className="modal-info-content">
                <span className="emphasis">*</span>사용자 경험을 개선하고, 만족도를 높일 수 있는 직관적인 UI/UX 제공
            </p>
            <br/>
            <hr/>
            <br/>
            <h2 className="modal-info-heading">Skills</h2>
            <div className="modal-info-skills">
                <h4>Frontend:</h4>
                <p>HTML, CSS, JavaScript, React, Vite, Axios, ChakraUI</p>
            </div>
            <div className="modal-info-skills">
                <h4>Backend:</h4>
                <p>Java, Spring Boot, Spring Security, JWT, OAuth2, MyBatis</p>
            </div>
            <div className="modal-info-skills">
                <h4>Database:</h4>
                <p>MariaDB</p>
            </div>
            <div className="modal-info-skills">
                <h4>Deployment:</h4>
                <p>AWS (EC2, S3, RDS), Docker, Docker hub</p>
            </div>
            <br/>
            <hr/>
            <br/>
            <h2 className="modal-info-heading">Repository & Deployment URL</h2>
            <br/>
            <h4>Github</h4>
            <div className="modal-info-content">
                Frontend:{" "}
                <a href="https://github.com/chaiheung/petmily/tree/master/frontend">
                    https://github.com/chaiheung/petmily/tree/master/frontend
                </a>
                <br/>
                Backend:{" "}
                <a href="https://github.com/chaiheung/petmily/tree/master/backend">
                    https://github.com/chaiheung/petmily/tree/master/backend
                </a>
            </div>
            <h4>Deployment URL</h4>
            <div className="modal-info-content">
                URL: <a href="http://52.79.251.74:8080">https://petmily.com/</a>
                <br/>
                PPT: <a href="http://petmily.my.canva.site">http://petmily.my.canva.site
            </a>
            </div>

            <br/>
            <hr/>
            <br/>
            <h2 className="modal-info-heading">My Tasks in Project</h2>
        </div>
        <div className="modal-info-tasks">
            {/* 로그인 시작 */}
            <div className="project-task">
                <h3>1.로그인</h3>
                <div
                    className="project-task-box"

                >
                    <Image className="project-task-images" src={login}/>

                </div>
                <h3>상세 설명</h3>
                <p>
                    Spring Security 및 JWT 기반 로그인 시스템: 프로젝트에서 구현한
                    로그인 시스템은 Spring Security와 JWT(JSON Web Token)를 기반으로
                    하여 강화된 보안과 효율성을 제공합니다.
                </p>
                <br/>
                <p>
                    <span>1) 강화된 보안</span>
                    <ul>
                        <li>
                            <h4>XSS 방지:</h4> HTTP Only 쿠키 사용으로 클라이언트 사이드
                            스크립트 접근을 차단, XSS 공격으로부터 토큰 탈취를 방지합니다.
                        </li>
                        <li>
                            <h4>안전한 토큰 전송 및 검증:</h4> JWT는 사용자 인증 정보를
                            안전하게 인코딩하고, 서버에서 토큰의 유효성을 검증하여 인증의
                            신뢰성을 제공합니다.
                        </li>
                    </ul>
                </p>
                <br/>
                <p>
                    <span>2) 무상태 인증</span>
                    <ul>
                        <li>
                            <h4>서버 부하 감소:</h4> JWT를 사용한 무상태 인증 방식으로
                            서버의 세션 상태 관리 부담을 줄입니다.
                        </li>
                        <li>
                            <h4>통신 간소화:</h4> 브라우저의 자동 쿠키 관리를 통해
                            클라이언트 측의 인증 토큰 관리 필요성을 제거합니다.
                        </li>
                    </ul>
                </p>
                <br/>
                <p>
                    <span>3) 표준화된 접근</span>
                    <ul>
                        <li>
                            <h4>호환성 제공:</h4> JWT는 널리 인정받는 인증 표준으로, 다양한
                            API와의 호환성을 제공합니다.
                        </li>
                    </ul>
                </p>
                {/* 로그인 끝 */}
            </div>
            <br/>
            <hr/>
            <br/>
            {/* 회원 CRUD 시작 */}
            <div className="project-task">
                <h3>2. 회원 CRUD / 프로필 CRUD</h3>

                {/* 회원가입 모달 */}
                <div
                    className="project-task-box"

                >
                    <Image className="project-task-images" src={signUp}/>

                </div>

                {/* 회원 정보 조회 모달 */}
                <div
                    className="project-task-box"
                >
                    <Image className="project-task-images" src={memberRead}/>

                </div>

                {/* 회원 정보 수정 모달 */}
                <div
                    className="project-task-box"
                >
                    <Image className="project-task-images" src={memberUpdate}/>

                </div>

                {/* 회원 탈퇴 모달 */}
                <div
                    className="project-task-box"
                >
                    <Image className="project-task-images" src={memberDelete}/>

                </div>
                <h3>상세 설명</h3>
                <p>
                    Spring 기반 회원 CRUD 시스템: 회원 가입, 정보 조회, 수정, 탈퇴 기능을 제공하는
                    사용자 관리 시스템입니다. RESTful API를 통해 각 기능이 구현되었습니다.
                </p>
                <br/>
                <p>
                    <span>1) 회원 CRUD</span>
                    <ul>
                        <li>
                            <h4>폼 유효성 및 보안 검증:</h4> 아이디와 비밀번호는 최소 글자 수와 정규식을 통한 입력 제한을 거치며,
                            중복 체크 및 비밀번호 일치 확인 후에 가입 버튼이 활성화됩니다. 비밀번호는 가입 완료 시 BCrypt로 암호화되어 안전하게 저장됩니다.
                        </li>
                        <br/>
                        <li>
                            <h4>실시간 정보 조회:</h4> 사용자는 자신의 정보를 실시간으로 조회하고,
                            원하는 정보를 수정할 수 있습니다.
                        </li>
                        <br/>
                        <li>
                            <h4>완전 삭제:</h4> 회원 탈퇴 시 사용자 정보는 영구적으로 삭제됩니다.
                        </li>
                    </ul>
                </p>
                {/* 프로필 CRUD */}
                <br/>
                <p>
                    <span>4) 프로필 CRUD (AWS S3 연동)</span>
                    <ul>
                        <li>
                            <h4>프로필 이미지 업로드 및 저장:</h4> 사용자가 프로필 이미지를 업로드하면, 해당 이미지는 AWS S3에 안전하게 저장됩니다. 이를 통해 빠르고 확장성 있는
                            이미지 관리가 가능합니다.
                        </li>
                        <br/>
                        <li>
                            <h4>프로필 이미지 수정:</h4> 사용자는 기존에 업로드한 프로필 이미지를 수정할 수 있으며, 수정된 이미지는 S3 버킷 내에서 기존 이미지를 교체하여
                            저장됩니다.
                        </li>
                        <br/>
                        <li>
                            <h4>프로필 이미지 삭제:</h4> 프로필 이미지 삭제 요청 시, S3 버킷에서 해당 파일이 영구적으로 삭제됩니다.
                        </li>
                        <br/>
                        <li>
                            <h4>프로필 이미지 조회:</h4> 사용자의 프로필 이미지는 S3에서 불러와 프론트엔드에 렌더링됩니다. 빠른 응답 속도로 사용자 경험을 향상시킵니다.
                        </li>
                    </ul>
                </p>
                {/* 회원 CRUD 끝 */}
            </div>
            <br/>
            <hr/>
            <br/>
            {/* 소셜 로그인 및 비밀번호 재발급 시작 */}
            <div className="project-task">
                <h3>4. 소셜 로그인 / 비밀번호 재발급</h3>
                <div
                    className="project-task-box"

                >
                    <Image className="project-task-images" src={socialLogin}/>

                </div>
                <h3>상세 설명</h3>
                <p>
                    OAuth 2.0 기반 소셜 로그인: 네이버 소셜 네트워크 서비스와의 통합 로그인 기능을 구현하였습니다.
                    또한 비밀번호 재발급 시스템을 통해 사용자가 쉽게 비밀번호를 재설정할 수 있도록 하였습니다.
                </p>
                <br/>
                <p>
                    <span>1) 소셜 로그인</span>
                    <ul>
                        <li>
                            <h4>OAuth 2.0 표준:</h4> 다양한 소셜 계정으로 로그인할 수 있으며, OAuth 2.0을 통한 안전한 인증 절차를 제공합니다.
                        </li>
                    </ul>
                </p>
                <br/>
                <p>
                    <span>2) 비밀번호 재발급</span>
                    <ul>
                        <li>
                            <h4>재발급 이메일:</h4> 사용자는 등록된 이메일을 통해 비밀번호를 재설정할 수 있으며, 보안 절차를 강화하였습니다.
                        </li>
                    </ul>
                </p>
                {/* 소셜 로그인 및 비밀번호 재발급 끝 */}
            </div>
            <br/>
            <hr/>
            <br/>
            {/* 관리자 모드 시작 */}
            <div className="project-task">
                <h3>3. 관리자 모드</h3>
                <div
                    className="project-task-box"

                >
                    <Image className="project-task-images" src={adminPage}/>


                </div>
                <h3>상세 설명</h3>
                <p>
                    **관리자 모드**는 전체 사용자 목록을 관리하고, 각 사용자 정보를 수정하거나 삭제할 수 있는 강력한 제어 기능을 제공합니다.
                    이를 통해 관리자는 플랫폼을 효율적으로 운영하고, 사용자 정보를 빠르고 정확하게 관리할 수 있습니다.
                </p>
                <br/>
                <p>
                    <span>1) 회원 목록 관리:</span>
                    <ul>
                        <li>
                            <h4>전체 회원 조회:</h4> 관리자는 모든 회원의 목록을 한눈에 볼 수 있으며, 필요에 따라 특정 회원을 검색하여 관리할 수 있습니다.
                        </li>
                        <br/>
                        <li>
                            <h4>회원 정보 수정:</h4> 관리자는 각 회원의 정보(예: 이름, 이메일, 권한)를 수정할 수 있으며, 업데이트된 정보는 즉시 반영됩니다.
                        </li>
                        <br/>
                        <li>
                            <h4>회원 삭제(탈퇴 처리):</h4> 관리자는 필요시 회원을 삭제하거나 탈퇴 처리할 수 있으며, 이 과정은 안전하게 처리되어 데이터 무결성을 보장합니다.
                        </li>
                    </ul>
                </p>
                {/* 관리자 모드 끝 */}
            </div>

        </div>
    </>);
}
