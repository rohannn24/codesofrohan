import './Navbar.css'
import logo from './Resources/logo.PNG'
import insta from './Resources/instagram.png'
import linkedin from './Resources/linkedin.png'
import wikipedia from './Resources/social.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <nav className="c-nav">
                <div className="left-nav">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mid-nav">
                    <ul className="navList">
                        <li className="navItems"><Link to = '/'>Home</Link></li>
                        <li className="navItems"><Link to = '/slot-machine'>Players</Link></li>
                        <li className="navItems"><Link to = '/challenge'>Latest News</Link></li>
                        <li className="navItems"><Link to = '/Events'>Top News</Link></li>
                        <li className="navItems"><Link to = '/'>About Us</Link></li>
                        <li className="navItems"><Link to = '/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="right-nav">
                    <div className='insta-img'><img src={insta} alt="insta" /></div>
                    <div className='insta-img'><img src={linkedin} alt="linkedin" /></div>
                    <div className='insta-img'><img src={wikipedia} alt="wikipedia" /></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;