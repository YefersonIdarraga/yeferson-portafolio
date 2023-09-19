import React from "react";
import worlds from "../../assets/worlds-22.png";

const Project4 = ({ showInfo4, setMoreInfo4 }) => {
  const handleClose = () => {
    setMoreInfo4(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <section
      className={`project-window ${showInfo4 ? "project-window-active" : ""}`}
    >
      <i class="bi bi-x-circle" onClick={handleClose}></i>
      <h2>Worlds 2022</h2>
      <p>
        Hemos desarrollado una página web inspirada en el Campeonato Mundial de
        League of Legends como parte de una colaboración con un compañero. En
        este proyecto, pusimos un fuerte énfasis en mejorar nuestras habilidades
        de maquetación utilizando HTML, CSS y JavaScript. Es importante destacar
        que la página es responsive, lo que significa que se adapta
        de manera óptima a dispositivos móviles.
      </p>
      <img src={worlds} alt="Worlds Image" />
      <a
        href="https://yefersonidarraga.github.io/worlds/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-github"></i>{" "}
        https://yefersonidarraga.github.io/worlds/index.html
      </a>
    </section>
  );
};

export default Project4;
