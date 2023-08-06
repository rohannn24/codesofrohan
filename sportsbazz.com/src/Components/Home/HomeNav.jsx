import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function HomeNav() {
  return (
    <div>
        <ul className="mid-first-list">
          <Link to='/'><li>ALL</li></Link>
          <Link to='/category/nba'><li>NBA</li></Link>
          <Link to=''><li>NFL</li></Link>
          <Link to=''><li>MMA</li></Link>
          <Link to=''><li>CRICKET</li></Link>
        </ul>
    </div>
  )
}
