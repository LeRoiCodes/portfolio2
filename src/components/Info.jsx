// import React from 'react'
import github from "../assets/Vector.png"

function Info() {
  return (
    <>
    <div className="info">
    <div className="logo"><a href="/"> <span>Le</span>ROi <p>Codes</p> </a></div>
        <div className="info-div">
            <p>+237 672004155</p>
            <p>brandonarmand96@gmail.com</p>
            <img src={github}/>
        </div>
        
    </div>
    <hr />
    </>
  )
}

export default Info