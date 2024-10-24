import React, { useState, useEffect } from "react";
import "../styles/page1.css";
import profile from "../assets/profile_picture.jpg";

const Page1 = ({ indexPage2 }) => {
  const handlePage = () => {
    indexPage2(1);
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="container1">
      <div className="division"></div>
      <section className={`sub-cont1 ${animate ? "animate" : ""}`}>
        <section className="profile">
          <section className="title">
            <h1>Yeferson Idarraga Álvarez</h1>
            <h2>Desarrollador de Software</h2>
          </section>
          <section className="picture">
            <img src={profile} alt="Profile picture" />
          </section>
        </section>
        <section className="description">
          <p>
            Soy egresado del CESDE y estoy entusiasmado por adquirir experiencia
            en el campo laboral. Poseo conocimientos en áreas como desarrollo
            Front-End y administración de bases de datos en SQL Server. Mi
            conjunto de habilidades incluye competencias en HTML, CSS,
            JavaScript, React, Android Studio y Git, además de contar con un
            nivel intermedio de inglés.
            <br />
            <br /> Tengo la capacidad de desarrollar programas informáticos que
            son aplicables a las actividades y estrategias empresariales.
            <br />
            <br /> Mi experiencia abarca desde el análisis y diseño hasta la
            implementación de aplicaciones, así como el mantenimiento de
            programas en entornos Windows y para la web. Estoy ansioso por
            aplicar mis conocimientos y habilidades para contribuir al éxito de
            cualquier proyecto en el que me involucre.
          </p>
        </section>
      </section>
      <i className="bi bi-caret-down-square-fill" onClick={handlePage}></i>
    </section>
  );
};

export default Page1;
