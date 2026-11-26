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
        limitation: "정상·비정상 권한 값의 인증 응답과 API별 권한 정책은 추가 검증 과제입니다.",
        section: "6-권한-값과-인증-사용자-정보",
    },
    {
        title: "Axios 재발급·재요청 처리",
        before: "전역 Axios 기본 설정과 응답 인터셉터를 사용하고, 재발급 후 원 요청도 전역 Axios로 재시도했습니다.",
        change: "axiosInstance에 요청·응답 인터셉터를 연결해 매 요청마다 토큰을 읽도록 바꿨습니다. 재발급 요청은 별도 Axios 호출로 보내고, 원 요청은 axiosInstance로 재시도합니다.",
        reason: "원 요청을 재시도할 때도 같은 인스턴스 설정을 유지하고, 재발급 요청에는 해당 응답 인터셉터가 적용되지 않도록 나눴습니다.",
        limitation: "동시 401 처리, LoginProvider와의 토큰 상태 일관성, 실제 브라우저 재발급 흐름은 추가 검증이 필요합니다. _retry는 요청별 재시도 제한입니다.",
        section: "10-axios-및-프론트백엔드-연동",
    },
    {
        title: "이미지 저장 방식 변경",
        before: "과거 Git 코드에서 AWS S3 연동과 Azure Blob 업로드·삭제 구현을 확인했습니다. 실제 운영 사용 여부와 데이터 이전 완료 여부는 이 코드만으로 확인할 수 없습니다.",
        change: "현재 프로필·배너 관련 코드는 Oracle Cloud VM의 로컬 파일 저장과 /uploads 정적 리소스 제공 방식입니다. Vercel은 프론트엔드와 API·이미지 요청 rewrite를 담당합니다.",
        reason: "외부 저장소의 관리 비용과 구성을 검토한 뒤 로컬 파일 저장으로 바꿨습니다. 비용·성능 변화는 측정하지 않았습니다.",
        limitation: "Oracle Object Storage 사용 경험은 있지만, 코드 이력만으로 전체 스토리지 사용 순서를 확인하지는 못했습니다. 운영 환경의 업로드 경로와 파일 보존·백업 정책도 추가 확인이 필요합니다.",
        section: "11-배포-및-이미지-저장-구조-변화",
    },
    {
        title: "회원 삭제 트랜잭션과 롤백",
        before: "회원 삭제가 외래 키 제약으로 실패하면, 그보다 먼저 삭제한 Refresh Token과 로그인 상태만 사라질 수 있었습니다.",
        change: "삭제 대상 회원 행을 FOR UPDATE로 잠근 뒤 관리자 계정인지, 다이어리 등 연관 데이터가 있는지 확인했습니다. 삭제 가능한 일반 회원은 Refresh Token, 로그인 상태, 회원 행을 하나의 DB 트랜잭션에서 정리하도록 묶었습니다.",
        reason: "마지막 단계에서 회원 삭제가 실패해도 앞선 인증 데이터 삭제까지 되돌리기 위해서입니다. 디스크 파일 삭제는 DB 롤백으로 되돌릴 수 없어 트랜잭션에 포함하지 않았습니다.",
        verification: "MariaDB에 연결해 확인한 결과, 마지막 회원 삭제가 외래 키 제약으로 실패해도 회원 행과 앞서 삭제한 인증 데이터가 모두 보존됐습니다.",
        section: "관리자-삭제-정책",
    },
];

