import React, { useState, useRef } from "react";
import quoteVideo from "../../assets/quote-builder-video.mp4";

const Project1 = ({ showInfo1, setMoreInfo1 }) => {
  const videoRef = useRef(null);
  const handleClose = () => {
    setMoreInfo1(false);
    document.body.style.overflow = 'auto';
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const [video, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(true);
  };

  const handleVideoClose = () => {
    setVideo(false);
  };

  return (
    <section
      className={`project-window ${showInfo1 ? "project-window-active" : ""}`}
    >
      <i class="bi bi-x-circle" onClick={handleClose}></i>
      {!video && (
        <>
          <h2>Quote Builder</h2>
          <p>
            Fue un proyecto colaborativo desarrollado utilizando Android Studio
            y programado en Java. Su función principal consiste en generar
            cotizaciones a través de la selección de productos junto con sus
            respectivas cantidades. Además de esta funcionalidad, el proyecto
            cuenta con un sistema de autenticación que permite llevar un
            registro de las cotizaciones realizadas, aprovechando las
            herramientas proporcionadas por Firebase.<br></br> Durante la ejecución del
            proyecto, mi principal responsabilidad se centró en establecer la
            conexión con Firestore y crear los RecyclerViews, además de
            encargarme de otros detalles importantes para su funcionamiento.
          </p>
        </>
      )}
      {video && (
        <i class="bi bi-arrows-angle-contract" onClick={handleVideoClose}></i>
      )}
      <video
        className={`video-default ${video ? "video" : ""}`}
        controls
        onClick={handleVideo}
        ref={videoRef}
      >
        <source src={quoteVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Project1;
