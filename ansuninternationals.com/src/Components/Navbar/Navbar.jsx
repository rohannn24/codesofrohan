import './Navbar.css'
import logo from './Resources/logo.png'
import { Link } from 'react-router-dom';

const handleOnClick = () => {
    if(document.getElementById('control-height').style.height === '100vh'){
        // document.getElementById('hiding').style.display = 'none';
        document.getElementById('control-height').style.height = '70px';
        document.getElementById('control-height').style.overflowY = 'hidden';
    } else{
        // document.getElementById('hiding').style.display = "block";
        document.getElementById('control-height').style.height = "100vh";
        document.getElementById('control-height').style.overflowY = 'scroll';
    }
}
// const handleOnClick1 = () => {
//     if(document.getElementById('hiding1').style.display === 'block'){
//         // document.getElementById('hiding').style.display = 'none';
//         document.getElementById('hiding1').style.height = 'none';
//     } else{
//         // document.getElementById('hiding').style.display = "block";
//         document.getElementById('hiding1').style.display = "block";
//     }
// }

const Navbar = () => {
    return(
        <>
            <nav class="navbar" id = 'control-height'>
            <div class="left-nav">
                <img src={logo} alt="logo"/>
            </div>
            <div class="right-nav" id = "hiding">
                <ul class="nav-list">
                    <li class="list-item"><Link to = '/'>Home</Link></li>
                    <li class="list-item show-dm-box" id = "hider1"><Link to = '/'>Digital Marketing
                        <section className="down-box" id = 'hidding1'>
                            <ul className="d-m-services">
                                <li className='dm-head'>SEO Services</li>
                                <li>Video Marketing</li>
                                <li>Quora Marketing</li>
                                <li>Guest Posting</li>
                                <li>E-Commerce Solution</li>
                                <li>Affiliate Marketing</li>
                                <li>Content Marketing</li>
                                <li>Email Marketing</li>
                                <li>App Marketing</li>
                            </ul>
                            <ul className="d-m-services">
                                <li className='dm-head'>PAY PER CLICK</li>
                                <li>PPC Services</li>
                                <li>Search Advertising</li>
                                <li>Re-Marketing</li>
                                <li>Mobile Advertising</li>
                                <li>Amazon Ads</li>
                                <li>PPC Reseller Services</li>
                                <li>Product Listing Ads</li>
                                <li>Display Advertising</li>
                                <li>Lead Based Marketing</li>
                            </ul>
                            <ul className="d-m-services">
                                <li className='dm-head'>Social Media</li>
                                <li>Social Media Marketing</li>
                                <li>Social Media Advertising</li>
                                <li>Facebook Marketing</li>
                                <li>Twitter Marketing</li>
                                <li>Linkdin Marketing</li>
                                <li>Instagram Markering</li>
                                <li>Pintrest Markering</li>
                                <li>Youtube Markering</li>
                            </ul>
                            <ul className="d-m-services">
                                <li className='dm-head'>SEO Services</li>
                                <li>Enterprise SEO</li>
                                <li>E-Commerce SEO</li>
                                <li>Video SEO</li>
                                <li>Local SEO</li>
                                <li>Google Recovery Services</li>
                                <li>SEO Reseller Services</li>
                                <li>Multi Lingual SEO</li>
                                <li>SEO Copywriting</li>
                                <li>Technical SEO</li>
                                <li>Link Building Services</li>
                                <li>White Label SEO</li>
                            </ul>
                        </section>
                    </Link></li>
                    <li class="list-item"><Link to = '/'>About Us</Link></li>
                    <li class="list-item show-dm-box1"><Link to = '/'>Web Solutions
                    <section className="down-box1">
                            <ul className="d-m-services">
                                <li className='dm-head1'>Web Solution</li>
                                <li>Custom Website Design</li>
                                <li>ECommerce Web Design</li>
                                <li>Responsive Designing</li>
                                <li>Website Re-designing</li>
                                <li>Graphic Designing</li>
                                <li>Profile Designing</li>
                                <li>Logo Designing</li>
                                <li>UX / UI Designing</li>
                                <li>Mobile App Designing</li>
                                <li>Template Based Designing</li>
                            </ul>
                            <ul className="d-m-services">
                                <li className='dm-head1'>APP Development</li>
                                <li>Android App</li>
                                <li>iPhone App</li>
                                <li>iPad App</li>
                                <li>Custom Software</li>
                                <li>Web Application</li>
                                <li>Mobile App Development</li>
                            </ul>
                            <ul className="d-m-services">
                                <li className='dm-head1'>Clone App (Scripts)</li>
                                    <li>Uber Clone</li>
                                    <li>Ola for Cab Clone</li>
                                    <li>Zomato Clone</li>
                                    <li>Swiggy Clone</li>
                                    <li>WhatsApp Clone</li>
                            </ul>
                            <ul className="d-m-services">
                                    <li className='dm-head1'>Web Development</li>
                                    <Link to = '/services/website-development'><li className = "link" >Website Development</li></Link>
                                    <li>E-Commerce Development</li>
                                    <li>Wordpress Development</li>
                                    <li>CMS Development</li>
                                    <li>Custom PHP Development</li>
                                    <li>Laravel Development</li>
                                    <li>Magento Development</li>
                                    <li>Asp.Net Development</li>
                                    <li>Shopify Development</li>
                            </ul>
                        </section>
                    </Link></li>
                    <li class="list-item"><Link to = '/'>Our Clients</Link></li>
                    <li class="list-item"><Link to = '/how-may-we-help-you'>How may We help you!</Link></li>
                    <li class="list-item"><Link to = '/blogs'>Blog</Link></li>
                    <li class="list-item"><Link to = '/'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="bgr" id = "hider" onClick={handleOnClick}>
                <div className="b-line"></div>
                <div className="b-line"></div>
                <div className="b-line"></div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;