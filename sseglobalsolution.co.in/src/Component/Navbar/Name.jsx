import  './Name.css';
import React from 'react';
import logo from './Resources/logo.png';
import { Link } from 'react-router-dom';
function goToBtn(){
  window.scrollTo({
      top:0, left: 0, behavior: 'smooth'
  })
}
export default function Name() {
  
  return (
    <>
        <section className="c-name">
            <img src={logo} alt="" />
          <h1 onClick={goToBtn}>SSE Global Solution</h1>
        </section>
    </>
  )
}
