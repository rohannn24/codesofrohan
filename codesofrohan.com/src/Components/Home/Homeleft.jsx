import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Homeleft() {
  return (
    <div>
        <section class="home-left">
          <div className="list">
            <p className="list-col"><Link to = '/'>#Java</Link></p>
            <p className="list-col"><Link to = '/'>#C++ Tutorial</Link></p>
            <p className="list-col"><Link to = '/'>#C Tutorial</Link></p>
            <p className="list-col"><Link to = '/'>#JavaScript</Link></p>
            <p className="list-col"><Link to = '/'>#Html</Link></p>
            <p className="list-col"><Link to = '/'>#CSS</Link></p>
          </div>
        </section>
    </div>
  )
}
