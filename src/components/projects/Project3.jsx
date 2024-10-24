import React, { useState, useRef } from "react";
import insightVideo from "../../assets/insight-scout-video.mp4";

const Project3 = ({ showInfo3, setMoreInfo3 }) => {
  const videoRef = useRef(null);
  const handleClose = () => {
    setMoreInfo3(false);
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
      className={`project-window ${showInfo3 ? "project-window-active" : ""}`}
    >
      <i class="bi bi-x-circle" onClick={handleClose}></i>
      {!video && (
        <>
          <h2>Insight Scout</h2>
          <p>
            He trabajado de manera independiente en este proyecto (realizado con
            React JS) donde mi principal responsabilidad fue consumir la API de
            Recruit CRM. En el siguiente vídeo, se puede apreciar parte de mi
            trabajo, aunque cabe mencionar que el enfoque principal era la
            funcionalidad más que la estética del proyecto.
          </p>
        </>
      )}
      {video && (
        <i
          class="bi bi-arrows-angle-contract bi-arrows-angle-contract-is"
          onClick={handleVideoClose}
        ></i>
      )}
      <video
        className={`video-default ${video ? "video" : ""}`}
        controls
        disablePictureInPicture
        controlslist="nodownload noplaybackrate noremoteplayback nopictureinpicture"
        onClick={handleVideo}
        ref={videoRef}
      >
        <source src={insightVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Project3;
