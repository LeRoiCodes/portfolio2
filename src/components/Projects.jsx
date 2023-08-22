// import React from 'react'
import {projects} from "../assets/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section className="projects">
        <h1>My Projects</h1>
        <p>Things I{"'"}ve built so far</p>
        <div className="project">
           { projects.map((project) => 
           <ProjectCard
           key={project.title}
           title={project.title}
           img={project.img}
           preview={project.preview}
           desc={project.desc}
           code={project.code} />
           )}
        </div>
    </section>
  )
}

export default Projects