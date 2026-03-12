import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";
import "./css/project-modal.css";
import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import projectLogo from "./img/jwplogo.png"
import homePic from "./img/mypic.jpg";
import mainPic from "./img/photo.jpg";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";
import jsLogo from "./img/js-logo.png";
import reactLogo from "./img/react-logo.png";
import project1 from "./img/project1.png";
import viteLogo from "./img/vite-js-logo.png";
import dockerLogo from "./img/docker-logo.png";
import javaLogo from "./img/java-logo.png";
import springBootLogo from "./img/springboot_logo.png";
import mybatisLogo from "./img/mybatis-logo.png";
import mariadbLogo from "./img/mariadb-logo.png";
import jwtLogo from "./img/jwt-logo.png";
import gitLogo from "./img/git-logo.png";
import ec2Logo from "./img/ec2-logo.png";
import s3Logo from "./img/s3-logo.png";
import rdsLogo from "./img/rds-logo.png";
import githubLogo from "./img/github-logo.png";

// ✅ 로컬 이미지 파일 Import
import oracleLogo from "./img/oracle-logo.png";
import vercelLogo from "./img/vercel-logo.png";

import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import {PetmilyModal} from "./project-modal/PetmilyModal";
import {WebPortfolioModal} from "./project-modal/WebPortfolioModal";

