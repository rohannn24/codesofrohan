import './Navbar.css'
import logo from './Resources/logo.PNG'
import insta from './Resources/instagram.png'
import linkedin from './Resources/linkedin.png'
import wikipedia from './Resources/social.png'
import { Link } from 'react-router-dom'
const handleShowing = () => {
    if(document.getElementById('menu').style.height === '70px') document.getElementById('menu').style.height = 'fit-content';
    else document.getElementById('menu').style.height = '70px';
}
const Navbar = () => {
    return(
        <>
            <nav className="c-nav" id = 'menu'>
                <div className="left-nav">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mid-nav">
                    <ul className="navList">
                        <li className="navItems"><Link to = '/'>Home</Link></li>
                        <li className="navItems"><Link to = '/slot-machine'>Players</Link></li>
                        <li className="navItems"><Link to = '/challenge'>Latest News</Link></li>
                        <li className="navItems"><Link to = '/Events'>Top News</Link></li>
                        <li className="navItems"><Link to = '/to-do'>To Do</Link></li>
                        <li className="navItems"><Link to = '/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="right-nav">
                    <div className='insta-img'><img src={insta} alt="insta" /></div>
                    <div className='insta-img'><img src={linkedin} alt="linkedin" /></div>
                    <div className='insta-img'><img src={wikipedia} alt="wikipedia" /></div>
                </div>
                <div className="bgr" id = "showMenu" onClick={handleShowing}>
                    <div className="bgr-line"></div>
                    <div className="bgr-line"></div>
                    <div className="bgr-line"></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;