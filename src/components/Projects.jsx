// import React from 'react'
import {projects} from "../assets/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section className="projects">
        <h1>Projects</h1>
        <p>Things I{"'"}ve built so far</p>
        <div className="projects-container">
           { projects.map((project, i) => 
           <ProjectCard
           key={i}
           img={project.img}
           link={project.link}
           alt={project.alt} />
           )}
        </div>
    </section>
  )
}

export default Projects