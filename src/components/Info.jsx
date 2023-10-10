// import React from 'react'
import github from "../assets/Vector.png"

function Info() {
  return (
    <>
    <div className="info">
    <div className="logo-foot"><a href="#"> <span>Le</span>ROi <p>Codes</p> </a></div>
        <div className="info-div">
            <p id="phone-x">Phone: +237 672004155</p>
            <p id="email">Email: brandonarmand96@gmail.com</p>
            <img src={github}/>
        </div>
        
    </div>
    <hr />
    <footer>
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>TechStack</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
      <div id="foot-p">
      <p>Built by LeRoi Codes with love and lots of coffee</p>
      </div>
    </footer>
    </>
  )
}

export default Info