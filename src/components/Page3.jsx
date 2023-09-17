import React,{ useState } from 'react'
import '../styles/page3.css'
import quoteBuilder from '../assets/quote-builder.png'
import Project1 from './projects/Project1';

const Page3 = ({ indexPage2 }) => {
    const handlePage2 = () => {
        indexPage2(1);
      };
    
    const [moreInfo1, setMoreInfo1] = useState(false)

    const handleMoreInfo1 = () => {
      setMoreInfo1(true)
    }
  return (
    <section className='container3'>
        <i className="bi bi-caret-up-square-fill" onClick={handlePage2}></i>
        <h1>Proyectos realizados:</h1>
        <section className='projects'>
            <Project1 showInfo1={moreInfo1} setMoreInfo1={setMoreInfo1} />
            <section className='project' onClick={handleMoreInfo1}>
                <div className="project-hover">
                  <h3>Quote Builder</h3>
                  <span>
                    <i class="bi bi-hand-index-thumb-fill"></i>
                    <h4>Click para más Info</h4>
                  </span>
                </div>
                <img src={quoteBuilder} alt="Quote Builder Logo" />
            </section>
        </section>
    </section>
  )
}

export default Page3