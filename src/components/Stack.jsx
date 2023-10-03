// import React from 'react'
import github from '../assets/akar-icons_github-fill.png'
import bootstrap from '../assets/logos_bootstrap.png'
import git from '../assets/logos_git-icon.png'
import react from '../assets/logos_react.png'
import css from '../assets/vscode-icons_file-type-css.png'
import html from '../assets/vscode-icons_file-type-html.png'
import sass from '../assets/logos_sass.png'
import js from '../assets/vscode-icons_file-type-js-official.png'
import tailwind from '../assets/vscode-icons_file-type-tailwind.png'
import vscode from '../assets/vscode-icons_file-type-vscode.png'



function Stack() {
  return (
    <section className="stack">
        <div className="brief">
          <h1>My Tech Stack</h1>
        <p>Technologies I have been working with recently </p>
        </div>
        <div className='stack-images'>
          <img src={html} alt={html} />
          <img src={css} alt={css} />
          <img src={js} alt={js} />
          <img src={git} alt={git} />
          <img src={bootstrap} alt={bootstrap} />
          <img src={react} alt={react} />
          <img src={github} alt={github} />
          <img src={sass} alt={sass} />
          <img src={tailwind} alt={tailwind} />
          <img src={vscode} alt={vscode} />
        </div>
    </section>
  )
}

export default Stack