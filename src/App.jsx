import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionIndex = Math.floor(scrollPosition / window.innerHeight);
      setCurrentSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      const targetScrollPosition = index * window.innerHeight;
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePage = (index) => {
    scrollToSection(index);
  };

  const sections = [
    <Page1 indexPage2={handlePage} />,
    <Page2 indexPage1={handlePage} indexPage3={handlePage} />,
    <Page3 indexPage2={handlePage} indexPage4={handlePage} />,
    <Page4 indexPage3={handlePage} />,
  ];

  return (
    <section>
      <div className="gh-cv-cont">
        <a
          className="git"
          href="https://github.com/YefersonIdarraga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github"></i> GitHub
        </a>
        <a
          className="cv"
          href="https://drive.google.com/file/d/1IBGOU7DdabAq3OoIjMOnkFtLvYW2pXwH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-file-earmark-person"></i> Hoja de vida
        </a>
      </div>
      <div className="indicator">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`bi circle ${
              currentSection === index ? "bi-circle-fill" : "bi-circle"
            }`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
      {sections.map((section, index) => (
        <div key={index} className="section" id={`section-${index}`}>
          {section}
        </div>
      ))}
    </section>
  );
}

export default App;
