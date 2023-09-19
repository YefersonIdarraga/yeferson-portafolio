import React, { useState } from "react";
import "../styles/page2.css";
import reactLogo from "../assets/react-logo.png";
import androidLogo from "../assets/android-studio-logo.png";
import sqlLogo from "../assets/sql-logo.png";

const Page2 = ({ indexPage3, indexPage1 }) => {
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

  const handlePage3 = () => {
    indexPage3(2);
  };

  const handlePage1 = () => {
    indexPage1(0);
  };

  return (
    <section className="container2">
      <i className="bi bi-caret-up-square-fill" onClick={handlePage1}></i>
      <h1>Tecnologías más utilizadas:</h1>
      <section className="tech-logos">
        <section className="show-more">
          <section className={`desc ${showMore1 ? "descActive" : ""}`}>
            <h2>React JS</h2>
            <p>
              Esta librería ha sido fundamental en la realización de varios
              proyectos, tanto a nivel personal como en colaboración con otros.
              De hecho, mi portafolio se ha construido utilizando esta
              tecnología.
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
              Gracias a esta herramienta, he tenido la oportunidad de participar
              en proyectos colaborativos en la universidad, así como en
              numerosos proyectos individuales.
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
              Poseo los conocimientos necesarios para estructurar, normalizar y
              llevar a cabo consultas en bases de datos relacionales.
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
      <i className="bi bi-caret-down-square-fill" onClick={handlePage3}></i>
    </section>
  );
};

export default Page2;
