import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const handleNav = () => {
    if (document.getElementById('handled').style.display === 'block') {
        document.getElementById('handled').style.display = 'none';
        document.getElementById('handled1').style.display = 'none';
        document.getElementById('nav1').style.height = '55px';
    } else {
        document.getElementById('handled').style.display = 'block';
        document.getElementById('handled1').style.display = 'block';
        document.getElementById('nav1').style.height = '60vh';
    }
}
const handleHide = () => {
    if(document.getElementById('handled').style.display === 'block'){
        document.getElementById('handled').style.display = 'none';
        document.getElementById('handled1').style.display = 'none';
        document.getElementById('nav1').style.height = '55px';
    }
}
export default function Navbar() {
  return (
    <div>
        <nav class="nav-bar" id = "nav1">
        <div class="left-nav"><h1>Codes of Rohan</h1></div>
        <div id = 'handled' class="mid-nav">
            <ul class="nav-list">
                <li class="list-items"><Link to = '/' onClick={handleHide}>Home</Link></li>
                <li class="list-items show-code">Source Code
                    <ul class="sub-list">
                        <li class="sub-list-items" onClick={handleHide}>React.js</li>
                        <li class="sub-list-items" onClick={handleHide}>C Language</li>
                        <li class="sub-list-items" onClick={handleHide}>JavaScript</li>
                        <li class="sub-list-items" onClick={handleHide}>Java Language</li>
                    </ul>
                </li>
                <li class="list-items"><Link to = '/sitemap' onClick={handleHide}>SiteMap</Link></li>
                <li class="list-items">Materials</li>
                <li class="list-items"><Link to = '/about-me' onClick={handleHide}>About Me</Link></li>
            </ul>
        </div>
        <div id = 'handled1' class="right-nav">
            <div class="btnss"><Link to="/login" onClick={handleHide}>LogIn</Link></div>
            <div class="btnss"><Link to="/sign-up" onClick={handleHide}>SignUp</Link></div>
            
        </div>
    <div className="bgr" id = 'handling' onClick={handleNav}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
    </div>
    </nav>
    </div>
  )
}
