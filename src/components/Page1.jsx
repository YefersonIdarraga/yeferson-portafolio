import React from "react";
import "../styles/page1.css";
import profile from "../assets/profile_picture.jpg";

const Page1 = ({ indexPage2 }) => {
  const handlePage = () => {
    indexPage2(1);
  };

  return (
    <section className="container1">
      <a className="git"
        href="https://github.com/YefersonIdarraga"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-github"></i> GitHub
      </a>
      <div className="division"></div>
      <section className="profile">
        <h1>Yeferson Idarraga Álvarez</h1>
        <section className="picture-cont"></section>
        <section className="picture">
          <img src={profile} alt="Profile picture" />
        </section>
      </section>
      <section className="description">
        <h2>Desarrollador de Software</h2>
        <p>
          Soy egresado del CESDE y estoy entusiasmado por adquirir experiencia
          en el campo laboral. Poseo conocimientos en áreas como desarrollo
          Front-End y administración de bases de datos en SQL Server. Mi
          conjunto de habilidades incluye competencias en HTML, CSS, JavaScript
          y Git, además de contar con un nivel intermedio de inglés.
          <br />
          <br /> Tengo la capacidad de desarrollar programas informáticos que
          son aplicables a las actividades y estrategias empresariales.
          <br />
          <br /> Mi experiencia abarca desde el análisis y diseño hasta la
          implementación de aplicaciones, así como el mantenimiento de programas
          en entornos Windows y para la web. Estoy ansioso por aplicar mis
          conocimientos y habilidades para contribuir al éxito de cualquier
          proyecto en el que me involucre.
        </p>
      </section>
      <i className="bi bi-caret-down-square-fill" onClick={handlePage}></i>
    </section>
  );
};

export default Page1;
