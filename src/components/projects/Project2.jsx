import React from "react";
import mariaSuculentas from "../../assets/maria-suculentas.png";

const Project2 = ({ showInfo2, setMoreInfo2 }) => {
  const handleClose = () => {
    setMoreInfo2(false);
    if (window.innerWidth <= 479) {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <section
      className={`project-window ${showInfo2 ? "project-window-active" : ""}`}
    >
      <i class="bi bi-x-circle" onClick={handleClose}></i>
      <h2>Maria Suculentas S.A.S.</h2>
      <p>
        Proyecto colaborativo desarrollado como parte de un trabajo
        universitario. Esta iniciativa consistió en la creación de una
        maquetación utilizando React.js, aprovechando las dependencias
        react-router-dom y Bootstrap, y complementándola con estilos
        personalizados mediante CSS.
      </p>
      <img src={mariaSuculentas} alt="Screenshot Maria Suculentas" />
      <a
        href="https://yefersonidarraga.github.io/maria-suculentas-sas/#/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-github"></i>{" "}
        https://yefersonidarraga.github.io/maria-suculentas-sas/#/
      </a>
    </section>
  );
};

export default Project2;
