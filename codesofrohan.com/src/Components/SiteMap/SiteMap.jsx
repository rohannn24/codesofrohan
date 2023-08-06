import React from 'react'
import './SiteMap.css'
import { Link } from 'react-router-dom'
import LineWithName from '../Home/LineWithName'

export default function SiteMap() {
  return (
    <div className='container'>
      <div className='site-map'>
        <p className='head-line'>Codes of Rohan</p><hr className='hr-col'/>
        <LineWithName name = 'Site-map'/>
        <p className='one-line'>Hello everyone, here is the sitemap of our website. Hope this will help you to find your things faster and easier. Dont forget to <span  className='yt-channel'><a href = 'https://www.youtube.com/@codesofrohan' target='_blank'>Subscribe</a></span> Codes of Rohan. </p>
      </div>
      <div className="c-both">
        <div className="sm-left">
          <LineWithName name = 'Course'/>
          <ul className="left-content">
            <li className="c-list"><Link to = ''>HTML</Link></li>
            <li className="c-list"><Link to = ''>CSS</Link></li>
            <li className="c-list"><Link to = ''>JavaScript</Link></li>
            <li className="c-list"><Link to = ''>React.js</Link></li>
            <li className="c-list"><Link to = ''>Angular</Link></li>
          </ul>
        </div>
        <div className="sm-right">
          <LineWithName name = 'Extra'/>
          <ul className="right-content">
            <li className="c-list"><Link to = ''>Java Language</Link></li>
            <li className="c-list"><Link to = ''>C++ Language</Link></li>
            <li className="c-list"><Link to = ''>C Language</Link></li>
            <li className="c-list"><Link to = ''>Question And Answer</Link></li>
            <li className="c-list"><Link to = ''>CSS Quick Short</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
