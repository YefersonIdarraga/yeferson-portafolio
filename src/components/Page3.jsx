import React, { useState } from "react";
import "../styles/page3.css";
import quoteBuilder from "../assets/quote-builder.png";
import suculenta from "../assets/suculenta.jpg";
import worlds from "../assets/worlds.png";
import survey from "../assets/survey.jpg";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import Project5 from "./projects/Project5";

const Page3 = ({ indexPage2, indexPage4 }) => {
  const handlePage2 = () => {
    indexPage2(1);
  };

  const [moreInfo1, setMoreInfo1] = useState(false);
  const [moreInfo2, setMoreInfo2] = useState(false);
  const [moreInfo3, setMoreInfo3] = useState(false);
  const [moreInfo4, setMoreInfo4] = useState(false);
  const [moreInfo5, setMoreInfo5] = useState(false);

  const handleMoreInfo1 = () => {
    setMoreInfo1(true);
  };
  const handleMoreInfo2 = () => {
    setMoreInfo2(true);
  };
  const handleMoreInfo3 = () => {
    setMoreInfo3(true);
  };
  const handleMoreInfo4 = () => {
    setMoreInfo4(true);
  };
  const handleMoreInfo5 = () => {
    setMoreInfo5(true);
  };

  const handlePage4 = () => {
    indexPage4(3);
  };
  return (
    <section className="container3">
      <i className="bi bi-caret-up-square-fill" onClick={handlePage2}></i>
      <section className="sub-cont3">
        <h1>Proyectos realizados:</h1>
        <section className="projects">
          <Project1 showInfo1={moreInfo1} setMoreInfo1={setMoreInfo1} />
          <Project2 showInfo2={moreInfo2} setMoreInfo2={setMoreInfo2} />
          <Project3 showInfo3={moreInfo3} setMoreInfo3={setMoreInfo3} />
          <Project4 showInfo4={moreInfo4} setMoreInfo4={setMoreInfo4} />
          <Project5 showInfo5={moreInfo5} setMoreInfo5={setMoreInfo5} />
          <section className="project" onClick={handleMoreInfo1}>
            <div className="project-hover">
              <h3>Quote Builder</h3>
              <span>
                <i class="bi bi-hand-index-thumb-fill"></i>
                <h4>Click para más Info</h4>
              </span>
            </div>
            <img src={quoteBuilder} alt="Quote Builder Logo" />
          </section>
          <section
            className="project project-suculenta"
            onClick={handleMoreInfo2}
          >
            <div className="project-hover">
              <h3>Maria Suculentas S.A.S.</h3>
              <span>
                <i class="bi bi-hand-index-thumb-fill"></i>
                <h4>Click para más Info</h4>
              </span>
            </div>
            <img src={suculenta} alt="Suculenta" />
          </section>
          <section
            className="project project-suculenta"
            onClick={handleMoreInfo3}
          >
            <div className="project-hover">
              <h3>Insight Scout</h3>
              <span>
                <i class="bi bi-hand-index-thumb-fill"></i>
                <h4>Click para más Info</h4>
              </span>
            </div>
            <h1>Insight Scout</h1>
          </section>
          <section className="project project-worlds" onClick={handleMoreInfo4}>
            <div className="project-hover">
              <h3>Worlds 2022</h3>
              <span>
                <i class="bi bi-hand-index-thumb-fill"></i>
                <h4>Click para más Info</h4>
              </span>
            </div>
            <img src={worlds} alt="Worlds" />
          </section>
          <section className="project project-survey" onClick={handleMoreInfo5}>
            <div className="project-hover">
              <h3>Survey</h3>
              <span>
                <i class="bi bi-hand-index-thumb-fill"></i>
                <h4>Click para más Info</h4>
              </span>
            </div>
            <img src={survey} alt="Survey" />
          </section>
        </section>
      </section>
      <i className="bi bi-caret-down-square-fill" onClick={handlePage4}></i>
    </section>
  );
};

export default Page3;
