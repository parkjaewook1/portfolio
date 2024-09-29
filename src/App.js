import "./css/style.css";
import {Helmet} from "react-helmet";
import React, {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
      <div className="conatiner">
          {/* Dynamically configure <head> elements using Helmet */}
          <div>
              <Helmet>
                  <title>박재형 웹 포트폴리오</title>
              </Helmet>
          </div>
          {/* Header - navigation */}
          <header className={`header ${isSticky ? "sticky" : ""}`}>
              <a href="#" className="logo">
                  ParkJayHeung
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
                  {/*<Image className="home-image" src={homePic} alt=""/>*/}
              </div>
              <div className="home-content">
                  <h3>안녕하세요, 새내기 개발자</h3>
                  <h1>
                      박재형 <span>입니다.</span>
                  </h1>
                  <h3 className="typed-js">
                      저는, <span ref={el}></span>
                  </h3>
                  <br/>
                  <p>
                      창의적인 문제 해결 과정 중
                  </p>
                  <p>무한히 형성되는 지식은 저에게 마르지 않는 영감을 주며,</p>
                  <p>
                      열정을 불태우는 연료로 작용합니다.{" "}
                  </p>
                  <br/>
                  <p>
                      열정과 창의성으로 팀과 프로젝트에
                  </p>
                  <p>
                      새로운 시각과 실질적인 개선을 가져올 수 있도록 하겠습니다.
                  </p>
                  <br/>
                  <br/>
                  <p className="home-content-footer"></p>
                  <div className="social-media">
                      <a href="https://github.com/chaiheung">
                          <i className="bx bxl-github"></i>
                      </a>
                      <a href="">
                          <FontAwesomeIcon icon={faBlog} />
                      </a>
                  </div>
                  <a href="" className="btn" download>
                      이력서 다운로드
                  </a>
              </div>
          </section>
          {/* About Section */}
          <section>
          </section>
          {/* Skill Section */}
          <section>
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