export function PetmilyModal() {
    return (
      <div className="petmily-detail">
          <figure className="petmily-shot petmily-shot-hero">
              <Image src={mainPC} alt="Petmily 메인 PC — Modern Pet Journal" />
              <figcaption>Petmily 메인 화면</figcaption>
          </figure>
          <section className="modal-info" aria-labelledby="petmily-overview">
              <h2 id="petmily-overview" className="modal-info-heading">개발 배경</h2>
              <p className="modal-info-content">
                  Petmily는 반려동물과 반려인을 위한 커뮤니티 서비스입니다. 게시판에서 정보를 나누고, 개인 미니홈피의 다이어리와 방명록에 기록을 남기며 소통할 수 있습니다.
              </p>
              <h4>주요 기능</h4>
              <ul className="modal-info-content petmily-list">
                  <li>반려동물 관련 정보 공유 및 커뮤니티</li>
                  <li>사용자별 미니홈피 다이어리와 방명록</li>
                  <li>PC·모바일에서 사용할 수 있는 반응형 UI</li>
              </ul>
          </section>

          <section className="modal-info" aria-labelledby="petmily-contribution">
              <h2 id="petmily-contribution" className="modal-info-heading">담당 역할</h2>
              <h4>2024년 6~7월 · 5인 팀 프로젝트</h4>
              <p className="modal-info-content">5인 팀에서 미니홈피의 다이어리와 방명록을 맡았습니다. Spring Boot로 목록과 편집 API를 만들고 React 화면과 연결했습니다.</p>
              <ul className="modal-info-content petmily-list">
                  <li>일기 작성·조회·수정·삭제, 목록 검색과 페이징, 캘린더 연동</li>
                  <li>방명록의 부모 댓글 목록 페이징과 계층형 답글 렌더링</li>
                  <li>Spring Boot API 구현 및 React 연결</li>
              </ul>
              <h4>프로젝트 종료 후 개인 리팩토링</h4>
              <ul className="modal-info-content petmily-list">
                  <li>기존 Spring Security 인증 흐름 분석, JWT Role 값 변환 등 일부 코드 수정</li>
                  <li>Access/Refresh Token 관리 흐름 점검, Axios 인증 요청·재발급 처리 수정</li>
                  <li>방명록 조회 SQL에 memberId·diaryId alias 추가</li>
                  <li>배포 연결 및 이미지 저장 구조 변경</li>
                  <li>현재 DB 권한 확인, 회원 응답 DTO·SQL 프로젝션 분리, 비밀번호 해시 보존, 회원 삭제 트랜잭션</li>
              </ul>
              <p className="modal-info-content">
                  로그인 필터, JWT 및 초기 Refresh Token Rotation·DB 처리 기반은 팀의 기존 구현입니다.
                  프로젝트 종료 후에는 이 코드를 분석하고 필요한 부분을 수정했습니다.
              </p>
          </section>

          <section className="modal-info petmily-screenshots" aria-labelledby="petmily-screenshots">
              <h2 id="petmily-screenshots" className="modal-info-heading">주요 기능 화면</h2>
              <p className="modal-info-content">일기 작성·조회·수정·삭제, 캘린더, 방명록을 제공하는 미니홈피입니다.</p>
              <div className="petmily-screen-group">
                  <h3>미니홈피 · PC와 모바일</h3>
                  <p className="modal-info-content">미니홈피 첫 화면에 최신 일기와 방명록을 카드로 모았습니다. PC는 창 형태의 화면에서 책갈피 탭으로 이동하고, 모바일은 세로 스크롤과 하단 메뉴로 일기와 방명록을 오갈 수 있습니다. 팀 프로젝트에서는 다크·라이트 테마와 방문자 수 표시, 월별 감정 통계도 제공했습니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={miniPC} target="_blank" rel="noreferrer" aria-label="미니홈피 PC 원본 열기">
                              <Image src={miniPC} alt="미니홈피 PC" loading="lazy" />
                          </a>
                          <figcaption>미니홈피 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot petmily-shot-mobile">
                          <a href={miniMobile} target="_blank" rel="noreferrer" aria-label="미니홈피 모바일 원본 열기">
                              <Image src={miniMobile} alt="미니홈피 모바일" loading="lazy" />
                          </a>
                          <figcaption>미니홈피 모바일</figcaption>
                      </figure>
                  </div>
              </div>
              <div className="petmily-screen-group">
                  <h3>다이어리 · 목록·상세·작성·수정</h3>
                  <p className="modal-info-content">일기 작성·조회·수정·삭제와 목록 검색을 구현했습니다. 검색 결과는 페이지 단위로 조회합니다. 하루 한 건으로 제한하기 위해 같은 미니홈피에 같은 날짜의 일기가 있는지 서비스에서 확인합니다. 날짜별 DB 고유 제약은 추가하지 않았습니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={diaryPC} target="_blank" rel="noreferrer" aria-label="다이어리 일기 목록 PC 원본 열기">
                              <Image src={diaryPC} alt="다이어리 일기 목록 PC" loading="lazy" />
                          </a>
                          <figcaption>다이어리 일기 목록 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot">
                          <a href={diaryDetailPC} target="_blank" rel="noreferrer" aria-label="다이어리 일기 본문 상세 PC 원본 열기">
                              <Image src={diaryDetailPC} alt="다이어리 일기 본문 상세 PC" loading="lazy" />
                          </a>
                          <figcaption>다이어리 일기 본문 상세 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot">
                          <a href={diaryWritePC} target="_blank" rel="noreferrer" aria-label="다이어리 일기 작성 PC 원본 열기">
                              <Image src={diaryWritePC} alt="다이어리 일기 작성 PC" loading="lazy" />
                          </a>
                          <figcaption>다이어리 일기 작성 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot">
                          <a href={diaryEditPC} target="_blank" rel="noreferrer" aria-label="다이어리 일기 수정 PC 원본 열기">
                              <Image src={diaryEditPC} alt="다이어리 일기 수정 PC" loading="lazy" />
                          </a>
                          <figcaption>다이어리 일기 수정 PC</figcaption>
                      </figure>
                  </div>
              </div>
              <div className="petmily-screen-group">
                  <h3>캘린더 · 일기 연결</h3>
                  <p className="modal-info-content">목록 API의 일기를 FullCalendar 이벤트로 바꿔 기록한 날짜를 표시합니다. 목록 응답을 재사용하기 때문에 캘린더 범위는 현재 조회한 페이지의 일기입니다. 모바일에서는 제목을 우선 읽도록 구성했습니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={calendarPC} target="_blank" rel="noreferrer" aria-label="일기 캘린더 PC 원본 열기">
                              <Image src={calendarPC} alt="일기 캘린더 PC" loading="lazy" />
                          </a>
                          <figcaption>일기 캘린더 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot petmily-shot-mobile">
                          <a href={calendarMobile} target="_blank" rel="noreferrer" aria-label="일기 캘린더 모바일 원본 열기">
                              <Image src={calendarMobile} alt="일기 캘린더 모바일" loading="lazy" />
                          </a>
                          <figcaption>일기 캘린더 모바일</figcaption>
                      </figure>
                  </div>
              </div>
              <div className="petmily-screen-group">
                  <h3>방명록 · 기록과 소통</h3>
                  <p className="modal-info-content">방명록 글과 답글을 같은 테이블에 저장하고, replyCommentId로 부모 댓글을 연결했습니다. 답글을 저장하기 전에 부모가 같은 미니홈피의 글인지 확인합니다. 부모 댓글 목록은 페이지 단위로 반환하고, React에서는 평면 배열에서 부모 ID가 일치하는 자식 댓글을 찾아 같은 컴포넌트로 재귀 렌더링합니다.</p>
                  <p className="modal-info-content">방명록에는 작성자의 프로필 이미지를 표시하고, 조회한 답글은 더보기와 접기로 확인할 수 있게 했습니다. 리팩토링 때는 MyBatis 조회에 memberId와 diaryId 별칭을 명시해 두 식별자가 각각의 Java 필드에 연결되도록 했습니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={guestbookPC} target="_blank" rel="noreferrer" aria-label="방명록 PC 원본 열기">
                              <Image src={guestbookPC} alt="방명록 PC" loading="lazy" />
                          </a>
                          <figcaption>방명록 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot petmily-shot-mobile">
                          <a href={guestbookMobile} target="_blank" rel="noreferrer" aria-label="방명록 모바일 원본 열기">
                              <Image src={guestbookMobile} alt="방명록 모바일" loading="lazy" />
                          </a>
                          <figcaption>방명록 모바일</figcaption>
                      </figure>
                  </div>
              </div>
              <div className="petmily-screen-group">
                  <h3>게시판 · 커뮤니티</h3>
                  <p className="modal-info-content">실제 게시글 검색 결과와 게시물 본문 상세 화면입니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={boardPC} target="_blank" rel="noreferrer" aria-label="커뮤니티 게시판 PC 원본 열기">
                              <Image src={boardPC} alt="커뮤니티 게시판 PC" loading="lazy" />
                          </a>
                          <figcaption>커뮤니티 게시판 PC</figcaption>
                      </figure>
                      <figure className="petmily-shot">
                          <a href={boardDetailPC} target="_blank" rel="noreferrer" aria-label="커뮤니티 게시글 본문 상세 PC 원본 열기">
                              <Image src={boardDetailPC} alt="커뮤니티 게시글 본문 상세 PC" loading="lazy" />
                          </a>
                          <figcaption>커뮤니티 게시글 본문 상세 PC</figcaption>
                      </figure>
                  </div>
              </div>
              <div className="petmily-screen-group">
                  <h3>회원 · 로그인</h3>
                  <p className="modal-info-content">Spring Security의 로그인 흐름으로 연결되는 로그인 화면입니다.</p>
                  <div className="petmily-screen-grid">
                      <figure className="petmily-shot">
                          <a href={loginPC} target="_blank" rel="noreferrer" aria-label="회원 로그인 PC — 빈 입력 폼 원본 열기">
                              <Image src={loginPC} alt="회원 로그인 PC — 빈 입력 폼" loading="lazy" />
                          </a>
                          <figcaption>회원 로그인 PC — 빈 입력 폼</figcaption>
                      </figure>
                  </div>
              </div>
          </section>

          <section className="modal-info petmily-documentation" aria-labelledby="petmily-documentation">
              <h2 id="petmily-documentation" className="modal-info-heading">개발 문서</h2>
              <p className="modal-info-content">
                  인증과 토큰 처리, 다이어리 데이터 구조, 배포 구성과 리팩토링의 코드 근거는 기술문서에 정리했습니다.
              </p>
              <p className="modal-info-content">
                  <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
                      Petmily 기술문서 읽기 (GitHub · 새 탭)
                  </a>
              </p>
          </section>

          <section className="modal-info-tasks petmily-backend" aria-labelledby="petmily-backend">
              <h2 id="petmily-backend" className="modal-info-heading">기술 구현 및 보안 개선</h2>
              <p className="modal-info-content">팀에서 만든 Spring Security 인증과 JWT 발급 흐름을 바탕으로, 프로젝트 종료 후 권한 검사와 회원 데이터 처리에서 발견한 문제를 수정했습니다.</p>
              <Accordion allowMultiple defaultIndex={[]}>
                  {backendCases.map((item) => (
                      <AccordionItem key={item.key} border="none" mb={3}>
                          <h3>
                              <AccordionButton className="petmily-accordion-button petmily-tech-button">
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
                              <div className="petmily-refactoring-content petmily-tech-explanation">
                                  <p>{item.problem}</p>
                                  <p>{item.improvement}</p>
                                  <p>{item.verification}</p>
                                  <p>{item.limitation}</p>
                              </div>
                              {item.key === "jwt-flow" && (
                                  <p className="modal-info-content"><a href={`${documentationUrl}#${refactoringCases[0].section}`} target="_blank" rel="noopener noreferrer">JWT Role 값 변환 관련 기술문서 보기</a></p>
                              )}
                          </AccordionPanel>
                      </AccordionItem>
                  ))}
              </Accordion>
              <h3 id="petmily-refactoring" className="petmily-existing-decisions">요청 재시도·이미지 저장·회원 삭제</h3>
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
                              <div className="petmily-refactoring-content">
                                  <p>{item.before}</p>
                                  <p>{item.change} {item.reason}</p>
                                  {item.verification && <p>{item.verification}</p>}
                                  {item.limitation && <p>{item.limitation}</p>}
                              </div>
                              <p className="modal-info-content">
                                  <a href={`${documentationUrl}#${item.section}`} target="_blank" rel="noopener noreferrer">{item.title} 관련 기술문서 보기</a>
                              </p>
                          </AccordionPanel>
                      </AccordionItem>
                  ))}
              </Accordion>
          </section>

          <section className="modal-info" aria-labelledby="petmily-stack">
              <h2 id="petmily-stack" className="modal-info-heading">기술 스택</h2>
              <div className="modal-info-skills"><h4>Frontend:</h4><p>HTML, CSS, JavaScript, React, Vite, Axios, Chakra UI</p></div>
              <div className="modal-info-skills"><h4>Backend:</h4><p>Java, Spring Boot, Spring Security, JWT, MyBatis</p></div>
              <div className="modal-info-skills"><h4>Database:</h4><p>MariaDB</p></div>
              <div className="modal-info-skills"><h4>Deployment:</h4><p>Oracle Cloud VM (백엔드·로컬 이미지), Vercel (프론트엔드·rewrite)</p></div>
          </section>

          <section className="modal-info" aria-labelledby="petmily-architecture">
              <h2 id="petmily-architecture" className="modal-info-heading">시스템 아키텍처</h2>
              <p className="modal-info-content">
                  React의 Axios 요청은 로컬에서 Vite 프록시를, 배포 환경에서 Vercel rewrite를 거쳐 Oracle Cloud VM의 Spring Boot로 전달됩니다. Spring Security를 통과한 요청은 Controller와 Service에서 처리하고, MyBatis로 MariaDB를 조회합니다. 프로필과 배너 이미지는 VM의 로컬 파일에 저장하고 /uploads 경로로 제공합니다.
              </p>
              <p className="modal-info-content">
                  팀에서 구현한 인증 구조는 로그인 시 AuthenticationManager, 일반 API 요청 시 JWTFilter와 SecurityContext를 사용합니다.
                  팀이 구현한 기본 Refresh Token Rotation을 이어받아 기존 토큰 삭제와 새 토큰 저장을 하나의 DB 트랜잭션으로 묶었습니다. 재발급 시에는 현재 DB 권한을 읽어 새 토큰에 반영합니다. Axios에서 원래 요청을 한 번 재시도합니다. 동시 재발급과 실제 배포 환경의 쿠키·프록시 동작은 추가로 확인할 부분입니다.
              </p>
          </section>

          <section className="modal-info" aria-labelledby="petmily-links">
              <h2 id="petmily-links" className="modal-info-heading">GitHub 및 서비스</h2>
              <ul className="modal-info-content petmily-list">
                  <li><a href="https://github.com/parkjaewook1/PetMilyProject" target="_blank" rel="noopener noreferrer">Petmily 소스코드 저장소 (GitHub · 새 탭)</a></li>
                  <li><a href="https://pet-mily-project.vercel.app/" target="_blank" rel="noopener noreferrer">Petmily 서비스 (Vercel · 새 탭)</a></li>
                  <li><a href="https://jaewookpark.my.canva.site/petmily-ppt" target="_blank" rel="noopener noreferrer">Petmily 프로젝트 발표 자료 (새 탭)</a></li>
              </ul>
          </section>
      </div>
    );
}
