import './Message.css'
import React from 'react'
import img2 from './Resources/speech-bubble.png'
import { Link } from 'react-router-dom'
function goToBtn(){
  window.scrollTo({
      top:0, left: 0, behavior: 'smooth'
  })
}
export default function Message() {
  return (
    <>
        <Link to = '/contactus' onClick={goToBtn}><div className="contact-window">
            <p className="c-con">
              Contact Us
            </p>
        </div></Link>
    </>
  )
}
