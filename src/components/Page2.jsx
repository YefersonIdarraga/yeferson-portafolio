import React, { useState } from "react";
import "../styles/page2.css";
import reactLogo from "../assets/react-logo.png";
import androidLogo from "../assets/android-studio-logo.png";
import sqlLogo from "../assets/sql-logo.png";

const Page2 = ({ indexPage2, indexPage1 }) => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  const handleShowMore1 = () => {
    setShowMore1(!showMore1);
    setShowMore2(false);
    setShowMore3(false);
  };

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
    setShowMore1(false);
    setShowMore3(false);
  };

  const handleShowMore3 = () => {
    setShowMore3(!showMore3);
    setShowMore1(false);
    setShowMore2(false);
  };

  const handleShowMoreP2 = () => {
    indexPage2(2);
  };

  const handleShowMoreP1 = () => {
    indexPage1(0);
  };

  return (
    <section className="container2">
      <i className="bi bi-caret-up-square-fill" onClick={handleShowMoreP1}></i>
      <h1>Tecnologías más utilizadas:</h1>
      <section className="tech-logos">
        <section className="show-more">
          <section className={`desc ${showMore1 ? "descActive" : ""}`}>
            <h2>React JS</h2>
            <p>
              Es una librería en la que he podido realizar algunos proyectos
              tanto personales como cooperativos. De hecho mi portafolio está
              hecho con esta tecnología.
            </p>
          </section>
          <img
            src={reactLogo}
            alt="React Logo"
            className={`t-logo ${showMore1 ? "logoActive" : ""}`}
          />
          <button
            onClick={() => handleShowMore1()}
            className={`btn ${showMore1 ? "active" : ""}`}
          >
            <i
              className={`bi ${
                showMore1 ? "bi-arrow-up-circle-fill" : "bi-arrow-up-circle"
              }`}
            ></i>
            Ver más
          </button>
        </section>
        <section className="show-more">
          <section className={`desc ${showMore2 ? "descActive" : ""}`}>
            <h2>Android Studio Java</h2>
            <p>
              Con esta herramienta he tenido la oportunidad de formar parte de
              un proyecto colaborativo en la universidad, como otros tantos
              individuales.
            </p>
          </section>
          <img
            src={androidLogo}
            alt="Android Logo"
            className={`t-logo ${showMore2 ? "logoActive" : ""}`}
          />
          <button
            onClick={() => handleShowMore2()}
            className={`btn ${showMore2 ? "active" : ""}`}
          >
            <i
              className={`bi ${
                showMore2 ? "bi-arrow-up-circle-fill" : "bi-arrow-up-circle"
              }`}
            ></i>
            Ver más
          </button>
        </section>
        <section className="show-more">
          <section className={`desc ${showMore3 ? "descActive" : ""}`}>
            <h2>SQL Server</h2>
            <p>
              Tengo los conceptos apropiados para la realización de consultas en
              bases de datos relacionales.
            </p>
          </section>
          <img
            src={sqlLogo}
            alt="SQL Logo"
            className={`t-logo ${showMore3 ? "logoActive" : ""}`}
          />
          <button
            onClick={() => handleShowMore3()}
            className={`btn ${showMore3 ? "active" : ""}`}
          >
            <i
              className={`bi ${
                showMore3 ? "bi-arrow-up-circle-fill" : "bi-arrow-up-circle"
              }`}
            ></i>
            Ver más
          </button>
        </section>
      </section>
      <i
        className="bi bi-caret-down-square-fill"
        onClick={handleShowMoreP2}
      ></i>
    </section>
  );
};

export default Page2;