function App(props) {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const repositoryRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const el = useRef(null);

    /*Chakra UI Modal*/
    let petmilyModal = useDisclosure();
    let portfolioModal = useDisclosure();

    /* React 스크롤 Reveal*/
    useEffect(() => {
        const config = {
            distance: "80px",
            duration: 2000,
            delay: 100,
        };

        ScrollReveal().reveal(".home-content, .heading", {
            ...config,
            origin: "top",
        });
        ScrollReveal().reveal(
          ".home-img, .skills-container, .repository-container, .project-box",
          { ...config, origin: "bottom" },
        );
        ScrollReveal().reveal(
          ".home-content h1, .about-img, .brackets, .about-content",
          { ...config, origin: "left" },
        );
        ScrollReveal().reveal(".home-content p, .about-content .json-content", {
            ...config,
            origin: "right",
        });
    }, []);

    /* typed.js */
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [

                "Change 새로운 변화를 즐깁니다.",
                "Challenge 새로운 도전에 적극적입니다.",
                "Challenger 변화와 도전에 또 다시 도전하는 사람입니다.",
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const shouldStick = window.scrollY > 100;
            setIsSticky(shouldStick);

            const refs = [
                homeRef,
                aboutRef,
                repositoryRef,
                skillsRef,
                projectRef,
                contactRef,
            ];

            let currentId = "";
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            refs.forEach((ref) => {
                const element = ref.current;
                if (!element) return;
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (
                  scrollPosition >= offsetTop &&
                  scrollPosition < offsetTop + offsetHeight
                ) {
                    currentId = element.id;
                }
            });


            // 페이지 맨 끝까지 스크롤했을 때 contact 강제 active
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
                currentId = "contact";
            }

            if (currentId) setActiveSection(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
      <div className="container">
          <div>
              <Helmet>
                  <title>박재욱 웹 포트폴리오</title>
              </Helmet>
          </div>
          {/* Header - navigation */}
          <header className={`header ${isSticky ? "sticky" : ""}`}>
              <a href="#home" id="homeBtn" className="logo"  onClick={(e) => {
                  e.preventDefault(); // 기본 앵커 이동 막기
                  window.scrollTo({
                      top: 0,
                      behavior: "smooth", // 부드러운 스크롤
                  });
              }}>
                  <Image className="project-logo" src={projectLogo}/>
              </a>
              <i
                className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
                id="menu-icon"
                onClick={toggleMenu}
              ></i>
              <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                  <a href="#home" className={activeSection === "home" ? "active" : ""}>
                      Intro
                  </a>
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                  >
                      About
                  </a>
                  <a
                    href="#skills"
                    className={activeSection === "skills" ? "active" : ""}
                  >
                      Skills
                  </a>
                  <a
                    href="#project"
                    className={activeSection === "project" ? "active" : ""}
                  >
                      Project
                  </a>
                  <a
                    href="#repository"
                    className={activeSection === "repository" ? "active" : ""}
                  >
                      Repository
                  </a>
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                  >
                      Contact
                  </a>
              </nav>
          </header>
          {/* Intro Section */}
          <section className="home" id="home" ref={homeRef}>
              <div className="home-img">
                  <Image className="home-image" src={homePic} alt=""/>
              </div>
              <div className="home-content">
                  <h3 className={"home-content-fullstack"}>Backend<span>-</span>Focused Developer</h3>
                  <h1>
                      박재욱 <span>입니다.</span>
                  </h1>
                  <h3 className="typed-js">
                      저는 <span ref={el}></span>
                  </h3>
                  <br/>
                  <p>
                      기능이 돌아가는 것보다, 왜 그렇게 동작하는지를
                  </p>
                  <p>
                      설명할 수 있는 코드를 짜고 싶어서 다시 공부했습니다.
                  </p>

                  <br/>
                  <p>
                      Spring Boot · Spring Security · JWT 기반 인증 설계,
                  </p>
                  <p>
                      Oracle Cloud 배포까지 직접 경험한 백엔드 개발자입니다.
                  </p>
                  <br/>
                  <br/>
                  <p className="home-content-footer"></p>
                  <div className="social-media">
                      <a href="https://github.com/parkjaewook1">
                          <i className="bx bxl-github"></i>
                      </a>
                  </div>
                  <a href="/portfolio/parkP.pdf" className="btn" download>
                      이력서 다운로드
                  </a>
              </div>
          </section>
          {/* About Section */}
          <section className="about" id="about" ref={aboutRef}>
              <div className="about-img">
                  <Image
                    className="about-image"
                    src={mainPic}
                    alt=""
                    w={"30vw"}
                    bg={
                        "linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"
                    }
                    borderRadius={"50%"}
                    boxShadow={"0 0 3rem black"}
                  />
              </div>
              <div className="about-content">
                  <h2 className="heading">
                      About <span>Me</span>
                  </h2>
                  <h3>Backend<span>-</span>Focused Developer</h3>
                  <p className="about-quotes">
                      Spring Boot 기반 백엔드 개발을 중심으로,
                  </p>
                  <p>
                      인증/권한 설계와 API 구조에 집중합니다.
                  </p>
                  <br/>
                  <p>
                      기능이 동작하는 것만큼,
                  </p>
                  <p>
                      왜 그렇게 동작하는지 설명할 수 있는 코드를 지향합니다.
                  </p>
                  <br/>
                  <p>
                      팀 프로젝트 이후 혼자 전면 리팩토링하며
                  </p>
                  <p>
                      설계의 이유를 직접 고민한 개발자입니다.
                  </p>
                  <br/>
                  <br/>
                  <br/>
              </div>
          </section>

          {/* Skill Section */}
          <section className="skills" id="skills" ref={skillsRef}>
              <h2 className="heading">
                  My <span>Skills</span></h2>
              <div className="skills-container">
                  <div className="skills-box">
                      <h3>Frontend</h3>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={htmlLogo}/>
                          <div className="skill-logo-layer">
                              <div>HTML</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={cssLogo}/>
                          <div className="skill-logo-layer">
                              <div>CSS</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={jsLogo}/>
                          <div className="skill-logo-layer">
                              <div>JavaScript</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={reactLogo}/>
                          <div className="skill-logo-layer">
                              <div>React</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={viteLogo}/>
                          <div className="skill-logo-layer">
                              <div>Vite</div>
                          </div>
                      </div>
                  </div>
                  <div className="skills-box">
                      <h3>Backend</h3>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={javaLogo}/>
                          <div className="skill-logo-layer">
                              <div>Java</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={springBootLogo}/>
                          <div className="skill-logo-layer">
                              <div>Spring Boot</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={jwtLogo}/>
                          <div className="skill-logo-layer">
                              <div>JWT</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={mybatisLogo}/>
                          <div className="skill-logo-layer">
                              <div>MyBatis</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={mariadbLogo} h={"8rem"}/>
                          <div className="skill-logo-layer">
                              <div>MariaDB</div>
                          </div>
                      </div>
                  </div>
                  <div className="skills-box">
                      <h3>etc.</h3>

                      {/* ✅ [수정] Oracle Cloud 로고 (필터 제거 -> 원본 색상 사용) */}
                      <div className="skill-logo-box">
                          <Image
                            className="skill-logos"
                            src={oracleLogo}
                            h={"10rem"}
                            // filter 제거
                          />
                          <div className="skill-logo-layer">
                              <div>Oracle Cloud</div>
                          </div>
                      </div>

                      {/* ✅ Vercel 로고 (다크모드 배경용 흰색 반전 필터 유지) */}
                      <div className="skill-logo-box">
                          <Image
                            className="skill-logos"
                            src={vercelLogo}
                            h={"10rem"}
                            filter="invert(1)"
                          />
                          <div className="skill-logo-layer">
                              <div>Vercel</div>
                          </div>
                      </div>

                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={ec2Logo} h={"10rem"}/>
                          <div className="skill-logo-layer">
                              <div>EC2</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={s3Logo} h={"10rem"}/>

                          <div className="skill-logo-layer">
                              <div>S3</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={rdsLogo} h={"10rem"}/>
                          <div className="skill-logo-layer">
                              <div>RDS</div>
                          </div>
                      </div>

                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={gitLogo} h={"10rem"}/>
                          <div className="skill-logo-layer">
                              <div>Git</div>
                          </div>
                      </div>
                      <div className="skill-logo-box">
                          <Image className="skill-logos" src={dockerLogo} h={"10rem"}/>
                          <div className="skill-logo-layer">
                              <div>Docker</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Project Section */}
          <section className="project" id="project" ref={projectRef}>
              <h2 className="heading">
                  Project <span>Experience</span>
              </h2>
              <div className="project-container">
                  <div className="project-box">
                      <Image src={project1} className="project-image"/>
                      <div className="project-layer">
                          <h4>Petmily</h4>
                          <p>
                              반려동물과 반려인을 위한 종합 커뮤니티 “Petmily”
                          </p>
                          <button className="project-btn" onClick={petmilyModal.onOpen}>
                              더보기
                          </button>
                          {/*----Petmily Modal 시작-------------------*/}
                          <Modal
                            onClose={petmilyModal.onClose}
                            isOpen={petmilyModal.isOpen}
                            size={"5xl"}
                            bg={""}
                          >
                              <ModalOverlay/>
                              <ModalContent p={0}>
                                  <ModalHeader bg={"#1f242d"}>
                                      <div className="modal-header">Petmily</div>
                                  </ModalHeader>
                                  <ModalCloseButton
                                    color={"#dcdcdc"}
                                    fontSize={"1.4rem"}
                                    pt={3}
                                    pr={2}
                                  />
                                  <ModalBody bg={"#323946"}>
                                      <PetmilyModal/>
                                  </ModalBody>
                                  <ModalFooter bg={"#1f242d"}>
                                      <Button
                                        fontSize="2rem"
                                        variant={"link"}
                                        onClick={petmilyModal.onClose}
                                      >
                                          닫기
                                      </Button>
                                  </ModalFooter>
                              </ModalContent>
                          </Modal>
                      </div>
                  </div>
                  <div className="project-box webportfolio">
                      <Image src={projectLogo} className="project-image"/>
                      <div className="project-layer">
                          <h4>Web Portfolio</h4>
                          <p>
                              기술에 대한 호기심과 새로움을 향한 도전은 제가 코딩을 즐기는
                              이유입니다.
                          </p>
                          <button className="project-btn" onClick={portfolioModal.onOpen}>
                              더보기
                          </button>
                          {/*---- Portfolio Modal 시작-------------------*/}
                          <Modal
                            onClose={portfolioModal.onClose}
                            isOpen={portfolioModal.isOpen}
                            size={"3xl"}
                            bg={""}
                          >
                              <ModalOverlay/>
                              <ModalContent p={0}>
                                  <ModalHeader bg={"#1f242d"}>
                                      <div className="modal-header">Web Portfolio</div>
                                  </ModalHeader>
                                  <ModalCloseButton
                                    color={"#dcdcdc"}
                                    fontSize={"1.4rem"}
                                    pt={3}
                                    pr={2}
                                  />
                                  <ModalBody bg={"#323946"}>
                                      <WebPortfolioModal/>
                                  </ModalBody>
                                  <ModalFooter bg={"#1f242d"}>
                                      <Button
                                        fontSize="2rem"
                                        variant={"link"}
                                        onClick={portfolioModal.onClose}
                                      >
                                          닫기
                                      </Button>
                                  </ModalFooter>
                              </ModalContent>
                          </Modal>
                      </div>
                  </div>

              </div>
          </section>

          {/* Repository Section */}
          <section className="repository" id="repository" ref={repositoryRef}>
              <h2 className="heading">
                  My <span>Repository</span>
              </h2>
              <div className="repository-container">
                  <div className="repository-box">
                      <div className="repository-img">
                          <Image className="repository-image" src={githubLogo}/>
                      </div>
                      <h3>GitHub</h3>
                      <p>
                          제 Github 저장소는 제 개인적인 작업물과 학습 과정에서 얻은 지식을
                          기록하는 중요한 공간입니다. 프로젝트 소스 코드, 실험적인 코드
                          조각, 그리고 개발 관련 학습 자료들이 이곳에 저장되어 있습니다.{" "}
                          <br/>
                          <br/> 이 저장소는 제가 개발자로서 성장해 나가는 과정을 보여주는
                          디지털 아카이브 역할을 합니다. 또한, 이곳에 저장된 코드와 문서들은
                          향후 프로젝트에 대한 이해도를 높이고, 개발 기술을 다듬는 데 도움을
                          줍니다.
                      </p>
                      <a href="https://github.com/parkjaewook1" className="btn">
                          방문하기
                      </a>
                  </div>

              </div>
          </section>
          <section className="contact" id="contact" ref={contactRef}>
              <h2 className="heading">
                  Contact <span>Me!</span>
              </h2>
              <div className="contact-box">
                  <p>

                  </p>
                  <br/>
                  <p>

                  </p>
                  <br/>
                  <p>

                  </p>
                  <br/>
                  <br/>
                  <h3>이름:박재욱</h3>
                  <h3>이메일:wodnr5050@gmail.com </h3>
              </div>
              <div className="footer-iconTop">
                  <a href="#home">
                      <FontAwesomeIcon   icon={faArrowUp}/>
                  </a>
              </div>
          </section>
      </div>
    );
}

export default App;