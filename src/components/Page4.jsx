import React from "react";
import "../styles/page4.css";

const Page4 = ({ indexPage3 }) => {
  const handlePage3 = () => {
    indexPage3(2);
  };
  return (
    <section className="container4">
      <i className="bi bi-caret-up-square-fill" onClick={handlePage3}></i>
      <section className="sub-cont4">
        <h1>¡Muchas Gracias por ver mi Portafolio!</h1>
        <div className="pages">
          <a
            href="https://github.com/YefersonIdarraga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yeferson-idarraga-%C3%A1lvarez-76b07b279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Page4;
