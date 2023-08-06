import React from 'react'
import './Navstyle.css'
import Sidenav from './Sidenav'
import { Link } from "react-router-dom"

function showOption(){
    if(document.getElementById('side-nav').style.display === 'none'){
        document.getElementById('side-nav').style.display = 'block'
    } else{
        document.getElementById('side-nav').style.display = 'none'
    }
}
function goToBtn() {
    window.scrollTo({
      top: 0, left: 0, behavior: 'smooth'
    })
  }
  
function hide(){
    document.getElementById("side-nav").style.display = 'none';
}
export default function Navbar() {
    return (
        <>
            <nav className="top-nav">
                <div className="first-part">
                    <div className="auto-mg">
                        <div className="nav-bgr" onClick={showOption}>
                            <div className="bgr-lines"></div>
                            <div className="bgr-lines"></div>
                            <div className="bgr-lines"></div>
                        </div>
                        <div className="email-notifi">
                            Subscribe For Mail Updates
                        </div>
                    </div>
                </div>
                <div className="mid-part">
                    <h2><Link to = "/" onClick={goToBtn}>SportsBazz</Link></h2>
                </div>
                <div className="last-part">

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div id="side-nav">
                <Sidenav/>
            </div>
        </>
    )
}
