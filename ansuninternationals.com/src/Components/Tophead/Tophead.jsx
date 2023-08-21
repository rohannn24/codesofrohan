import './Tophead.css'
import email from './Resources/open-mail.png'
import phone from './Resources/phone.png'
const Tophead = () => {
    return(
        <>
            <section className="top-head">
                <div className="contact-info">
                    <div className="c-info">
                        <img src={email} alt="email" />
                        <p><a href='email'>care@ansuninternationals.com</a></p>
                    </div>
                    <div className="c-info">
                        <img src={phone} alt="phone" />
                        <p>+91 96508 75839</p>
                    </div>
                    <div className="c-info">
                        <img src={phone} alt="phone" />
                        <p>+1 832-546-0604</p>
                    </div>
                </div>
                <div className="other-links"></div>
                <div className="socials"></div>
            </section>
        </>
    );
};

export default Tophead;