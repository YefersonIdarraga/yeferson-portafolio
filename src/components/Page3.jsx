import React,{ useState } from 'react'
import '../styles/page3.css'

const Page3 = ({ indexPage2 }) => {
    const handlePage2 = () => {
        indexPage2(1);
      };
  return (
    <section className='container3'>
        <i className="bi bi-caret-up-square-fill" onClick={handlePage2}></i>
        <h1>Proyectos realizados:</h1>
        <section className='projects'>
            <section className='project'>
                <h3></h3>
                <img src="" alt="" />
                {/* <button
            onClick={() => handleShowMore1()}
            className={`btn ${showMore1 ? "active" : ""}`}
          >
            <i
              className={`bi ${
                showMore1 ? "bi-arrow-up-circle-fill" : "bi-arrow-up-circle"
              }`}
            ></i>
            Ver más
          </button> */}
            </section>
        </section>
    </section>
  )
}

export default Page3