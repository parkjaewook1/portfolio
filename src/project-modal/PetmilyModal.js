import React, { useEffect, useState } from "react";


export function PetmilyModal() {

    return (
        <>
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
                    반려동물 및 반려인 인구가 폭발적으로 증가함에 따라 펫코노미(Pet+Economy) 시장이 국내외적으로 관심을 받고 있습니다. 주인에게 기쁨을 준다는 의미의 ‘애완동물’이라는 명칭에의 전통적인 주종관계에서, 동반자적 의미의 ‘반려동물’로의 인식 전환과 함께, 양육 정보, 건강 관리, 교육, 사회화 등의 다양한 정보를 반려인들이 공유하고 소통할 수 있는 플랫폼이 부족한 상황이라고 생각했습니다. 이에 사용자들이 보다 쉽게
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
                    <p>HTML, CSS, JavaScript, React, Vite,Axios, ChakraUI</p>
                </div>
                <div className="modal-info-skills">
                    <h4>Backend:</h4>
                    <p>Java, Spring-boot, Spring Security, JWT, OAuth2, MyBatis</p>
                </div>
                <div className="modal-info-skills">
                    <h4>Database:</h4>
                    <p>MariaDB</p>
                </div>
                <div className="modal-info-skills">
                    <h4>Deployment:</h4>
                    <p>AWS (EC2, S3, RDS), Docker, Docker hUB</p>
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

            </div>
        </>
    );
}
