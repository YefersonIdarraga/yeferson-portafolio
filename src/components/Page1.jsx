import React from "react";
import "../styles/page1.css";
import profile from "../assets/profile_picture.jpg";

const Page1 = ({ indexPage1 }) => {
  const handleShowMore = () => {
    indexPage1(1);
  };

  return (
    <section className="container1">
      <div className="division"></div>
      <section className="profile">
        <h1>Yeferson Idarraga Álvarez</h1>
        <section className="picture-cont"></section>
        <section className="picture">
          <img src={profile} alt="Profile picture" />
        </section>
      </section>
      <section className="description">
        <h2>Técnico Asistente en Desarrollo de Software</h2>
        <p>
          Egresado del CESDE, con ganas de adquirir experiencia en el gremio.
          Cuento con conocimientos en áreas como desarrollo Front-End y
          administración de Bases de Datos en SQL Server; conocimientos en HTML,
          CSS, JavaScript, Git y nivel intermedio de inglés. Con capacidad de
          desarrollar programas para computador, aplicados a las actividades y
          estrategias empresariales; análisis, diseño e implementación de
          aplicaciones y el mantenimiento de programas en ambiente Windows y
          para la web.
        </p>
      </section>
      <i
        className="bi bi-caret-down-square-fill"
        onClick={handleShowMore}
      ></i>
    </section>
  );
};

export default Page1;
