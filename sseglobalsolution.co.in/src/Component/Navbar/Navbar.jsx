import { Link } from 'react-router-dom'
import  './Navbar.css';
import React from 'react'


function handleOnClick(){
  if(document.getElementById('handle1').style.display === 'none') {
    document.getElementById('handle1').style.display = 'block';
    document.getElementById('handle1').style.padding = '50px';
  } else{
    document.getElementById('handle1').style.display = 'none';
  }
}

function hideNav(){
  if(document.getElementById('handle1').style.display === 'block'){
    document.getElementById('handle1').style.display = 'none';
  } else{
    document.getElementById('handle1').style.display = 'flex';
  }
  document.title = 'SSE Global Solution - home';
}

function goToBtn(){
  window.scrollTo({
      top:0, left: 0, behavior: 'smooth'
  })
}


export default function Navbar() {
  return (
    <>
        <nav className="c-navbar" id = 'nb'>
            <ul className="c-navlist" id = 'handle1'>
                <li className="c-items" onClick={hideNav}><Link onClick={goToBtn} to = '/'>Home</Link></li>
                <li className="c-items" onClick={hideNav}><Link onClick={goToBtn} to = '/services'>Services</Link></li>
                <li className="c-items" onClick={hideNav}><Link onClick={goToBtn} to = '/aboutus'>About</Link></li>
                <li className="c-items" onClick={hideNav}><Link onClick={goToBtn} to = '/contactus'>Contact Us</Link></li>
                <li className="c-items" onClick={hideNav}><Link onClick={goToBtn} to = '/clients'>Clients</Link></li>
            </ul>
            <div className="n-bgr" id = 'handle2' onClick={handleOnClick}>
              <div className="b-line"></div>
              <div className="b-line"></div>
              <div className="b-line"></div>
            </div>
        </nav>
    </>
  )
}
