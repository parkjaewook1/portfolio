import "./css/style.css";
import {Helmet} from "react-helmet";
import {
    Image,
} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import projectLogo from "./img/project-logo.png"
import homePic from "./img/KakaoTalk_20240929_204538134_01.jpg";
import mainPic from "./img/KakaoTalk_20240929_204538134.jpg";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";
import jsLogo from "./img/js-logo.png";
import reactLogo from "./img/react-logo.png";
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


import {faBlog} from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";

function App() {
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
    const skillsRef = useRef(null);

    const el = useRef(null);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: [
                    "효율적인 문제 해결을 추구합니다.",
                    "새로운 도전에 적극적입니다.",
                    "소통과 팀워크를 중시합니다.",
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

                  </p>

                  <br/>
                  <br/>
                  <br/>
              </div>
          </section>

          {/* Skill Section */}
          <section className="skills" id="skills" ref={skillsRef}>
              <h2 className="heading">
                  My <span>Skills</span>              </h2>
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
          <section>
          </section>
          {/* Repository Section */}
          <section>
          </section>
          {/* Contact Section */}
          <section>
          </section>
      </div>
  );
}

export default App;
