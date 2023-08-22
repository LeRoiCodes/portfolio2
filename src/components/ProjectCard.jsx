// import React from 'react'

function ProjectCard({img, title, desc, preview, code }) {
  return (
    <div className="card">
        <img className="card-image" src={img} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={preview}>Live preview</a>
        <a href={code}>View code</a>
    </div>
  )
}

export default ProjectCard