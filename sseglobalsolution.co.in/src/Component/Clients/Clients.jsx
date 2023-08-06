import './Clients.css'
import React from 'react'
import logo1 from './Resources/1mg.webp'
import logo2 from './Resources/Amazon.png'
import logo3 from './Resources/dhl.png'
import logo4 from './Resources/dtdc.png'
import logo5 from './Resources/dv.webp'
import logo6 from './Resources/Ecom.png'
import logo7 from './Resources/ms.png'
import logo8 from './Resources/sf.png'
import logo9 from './Resources/ve.jpeg'
import logo10 from './Resources/aramex.png'
import logo11 from './Resources/firstcry1.png'
import logo12 from './Resources/bluedart.png'
import logo13 from './Resources/nykaa.png'
import logo14 from './Resources/Xpressbees_startuptalky.jpg'
import AnimatedPage from '../Animation/Animatedpage'

export default function Clients() {
  return (
    <AnimatedPage>
    <div>
        <section className="c-client-full container">
            <h1 className="c-client-head">
                Our Clients
            </h1><hr />
            <div className="all-clients">
                <div className="three-clients">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                </div>
            </div>
            <div className="all-clients">
                <div className="three-clients">
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
            </div>
            <div className="all-clients">
                <div className="three-clients">
                    <img src={logo7} alt="" />
                    <img src={logo8} alt="" />
                    <img src={logo9} alt="" />
                </div>
            </div>
            <div className="all-clients">
                <div className="three-clients">
                    <img src={logo10} alt="" />
                    <img src={logo11} alt="" />
                    <img src={logo12} alt="" />
                </div>
            </div>
            <div className="all-clients">
            <div className="three-clients">
                    <img src={logo13} alt="" />
                    <img src={logo14} alt="" />
                </div>
            </div>
        </section>
    </div>
    </AnimatedPage>
  )
}
