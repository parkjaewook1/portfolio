import React from "react";
import { backendCases } from "./PetmilyBackendContent";
import mainPC from "./task-img/petmily-latest/main-1440.png";
import miniPC from "./task-img/petmily-latest/mini-1440.png";
import miniMobile from "./task-img/petmily-latest/mini-390.png";
import diaryPC from "./task-img/petmily-latest/diary-1440.png";
import diaryWritePC from "./task-img/petmily-latest/diary-write-1440.png";
import diaryEditPC from "./task-img/petmily-latest/diary-edit-1440.png";
import calendarPC from "./task-img/petmily-latest/calendar-1440.png";
import calendarMobile from "./task-img/petmily-latest/calendar-390.png";
import guestbookPC from "./task-img/petmily-latest/guestbook-1440.png";
import guestbookMobile from "./task-img/petmily-latest/guestbook-390.png";
import boardPC from "./task-img/petmily-latest/board-1440.png";
import boardDetailPC from "./task-img/petmily-latest/board-detail-1440.png";
import diaryDetailPC from "./task-img/petmily-latest/diary-detail-1440.png";
import loginPC from "./task-img/petmily-latest/member-login-1440.png";

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
          <figure className="petmily-shot petmily-shot-hero">
              <Image src={mainPC} alt="Petmily 메인 PC — Modern Pet Journal" />
              <figcaption>최신 메인 화면 · 기존 Petmily 로고와 Modern Pet Journal 디자인</figcaption>
          </figure>
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
                  <li>후속 개인 개선: 관리자 현재 DB Role 확인, 회원 DTO·SQL 프로젝션 분리, 선택적 비밀번호 수정의 해시 보존 및 격리 회귀 검증</li>
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

          <section className="modal-info-tasks petmily-backend" aria-labelledby="petmily-backend">
              <h2 id="petmily-backend" className="modal-info-heading">기술 구현 및 보안 개선</h2>
              <p className="modal-info-content">팀의 기존 Spring Security·JWT·Refresh 기반 위에 수행한 후속 개인 개선입니다. 현재 로컬 소스와 기존 격리 테스트 기록을 근거로 정리했습니다. 운영 서버 보안 감사나 이번 이미지 작업에서 새로 수행한 운영 검증 결과는 아닙니다.</p>
              <p className="modal-info-content">주제를 펼치면 코드 기반 설명과 검증 범위를 볼 수 있습니다. 기존 H2·MockMvc API 84건과 회원 보안 단위 13건의 통과 기록, 별도의 격리 MariaDB HTTP 기록을 구분해 사용했습니다.</p>
              <Accordion allowMultiple defaultIndex={[]}>
                  {backendCases.map((item, index) => (
                      <AccordionItem key={item.key} border="none" mb={3}>
                          <h3>
                              <AccordionButton className="petmily-accordion-button petmily-tech-button">
                                  <Box as="span" className="petmily-tech-number">0{index + 1}</Box>
                                  <Box flex="1" textAlign="left" className="petmily-accordion-title">{item.title}</Box>
                                  <AccordionIcon />
                              </AccordionButton>
                          </h3>
                          <AccordionPanel className="petmily-accordion-panel petmily-tech-panel">
                              <figure className="petmily-tech-figure">
                                  <picture>
                                      <source media="(max-width: 600px)" srcSet={item.mobileDiagram} />
                                      <img src={item.diagram} alt={`${item.title} — 실제 코드 기반 설명도`} loading="lazy" />
                                  </picture>
                                  <figcaption>설명용 벡터 도식 · <a href={item.diagram} target="_blank" rel="noopener noreferrer">PC 원본</a> · <a href={item.mobileDiagram} target="_blank" rel="noopener noreferrer">모바일 원본</a></figcaption>
                              </figure>
                              <dl className="petmily-refactoring-content petmily-tech-explanation">
                                  <dt>해결하려던 문제</dt><dd>{item.problem}</dd>
                                  <dt>적용한 기술</dt><dd>{item.technology}</dd>
                                  <dt>직접 수행한 개선</dt><dd>{item.improvement}</dd>
                                  <dt>검증한 결과</dt><dd>{item.verification}</dd>
                              </dl>
                              <p className="petmily-tech-evidence">코드·테스트 근거: {item.evidence}</p>
                              <p className="petmily-tech-limit">범위와 한계: {item.limitation}</p>
                              {item.key === "jwt-flow" && (
                                  <p className="modal-info-content"><a href={`${documentationUrl}#${refactoringCases[0].section}`} target="_blank" rel="noopener noreferrer">JWT Role 값 변환 상세 근거 (기술문서 · 새 탭)</a></p>
                              )}
                          </AccordionPanel>
                      </AccordionItem>
                  ))}
              </Accordion>
              <h3 id="petmily-refactoring" className="petmily-existing-decisions">기존 Axios·이미지 저장 구조 검토</h3>
              <Accordion allowMultiple defaultIndex={[]}>
                  {refactoringCases.slice(1).map((item) => (
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
                                  <a href={`${documentationUrl}#${item.section}`} target="_blank" rel="noopener noreferrer">{item.title} 상세 근거 (기술문서 · 새 탭)</a>
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

          <section className="modal-info petmily-screenshots" aria-labelledby="petmily-screenshots">
              <h2 id="petmily-screenshots" className="modal-info-heading">주요 기능 화면</h2>
              <p className="modal-info-content">2026-11-10 로컬 화면입니다. 가상 반려동물의 예시 콘텐츠를 사용했으며, 로그인 아이디·비밀번호·개인정보는 포함하지 않았습니다. 기존 팀 기능과 이후 개인 개선을 구분한 기여 설명은 위 내용을 기준으로 합니다.</p>
              <div className="petmily-screen-group">
                  <h3>미니홈피 · PC와 모바일</h3>
                  <p className="modal-info-content">책갈피 탭과 모바일 하단 탭으로 일기와 방명록에 접근합니다.</p>
                  <figure className="petmily-shot">
                      <Image src={miniPC} alt="미니홈피 PC" loading="lazy" />
                      <figcaption>미니홈피 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot petmily-shot-mobile">
                      <Image src={miniMobile} alt="미니홈피 모바일" loading="lazy" />
                      <figcaption>미니홈피 모바일</figcaption>
                  </figure>
              </div>
              <div className="petmily-screen-group">
                  <h3>다이어리 · 목록·상세·작성·수정</h3>
                  <p className="modal-info-content">실제 최신 사이트의 일기 목록·본문 상세·작성 중(미저장)·수정 화면입니다.</p>
                  <figure className="petmily-shot">
                      <Image src={diaryPC} alt="다이어리 일기 목록 PC" loading="lazy" />
                      <figcaption>다이어리 일기 목록 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot">
                      <Image src={diaryDetailPC} alt="다이어리 일기 본문 상세 PC" loading="lazy" />
                      <figcaption>다이어리 일기 본문 상세 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot">
                      <Image src={diaryWritePC} alt="다이어리 일기 작성 PC" loading="lazy" />
                      <figcaption>다이어리 일기 작성 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot">
                      <Image src={diaryEditPC} alt="다이어리 일기 수정 PC" loading="lazy" />
                      <figcaption>다이어리 일기 수정 PC</figcaption>
                  </figure>
              </div>
              <div className="petmily-screen-group">
                  <h3>캘린더 · 일기 연결</h3>
                  <p className="modal-info-content">일기가 작성된 날짜를 표시합니다. 모바일에서는 제목을 우선 읽도록 구성했습니다.</p>
                  <figure className="petmily-shot">
                      <Image src={calendarPC} alt="일기 캘린더 PC" loading="lazy" />
                      <figcaption>일기 캘린더 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot petmily-shot-mobile">
                      <Image src={calendarMobile} alt="일기 캘린더 모바일" loading="lazy" />
                      <figcaption>일기 캘린더 모바일</figcaption>
                  </figure>
              </div>
              <div className="petmily-screen-group">
                  <h3>방명록 · 기록과 소통</h3>
                  <p className="modal-info-content">작성 폼과 방명록 목록, 검색 화면입니다.</p>
                  <figure className="petmily-shot">
                      <Image src={guestbookPC} alt="방명록 PC" loading="lazy" />
                      <figcaption>방명록 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot petmily-shot-mobile">
                      <Image src={guestbookMobile} alt="방명록 모바일" loading="lazy" />
                      <figcaption>방명록 모바일</figcaption>
                  </figure>
              </div>
              <div className="petmily-screen-group">
                  <h3>게시판 · 커뮤니티</h3>
                  <p className="modal-info-content">실제 게시글 검색 결과와 게시물 본문 상세 화면입니다.</p>
                  <figure className="petmily-shot">
                      <Image src={boardPC} alt="커뮤니티 게시판 PC" loading="lazy" />
                      <figcaption>커뮤니티 게시판 PC</figcaption>
                  </figure>
                  <figure className="petmily-shot">
                      <Image src={boardDetailPC} alt="커뮤니티 게시글 본문 상세 PC" loading="lazy" />
                      <figcaption>커뮤니티 게시글 본문 상세 PC</figcaption>
                  </figure>
              </div>
              <div className="petmily-screen-group">
                  <h3>회원 · 로그인</h3>
                  <p className="modal-info-content">입력값이 없는 로그인 폼입니다. 로그인 정보와 개인정보는 담지 않았습니다.</p>
                  <figure className="petmily-shot">
                      <Image src={loginPC} alt="회원 로그인 PC — 빈 입력 폼" loading="lazy" />
                      <figcaption>회원 로그인 PC — 빈 입력 폼</figcaption>
                  </figure>
              </div>
          </section>

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
