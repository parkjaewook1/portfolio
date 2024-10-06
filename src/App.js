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
import projectLogo from "./img/project-logo.png"
import homePic from "./img/KakaoTalk_20240929_204538134_01.jpg";
import mainPic from "./img/KakaoTalk_20240929_204538134.jpg";
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

import {faArrowUp, faBlog} from "@fortawesome/free-solid-svg-icons";

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
                "새로운 도전에 적극적입니다.",
                "효율적인 문제 처리를 추구합니다.",
                "팀워크와 협업을 중시합니다.",
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
            const currentSection = refs.find((ref) => {
                const element = ref.current;
                if (!element) return false;
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;
                return (
                    window.scrollY >= offsetTop - 150 &&
                    window.scrollY < offsetTop + offsetHeight
                );
            });
            if (currentSection && currentSection.current) {
                setActiveSection(currentSection.current.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container">
            <div>
                <Helmet>
                    <title>박재형 웹 포트폴리오</title>
                </Helmet>
            </div>
            {/* Header - navigation */}
            <header className={`header ${isSticky ? "sticky" : ""}`}>
                <a href="#" className="logo">
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
                    <h3 className={"home-content-fullstack"}>Full<span>-</span>Stack Developer</h3>
                    <h1>
                        박재형 <span>입니다.</span>
                    </h1>
                    <h3 className="typed-js">
                        저는 <span ref={el}></span>
                    </h3>
                    <br/>
                    <p>
                        창의적인 문제 해결 과정 중 무한히 형성되는 지식은
                    </p>
                    <p>저에게 마르지 않는 영감을 주며, 열정을 불태우는 연료로 작용합니다.{" "}
                    </p>

                    <br/>
                    <p>
                        열정과 창의성으로 팀에는 새로운 시각을,
                    </p>
                    <p>
                        프로젝트에는 실질적인 개선을 가져올 수 있도록 하겠습니다.
                    </p>
                    <br/>
                    <br/>
                    <p className="home-content-footer"></p>
                    <div className="social-media">
                        <a href="https://github.com/chaiheung">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faBlog}/>
                        </a>
                    </div>
                    <a href="" className="btn" download>
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
                        w={"22vw"}
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
                    <h3>Full<span>-</span>Stack Developer</h3>
                    <p className="about-quotes">
                        스스로만 성장하는 것이 아닌 소속된 회사 역시 함께 성장할 수 있기를,
                    </p>
                    <p>
                        그리고 이에 제가 어느 정도 기여하는 부분이 있기를 기대하고 있습니다.
                    </p>
                    <br/>
                    <p>회사와 함께 달리는 러닝메이트이자 페이스메이커가 되겠습니다.,
                    </p>
                    <p>
                        빠르게 회사의 문화와 분위기에 적응하고, 조직의 구성원이 될 수 있도록 하겠습니다.
                    </p>
                    <br/>
                    <p>
                        혼자 걸어가는 것이 아닌 회사와 함께 보폭을 맞추어 걷는다고 생각하겠습니다.
                    </p>
                    <p>
                        기업과 노동자라는 단순한 관계를 넘어,

                        함께 성장하고 발전하여 유의미한 발자국을 선명하게 남기는
                    </p>
                    <p>
                        상호호혜적 파트너로서 나아갈 수 있기를 기대합니다.
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
                                size={"5xl"}
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
                        <a href="https://github.com/chaiheung" className="btn">
                            방문하기
                        </a>
                    </div>
                    <div className="repository-box">
                        <div className="repository-img">
                            <Image className="repository-image"/>
                        </div>
                        <h3>블로그</h3>
                        <p>
                            저의 개인 블로그는 제가 개발 공부를하며 배운 지식과 경험을
                            공유하는 공간입니다. 여기에서는 제가 공부한 개발 관련 주제들을
                            정리하고, 이를 다른 사람들과 공유하고자 합니다. <br/>
                            <br/> 블로그 글들은 제가 공부한 개념을 명확히 이해하고 정리하는
                            과정을 통해, 제 지식을 확장하고 다른 이들에게도 도움을 제공하는
                            것을 목표로 합니다. 이 블로그는 저의 학습 여정을 기록하고, 개발
                            커뮤니티와 지식을 공유하는 플랫폼으로 자리매김하고 있습니다.
                        </p>
                        <a href="" className="btn">
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
                    <h3>연락처:010-4388-1992</h3>
                    <h3>이메일: </h3>
                </div>
                <div className="footer-iconTop">
                    <a href="#home">
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default App;
