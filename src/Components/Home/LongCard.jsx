import React from 'react'
import './Home.css'

export default function LongCard(props) {
  return (
    <div className='h-card-long'>
        <div className="h-long-card">
            <div className='ft-img'><img src={props.img} alt="" /></div>
            <p className="f-t-card"><p className='tag'>{props.tag}</p>{props.title}</p>
          </div>
    </div>
  )
}
