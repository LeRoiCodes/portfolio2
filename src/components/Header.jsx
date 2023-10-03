import github from "../assets/Vector.png"

function Header() {
  return (
    <div className="header">
    
        <div className="logo"><a href="/"> <span>Le</span>ROi <p>Codes</p> </a></div>
        <div className="nav">
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>techStack</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
                <li><a><img src={github}/></a></li>
            </ul>
            
        </div>
    </div>
  )
}

export default Header