import React from 'react'
import './Home.css'

export default function LineWithName(props) {
  return (
    <div className='nameWithLine'>
        <p className="name-sec">{props.name}</p>
        <div className="line-sec"></div>
    </div>
  )
}
