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
        <a
          href="https://github.com/YefersonIdarraga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
      </section>
    </section>
  );
};

export default Page4;
