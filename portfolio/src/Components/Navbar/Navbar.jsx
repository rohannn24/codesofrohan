import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from './Resource/WhatsApp Image 2023-07-30 at 17.08.04.jpg';

const handleNav = () => {
    if (document.getElementById('handled').style.display === 'block') {
        document.getElementById('handled').style.display = 'none';
        document.getElementById('handled1').style.display = 'none';
        document.getElementById('nav1').style.height = '55px';
    } else {
        document.getElementById('handled').style.display = 'block';
        document.getElementById('handled1').style.display = 'block';
        document.getElementById('nav1').style.height = '50vh';
    }
}
const handleHide = () => {
    if(document.getElementById('handled').style.display === 'block'){
        document.getElementById('handled').style.display = 'none';
        document.getElementById('handled1').style.display = 'none';
        document.getElementById('nav1').style.height = '55px';
    }
}

const Navbar = () => {
  return (
    <>
      <nav className="c-nav" id = "nav1">
        <div className="web-name">
            <div className="rap-img"><img src={logo} alt="logo" /></div>
          <h1>Rohan Kumar</h1>
        </div>
        <div className="nav-list" id = 'handled'>
          <ul className="nav-buttons">
            <Link to="">
              <li className="list-items" onClick={handleHide}>Home</li>
            </Link>
            <Link to="">
              <li className="list-items" onClick={handleHide}>Qualities</li>
            </Link>
            <Link to="">
              <li className="list-items" onClick={handleHide}>Skills</li>
            </Link>
            <Link to="">
              <li className="list-items" onClick={handleHide}>About Me</li>
            </Link>
            <Link to="">
              <li className="list-items" onClick={handleHide}>Education</li>
            </Link>
          </ul>
        </div>
        <div className="contact-details" id = 'handled1' onClick={handleHide}>Contact Me</div>
        <div className="bgr" id = "nav-bgr" onClick={handleNav}>
            <div className="b-lines"></div>
            <div className="b-lines"></div>
            <div className="b-lines"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
