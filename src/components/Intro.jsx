// import React from 'react'
import me from '../assets/IMG_8823-1.jpeg'
// import me from '../assets/IMG-20230330-WA0011.jpg'

function Intro() {
  return (
    <section className="hero">
        <div className="intro"><p>Hi 👋,</p> <p>My name is</p> <span>Brandon Armand Nyamkimbi</span> <p>I build things for web</p></div>
        <div className="intro-image"><img src={me} /></div>
    </section>
  )
}

export default Intro