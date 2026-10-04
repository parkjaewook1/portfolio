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

export function PetmilyModal() {
    return (
      <>
          <div className="modal-info">
              <h2 className="modal-info-heading">Summary</h2>
              <h4>프로젝트 성격</h4>
              <p className="modal-info-content">
                  반려동물·반려인을 위한 커뮤니티 “Petmily” — 다이어리·방명록 기능을 포함한 웹 서비스
              </p>

              <h4>프로젝트 형태</h4>
              <p className="modal-info-content">5인 팀 프로젝트</p>

              <h4>팀 프로젝트 당시 담당</h4>
              <p className="modal-info-content">
                  미니홈피 다이어리 기능
              </p>

              <h4>프로젝트 종료 후</h4>
              <p className="modal-info-content">
                  기존 인증 흐름, 토큰 처리, 배포 연결, 다이어리 기능을 중심으로 개인 리팩토링을 진행했습니다.
              </p>

              <br/>
              <hr/>
              <br/>

          </div>

          <div className="modal-info-tasks">
              <div className="project-task">
                  <Accordion allowToggle defaultIndex={0}>
                      <AccordionItem border="none">
                          <h2>
                              <AccordionButton className="petmily-accordion-button">
                                  <Box flex="1" textAlign="left" className="petmily-accordion-title">
                                      개인 리팩토링 주요 내용
                                  </Box>
                                  <AccordionIcon />
                              </AccordionButton>
                          </h2>

                          <AccordionPanel className="petmily-accordion-panel">
                              <br />
                              <div className="petmily-troubleshooting">
                                  <p>
                                      <span>1) Refresh Token DB 관리와 기본 Rotation</span><br/>
                                      MyBatis로 refresh_token 테이블에 Refresh Token을 저장합니다. 재발급 시 만료·토큰 종류·DB 존재 여부를 확인하고, 기존 Refresh Token을 삭제한 뒤 새 토큰을 저장합니다. 로그아웃 시에는 해당 Refresh Token과 쿠키를 삭제해 이후 재발급을 제한합니다.
                                  </p>
                                  <p>
                                      <span>2) 로그인과 API 요청 인증 흐름</span><br/>
                                      CustomLoginFilter는 AuthenticationManager로 로그인 인증을 처리합니다. 이후 API 요청은 JWTFilter에서 Access Token을 검증하고 SecurityContext에 인증 객체를 등록합니다.
                                  </p>
                                  <p>
                                      <span>3) 권한 값 변환</span><br/>
                                      JWTFilter에서 ROLE_USER / ROLE_ADMIN의 접두사를 제거해 USER / ADMIN Enum으로 변환합니다.
                                  </p>
                                  <p>
                                      <span>4) 다이어리 방명록의 계층형 댓글</span><br/>
                                      replyCommentId로 부모 댓글을 참조합니다. 서버는 부모 댓글의 존재와 동일 다이어리 여부를 확인합니다. 프론트는 자식 댓글을 찾아 DiaryCommentItem을 재귀 렌더링하며 더보기/접기를 제공합니다.
                                  </p>
                                  <p>
                                      <span>5) 배포 경로와 인증 요청 연결</span><br/>
                                      Vercel rewrite로 /api/**와 /uploads/**는 백엔드에, 나머지 경로는 /index.html에 연결합니다. Axios는 상대 URL과 Bearer 헤더를 사용합니다. 401 응답 시 토큰 재발급을 요청하고 새 토큰을 저장한 뒤 원 요청을 재시도합니다.
                                  </p>
                              </div>
                          </AccordionPanel>
                      </AccordionItem>
                  </Accordion>
              </div>
          </div>

          <div className="modal-info">
              <br/>
              <hr/>
              <br/>

              <h2 className="modal-info-heading">Overview</h2>
              <p className="modal-info-content">
                  Petmily는 반려인을 위한 커뮤니티 서비스입니다.
                  게시판과 사용자별 미니홈피 다이어리를 통해 개인 기록을 남기고 사용자 간 소통을 할 수 있습니다.
              </p>

              <br/>
              <hr/>
              <br/>

              <h2 className="modal-info-heading">Project Goals</h2>
              <br/>

              <p className="modal-info-content">
                  <span className="emphasis">*</span>반려동물 관련 정보 공유 및 커뮤니티
              </p>
              <p className="modal-info-content">
                  <span className="emphasis">*</span>사용자별 미니홈피 다이어리와 방명록
              </p>
              <p className="modal-info-content">
                  <span className="emphasis">*</span>PC·모바일에서 사용할 수 있는 반응형 UI
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
                  <p>Java, Spring Boot, Spring Security, JWT, MyBatis</p>
              </div>
              <div className="modal-info-skills">
                  <h4>Database:</h4>
                  <p>MariaDB</p>
              </div>
              <div className="modal-info-skills">
                  <h4>Deployment:</h4>
                  <p>Oracle Cloud Infrastructure, Vercel</p>
              </div>
              <br/>
              <hr/>
              <br/>

              <h2 className="modal-info-heading">Architecture</h2>
              <p className="modal-info-content">
                  Security Filter Chain에서 로그인, Access Token 검증, 로그아웃 요청을 각각 처리합니다.
              </p>
              <br/>
              <hr/>
              <br/>


              <h2 className="modal-info-heading">Repository & Deployment URL</h2>
              <br/>

              <h4>Github</h4>
              <div className="modal-info-content">
                  Project:{" "}
                  <a
                    href="https://github.com/parkjaewook1/PetMilyProject.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                      https://github.com/parkjaewook1/PetMilyProject.git
                  </a>
                  <br/>
              </div>

              <h4>Deployment URL</h4>
              <div className="modal-info-content">
                  URL:{" "}
                  <a
                    href="https://pet-mily-project.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                      https://pet-mily-project.vercel.app/
                  </a>
                  <br/>
                  PPT:{" "}
                  <a
                    href="https://jaewookpark.my.canva.site/petmily-ppt"
                    target="_blank"
                    rel="noreferrer"
                  >
                      https://jaewookpark.my.canva.site/petmily-ppt
                  </a>
              </div>

              <br/>
              <hr/>
              <br/>

              <h2 className="modal-info-heading">팀 프로젝트 당시 담당</h2>
              <p className="modal-info-content">
                  미니홈피 다이어리의 현재 기능과 화면입니다. 프로젝트 종료 후 개인 수정 사항도 반영되어 있습니다.
              </p>
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

      </>
    );
}
