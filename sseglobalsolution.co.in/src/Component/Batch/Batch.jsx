import { Link } from 'react-router-dom'
import './Batch.css'
import React from 'react'
function goToBtn(){
    window.scrollTo({
        top:0, left: 0, behavior: 'smooth'
    })
  }
export default function Batch() {
  return (
    <div>
        <Link to = '/aboutus' onClick={goToBtn}><setion className="batch1">
            <p>About US</p>
        </setion></Link>
    </div>
  )
}
