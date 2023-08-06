import React from 'react'
import './Aboutme.css'
import Homeleft from '../Home/Homeleft'
import Homeright from '../Home/Homeright'
import LineWithName from '../Home/LineWithName'

export default function Aboutme() {
  return (
    <div className='full-about-me'>
        <Homeleft/>
            <section className="aboutme-main-body say-in-mid">
                <LineWithName name = 'About Me'/>
            </section>
        <Homeright/>
    </div>
  )
}
