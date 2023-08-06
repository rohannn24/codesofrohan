import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Webbothsides() {
  return (
    <div>
      
       <section className="left-side">
        <h3 className="heading">USA's Picks</h3>
        <ul className="home-side-list">
          <Link to=''><li>#Tom Brady</li></Link>
          <Link to=''><li>#UFC290</li></Link>
          <Link to=''><li>#MichaelJordan</li></Link>
          <Link to=''><li>#Shaq</li></Link>
          <Link to=''><li>#TigerWoods</li></Link>
          <Link to=''><li>#MikeTyson</li></Link>
          <Link to=''><li>#SerenaWilliams</li></Link>
          <Link to=''><li>#MichaelPhelps</li></Link>
          <Link to=''><li>#StephCurry</li></Link>
          <Link to=''><li>#LewisHamilton</li></Link>
          <Link to=''><li>#JoeRogan</li></Link>
        </ul>
      </section> 
      <section className="right-side">
        <div className="e-pick">
          <h3 className="heading">Editor's Picks</h3><hr />
          <div className="e-card">
            <h6 className="e-title">Milestone Alert! 2023 US Women’s Open Ft. Nelly Korda, Rose Zhang, and More Doesn’t Disappoint as It Breaks a Self-Made Record From Last Year.</h6>
            <p>Freelancer</p>
            <Link to=''><div className="btn btn-danger">Read Full</div></Link><hr />
          </div>
          <div className="e-card">
            <h6 className="e-title">36-Year-Old Andy Murray’s Big-Hearted Gesture Allows Iranian Activist to Sit Right Behind Roger Federer and Follow the Brit’s Inspiring Victory at Wimbledon Championships</h6>
            <p>Freelancer</p>
            <Link to=''><div className="btn btn-danger">Read Full</div></Link><hr />
          </div>
          <div className="e-card">
            <h6 className="e-title">Otter Steals Surfer’s High-Performance Surf Mat Leaving Him $500 Poorer</h6>
            <p>Freelancer</p>
            <Link to=''><div className="btn btn-danger">Read Full</div></Link><hr />
          </div>
          <div className="e-card">
            <h6 className="e-title">Following Ryan Reynolds’ $218,000,000 Investment, Esteban Ocon Gets Exclusive Deadpool Access Before Worldwide Release</h6>
            <p>Freelancer</p>
            <Link to=''><div className="btn btn-danger">Read Full</div></Link><hr />
          </div>
          <div className="e-card">
            <h6 className="e-title">Less Than a Week After Getting Called Out for His “Dorky Dad” Outfit, Michael Jordan Set to Host Bubba Wallace’s Block Party in Chicago</h6>
            <p>Freelancer</p>
            <Link to=''><div className="btn btn-danger">Read Full</div></Link><hr />
          </div>
        </div>
      </section>
    </div>
  )
}
