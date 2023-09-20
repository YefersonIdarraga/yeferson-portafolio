import React, { useState, useRef } from "react";
import surveyVideo from "../../assets/survey-video.mp4";

const Project5 = ({ showInfo5, setMoreInfo5 }) => {
  const videoRef = useRef(null);
  const handleClose = () => {
    setMoreInfo5(false);
    if (window.innerWidth <= 479) {
      document.body.style.overflow = 'auto';
    }
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
      className={`project-window ${showInfo5 ? "project-window-active" : ""}`}
    >
      <i class="bi bi-x-circle" onClick={handleClose}></i>
      {!video && (
        <>
          <h2>Survey</h2>
          <p>
            He creado una encuesta utilizando React.js para un compañero, y en
            el video de demostración se puede apreciar que está diseñada de
            manera responsiva, adaptándose a teléfonos móviles.
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
        <source src={surveyVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Project5;
