import React from 'react'
import './NBA.css'
import HomeNav from '../Home/HomeNav'
import nbaLogo from './Resources/basketball-ball.png'
import SportsCard from './SportsCard'
import AnimatedPage from '../Animation/Animatedpage'
import Animatedpagetoleft from '../Animation/Animatedpagetoleft'
import Animatedpagetoright from '../Animation/Animatedpagetoright'
export default function NBA() {
    return (
        <div>
            <AnimatedPage>
            <section className="nba-page">
                <HomeNav />
                <div className="one-nba-head">
                    <img src={nbaLogo} alt="" />
                    <div className="nba-head"><h3>NBA</h3></div>
                    <div className="nba-line"></div>
                </div>
                <div className="nba-info"><p>NBA News Feed</p></div>

                <Animatedpagetoleft><SportsCard/></Animatedpagetoleft>
                <Animatedpagetoright><SportsCard/></Animatedpagetoright>
                <Animatedpagetoleft><SportsCard/></Animatedpagetoleft>
                <Animatedpagetoright><SportsCard/></Animatedpagetoright>
                <Animatedpagetoleft><SportsCard/></Animatedpagetoleft>
                <Animatedpagetoright><SportsCard/></Animatedpagetoright>
                <Animatedpagetoleft><SportsCard/></Animatedpagetoleft>
                <Animatedpagetoright><SportsCard/></Animatedpagetoright>
            </section>
            </AnimatedPage>
        </div>
    )
}
