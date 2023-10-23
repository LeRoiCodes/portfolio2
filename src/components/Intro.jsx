// import React from 'react'
import me from '../assets/IMG_8823-1.jpeg'
// import me from '../assets/IMG-20230330-WA0011.jpg'

function Intro() {
  return (
    <section className="hero">
      <div className="hero-x">
        <div className="intro"><p>Hi 👋,</p> <p>My name is</p> <span>Brandon Armand N.</span> <p>I build things for the web</p></div>
        <div className="intro-image"><img src={me} /></div>
      </div>
        
    </section>
  )
}

export default Intro