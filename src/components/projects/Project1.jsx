import React,{ useState } from 'react'

const Project1 = ({ showInfo1, setMoreInfo1 }) => {
    const handleClose = () => {
        setMoreInfo1(false)
    }
  return (
    <section className={`project-window ${showInfo1 ? "project-window-active" : ""}`}>
        <i class="bi bi-x-circle" onClick={handleClose}></i>
        <h2>Quote Builder</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nam magnam accusantium eveniet consequatur harum! Esse accusamus voluptatum omnis nobis nulla, fuga dolorum impedit repellat asperiores, totam quasi, excepturi dolor.
        </p>
    </section>
  )
}

export default Project1