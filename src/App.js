import "./css/style.css";
import {Helmet} from "react-helmet";
import {useState} from "react";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("");

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
          <section>
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
