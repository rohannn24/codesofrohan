import React from 'react'
import './HomeCard.css'

export default function HomeCard() {
  return (
    <div>
        <section className="h-card">
            <div className="hc-img">
                <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/2023-04-29T222718Z_984479747_MT1USATODAY20563970_RTRMADP_3_NASCAR-PRACTICE-AND-QUALIFYING-473x315.jpg" alt="" />
            </div>
            <div className="hc-details">
                <p className='h-tag'>NFL</p>
                <h4>Kyle Busch Uses “Hornet’s Nest” Reference to Dismiss Any Chance of Winning at Atlanta</h4>
                <p className="small-desc">
                Following the epic race at Atlanta, 2-time champ, Kyle Busch recalls his struggle getting trapped in the "hornet's nest" and finishing 5th in the rain-shortened race.
                </p>
                <p className="h-date date">July 11, 2023</p>
                <p className="h-writter writer">Freelancer</p>
            </div>
        </section><hr/>
    </div>
  )
}