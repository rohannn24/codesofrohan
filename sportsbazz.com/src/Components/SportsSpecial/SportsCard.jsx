import { Link } from 'react-router-dom'
import './Card.css'
import React from 'react'

export default function SportsCard() {
  return (
    <div>
        <section className="c-card">
            <div className="card-img">
            <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/imago4552463-376x315.jpg" alt="" />
            </div>
            <Link to = '/'><div className="details">
                <p>1200 Days After His Death, Immortal Kobe Bryant Lives in the Hearts of 2.4 Million NFL Fans</p>
                <p className="date">July 11, 2023</p>
            </div></Link>
        </section><hr/>
    </div>
  )
}
