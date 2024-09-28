import "./css/style.css";
import {Helmet} from "react-helmet";

function App() {


  return (
      <div className="conatiner">
          {/* Dynamically configure <head> elements using Helmet */}
          <div>
              <Helmet>
                  <title>박재형 웹 포트폴리오</title>
              </Helmet>
          </div>
          {/* Header - navigation */}
          <header>
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
