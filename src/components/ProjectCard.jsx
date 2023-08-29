/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

function ProjectCard({img, link, alt }) {
  return (
    <div className="card">
        <div className="card-browser">
          <div className="card-circle"></div>
          <div className="card-circle"></div>
        </div>
        <a href={link}>
        <img className="card-image" src={img}  alt={alt}/>
        </a>
        {/* <h2>{title}</h2>
        <p>{desc}</p>
        <a href={preview}>Live preview</a>
        <a href={code}>View code</a> */}
    </div>
  )
}

export default ProjectCard