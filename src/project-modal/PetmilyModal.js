import React from "react";
import diaryDashboard from "./task-img/diary-dashboard.png";
import diaryList from "./task-img/diary-list.png";
import diaryWrite from "./task-img/diary-write.png";
import diaryEdit from "./task-img/diary-edit.png";
import diaryCalendar from "./task-img/diary-calendar.png";
import diaryGuestbook from "./task-img/diary-guestbook.png";

import responsiveMain from "./task-img/responsive-main.png";
import responsiveDiary from "./task-img/responsive-list.png";
import responsiveGuestbook from "./task-img/responsive-guestbook.png";
import responsiveCalendar from "./task-img/responsive-calendar.png";

import {
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";

const documentationUrl = "https://github.com/parkjaewook1/PetMilyProject/blob/master/docs/PETMILY_TECHNICAL_DOCUMENTATION.md";

const refactoringCases = [
    {
        title: "JWT Role 값 변환",
        before: "JWT는 ROLE_USER / ROLE_ADMIN, 애플리케이션 Enum은 USER / ADMIN을 사용하지만 기존 JWTFilter는 문자열을 바로 Enum으로 변환했습니다.",
        change: "ROLE_ 접두사를 제거한 뒤 Role Enum으로 변환하도록 수정했습니다.",
        reason: "Spring Security 권한 문자열과 도메인 Enum 사이의 표현 차이를 처리하기 위해서입니다.",
        evidence: "로컬 Git b731a19 · backend/src/main/java/com/backend/security/JWTFilter.java · domain/member/Role.java",
        limitation: "정상·비정상 권한 값의 인증 응답과 API별 권한 정책은 추가 검증 과제입니다.",
        section: "6-권한-값과-인증-사용자-정보",
    },
    {
        title: "Axios 재발급·재요청 처리",
        before: "전역 Axios 기본 설정과 응답 인터셉터를 사용하고, 재발급 후 원 요청도 전역 Axios로 재시도했습니다.",
        change: "axiosInstance에 요청·응답 인터셉터를 연결해 매 요청마다 토큰을 읽도록 바꿨습니다. 재발급 요청은 별도 Axios 호출로 보내고, 원 요청은 axiosInstance로 재시도합니다.",
        reason: "원 요청을 재시도할 때도 같은 인스턴스 설정을 유지하고, 재발급 요청에는 해당 응답 인터셉터가 적용되지 않도록 나눴습니다.",
        evidence: "로컬 Git ea96053 · frontend/src/api/axiosConfig.js",
        limitation: "동시 401 처리, LoginProvider와의 토큰 상태 일관성, 실제 브라우저 재발급 흐름은 추가 검증이 필요합니다. _retry는 요청별 재시도 제한입니다.",
        section: "10-axios-및-프론트백엔드-연동",
    },
    {
        title: "이미지 저장 방식 변경",
        before: "과거 Git 코드에서 AWS S3 연동과 Azure Blob 업로드·삭제 구현을 확인했습니다. 실제 운영 사용 여부와 데이터 이전 완료 여부는 이 코드만으로 확인할 수 없습니다.",
        change: "현재 프로필·배너 관련 코드는 Oracle Cloud VM의 로컬 파일 저장과 /uploads 정적 리소스 제공 방식입니다. Vercel은 프론트엔드와 API·이미지 요청 rewrite를 담당합니다.",
        reason: "외부 저장소의 관리 비용과 구성을 검토한 뒤 로컬 파일 저장으로 바꿨습니다. 비용·성능 변화는 측정하지 않았습니다.",
        evidence: "로컬 Git 9d4de1b · 5ca46f2 · cb26b24 / backend/src/main/java/com/backend/service/member/MemberService.java · config/WebConfig.java / frontend/vercel.json",
        limitation: "Oracle Object Storage 사용 경험은 있지만, 코드 이력만으로 전체 스토리지 사용 순서를 확인하지는 못했습니다. 운영 환경의 업로드 경로와 파일 보존·백업 정책도 추가 확인이 필요합니다.",
        section: "11-배포-및-이미지-저장-구조-변화",
    },
];

export function PetmilyModal() {
    return (
      <div className="petmily-detail">
          <section className="modal-info" aria-labelledby="petmily-overview">
              <h2 id="petmily-overview" className="modal-info-heading">Project Overview</h2>
              <p className="modal-info-content">
                  Petmily는 반려동물과 반려인을 위한 커뮤니티 서비스입니다.
                  게시판에서 정보를 나누고, 개인 미니홈피의 다이어리와 방명록에 기록을 남기며 소통할 수 있습니다.
              </p>
              <h4>Project Goals</h4>
              <ul className="modal-info-content petmily-list">
                  <li>반려동물 관련 정보 공유 및 커뮤니티</li>
                  <li>사용자별 미니홈피 다이어리와 방명록</li>
                  <li>PC·모바일에서 사용할 수 있는 반응형 UI</li>
              </ul>
          </section>

          <section className="modal-info" aria-labelledby="petmily-contribution">
              <h2 id="petmily-contribution" className="modal-info-heading">My Contribution</h2>
              <h4>2024년 팀 프로젝트 · 5인</h4>
              <p className="modal-info-content">미니홈피 다이어리 기능을 담당했습니다.</p>
              <ul className="modal-info-content petmily-list">
                  <li>일기 CRUD 및 캘린더 연동</li>
                  <li>방명록과 계층형 답글</li>
                  <li>Spring Boot API 구현 및 React 연결</li>
              </ul>
              <h4>프로젝트 종료 후 개인 리팩토링</h4>
              <ul className="modal-info-content petmily-list">
                  <li>기존 Spring Security 인증 흐름 분석, JWT Role 값 변환 등 일부 코드 수정</li>
                  <li>Access/Refresh Token 관리 흐름 점검, Axios 인증 요청·재발급 처리 수정</li>
                  <li>방명록 조회 SQL에 memberId·diaryId alias 추가</li>
                  <li>배포 연결 및 이미지 저장 구조 변경</li>
              </ul>
              <p className="modal-info-content">
                  로그인 필터, JWT 및 초기 Refresh Token Rotation·DB 처리 기반은 팀의 기존 구현입니다.
                  프로젝트 종료 후에는 이 코드를 분석하고 필요한 부분을 수정했습니다.
              </p>
          </section>

          <section className="modal-info petmily-documentation" aria-labelledby="petmily-documentation">
              <h2 id="petmily-documentation" className="modal-info-heading">Technical Documentation</h2>
              <p className="modal-info-content">
                  소스코드와 Git 변경 이력을 확인하며 인증·토큰 처리, 다이어리 데이터 구조,
                  배포 구성과 개인 리팩토링 내용을 정리했습니다.
              </p>
              <p className="modal-info-content">
                  <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
                      Petmily 기술문서 읽기 (GitHub · 새 탭)
                  </a>
              </p>
              <p className="modal-info-content">
                  2026-11-05에 소스코드와 Git 이력을 확인해 작성했습니다. Petmily 운영 서버와 브라우저 연동 테스트는 포함하지 않았습니다.
              </p>
          </section>

          <section className="modal-info-tasks" aria-labelledby="petmily-refactoring">
              <h2 id="petmily-refactoring" className="modal-info-heading">Key Technical Decisions / Refactoring</h2>
              <p className="modal-info-content">프로젝트 종료 후 수정한 코드입니다. 각 항목에 변경 이유, 코드 근거와 추가로 확인할 내용을 정리했습니다.</p>
              <Accordion allowMultiple defaultIndex={[0]}>
                  {refactoringCases.map((item) => (
                      <AccordionItem key={item.title} border="none" mb={3}>
                          <h3>
                              <AccordionButton className="petmily-accordion-button">
                                  <Box flex="1" textAlign="left" className="petmily-accordion-title">{item.title}</Box>
                                  <AccordionIcon />
                              </AccordionButton>
                          </h3>
                          <AccordionPanel className="petmily-accordion-panel">
                              <dl className="petmily-refactoring-content">
                                  <dt>Before · 기존 구조 또는 문제</dt><dd>{item.before}</dd>
                                  <dt>After · 변경 내용</dt><dd>{item.change}</dd>
                                  <dt>기술적 이유</dt><dd>{item.reason}</dd>
                                  <dt>코드 근거</dt><dd>{item.evidence}</dd>
                                  <dt>아직 남은 제약</dt><dd>{item.limitation}</dd>
                              </dl>
                              <p className="modal-info-content">
                                  <a href={`${documentationUrl}#${item.section}`} target="_blank" rel="noopener noreferrer">
                                      {item.title} 상세 근거 (기술문서 · 새 탭)
                                  </a>
                              </p>
                          </AccordionPanel>
                      </AccordionItem>
                  ))}
              </Accordion>
          </section>

          <section className="modal-info" aria-labelledby="petmily-stack">
              <h2 id="petmily-stack" className="modal-info-heading">Technology Stack</h2>
              <div className="modal-info-skills"><h4>Frontend:</h4><p>HTML, CSS, JavaScript, React, Vite, Axios, Chakra UI</p></div>
              <div className="modal-info-skills"><h4>Backend:</h4><p>Java, Spring Boot, Spring Security, JWT, MyBatis</p></div>
              <div className="modal-info-skills"><h4>Database:</h4><p>MariaDB</p></div>
              <div className="modal-info-skills"><h4>Deployment:</h4><p>Oracle Cloud VM (백엔드·로컬 이미지), Vercel (프론트엔드·rewrite)</p></div>
          </section>

          <section className="modal-info" aria-labelledby="petmily-architecture">
              <h2 id="petmily-architecture" className="modal-info-heading">Architecture</h2>
              <p className="modal-info-content">
                  React → Axios → Vercel rewrite → Spring Security → Controller / Service → MyBatis → MariaDB.
                  이미지 요청은 백엔드의 로컬 파일 정적 리소스로 연결하도록 구성되어 있습니다.
              </p>
              <p className="modal-info-content">
                  팀에서 구현한 인증 구조는 로그인 시 AuthenticationManager, 일반 API 요청 시 JWTFilter와 SecurityContext를 사용합니다.
                  Refresh Token은 DB 확인 후 교체하는 기본 Rotation 구조입니다. 실행 환경에서 적용되는 보안 체인과 동시 재발급 처리는 추가 확인이 필요합니다.
              </p>
          </section>

          <div className="modal-info">
              <h2 className="modal-info-heading">Screenshots · 미니홈피 다이어리</h2>
              <p className="modal-info-content">담당 기능의 현재 화면입니다. 프로젝트 종료 후 개인 수정 사항도 반영되어 있습니다.</p>
          </div>

          <div className="modal-info-tasks">
              {/* 5. 미니홈피 다이어리 */}
              <div className="project-task">
                  <h3>미니홈피 다이어리 (Pet Diary)</h3>

                  <h3>상세 설명</h3>
                  <p>
                      일기 작성·조회·수정·삭제, 캘린더, 방명록을 제공하는 미니홈피입니다.
                  </p>

                  <br />

                  <div>
                      <span>1) 개인화된 공간 (My Room) & UI/UX</span>
                      <ul>
                          <li>
                              <Image className="project-task-images" src={diaryDashboard} alt="다이어리 대시보드 메인 화면" />
                              <h4>대시보드(Dashboard) 뷰:</h4> 다이어리 메인 화면에 최신 일기와 방명록을{" "}
                              <strong>카드(Card) 형태</strong>로 표시합니다.
                          </li>
                          <li>
                              <h4>Dark/Light 모드 지원:</h4> 다크·라이트 테마를 전환할 수 있습니다.
                          </li>
                          <li>
                              <h4>투데이(Today) 및 감정 통계:</h4> 방문자 수를 집계하고 월별 감정 상태를 도넛 차트로 표시합니다.
                          </li>
                      </ul>
                  </div>

                  <br />

                  <div>
                      <span>2) 일기장 & 캘린더 (Diary Board)</span>
                      <ul>
                          <li>
                              <Image className="project-task-images" src={diaryList} alt="다이어리 일기 리스트" />
                              <Image className="project-task-images" src={diaryWrite} alt="다이어리 일기 작성 화면" />
                              <Image className="project-task-images" src={diaryEdit} alt="다이어리 일기 수정 화면" />
                          </li>

                          <li>
                              <h4>일기 CRUD:</h4> 일기를 작성·조회·수정·삭제할 수 있습니다.
                          </li>

                          <li>
                              <Image className="project-task-images" src={diaryCalendar} alt="다이어리 캘린더 화면" />
                          </li>

                          <li>
                              <h4>1일 1기록 & 캘린더:</h4> 하루 1회 기록 정책을 적용하고, 작성한 날짜를 캘린더에 스탬프로 표시합니다.
                          </li>
                      </ul>
                  </div>

                  <br />

                  <div>
                      <span>3) 방명록 (Guest Book) & 소통</span>
                      <ul>
                          <li>
                              <Image className="project-task-images" src={diaryGuestbook} alt="다이어리 방명록 화면" />
                          </li>
                          <li>
                              <h4>프로필 이미지 연동:</h4> 방명록에 작성자의 프로필 이미지를 함께 표시합니다.
                          </li>
                          <li>
                              <h4>다이어리 방명록의 계층형 댓글:</h4> 부모 댓글 참조와 React 재귀 렌더링으로 대댓글을 표시하고 더보기/접기를 제공합니다.
                          </li>
                      </ul>
                  </div>

                  <br />

                  <div>
                      <span>4) 반응형 레이아웃 (Responsive Design)</span>
                      <ul>
                          <li>
                              <Image className="project-task-images" src={responsiveMain} alt="반응형 다이어리 메인 화면" />
                              <Image className="project-task-images" src={responsiveDiary} alt="반응형 다이어리 일기 화면" />
                              <Image className="project-task-images" src={responsiveGuestbook} alt="반응형 다이어리 방명록 화면" />
                              <Image className="project-task-images" src={responsiveCalendar} alt="반응형 다이어리 캘린더 화면" />
                          </li>
                          <li>
                              <h4>모바일/PC 레이아웃:</h4> PC에서는 윈도우 형태의 UI를,
                              모바일에서는 스크롤 화면과 하단 네비게이션 바를 제공합니다.
                          </li>
                      </ul>
                  </div>

              </div>
          </div>

          <section className="modal-info" aria-labelledby="petmily-links">
              <h2 id="petmily-links" className="modal-info-heading">GitHub / Project Links</h2>
              <ul className="modal-info-content petmily-list">
                  <li><a href="https://github.com/parkjaewook1/PetMilyProject" target="_blank" rel="noopener noreferrer">Petmily 소스코드 저장소 (GitHub · 새 탭)</a></li>
                  <li><a href="https://pet-mily-project.vercel.app/" target="_blank" rel="noopener noreferrer">Petmily 서비스 (Vercel · 새 탭)</a></li>
                  <li><a href="https://jaewookpark.my.canva.site/petmily-ppt" target="_blank" rel="noopener noreferrer">Petmily 프로젝트 발표 자료 (새 탭)</a></li>
              </ul>
          </section>
      </div>
    );
}
