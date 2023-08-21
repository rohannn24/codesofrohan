import "./Webdev.css";
import React from "react";
import wdLogo from './Resources/cd9c91283aedd5fca62cb6cb1e465f59.image'
import finger from './Resources/finger.svg'
import rocket from './Resources/startup.png'

export default function Webdev() {
  return (
    <div>
      <section className="web-dev">
        <div className="full-head">
          <div className="first-circle">
            <div className="second-circle">
              <div className="third-circle">
                <h1 className="top-heading">Web Development</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="wd-info">
            <div className="wdi-text">
              <div className="wdit-container">
                <h1>Website development</h1>
                <p>Create Stunning websites for your online business</p>
                <div className="tag-contain">
                  <p className="tag-1 tg-bold">Faster</p>
                  <p className="tag-2 tg-bold">Better</p>
                  <p className="tag-3 tg-bold">Easier</p>
                </div>
                <button className="btn btn-primary">Get Your Website Know</button>
              </div>
            </div>
            <div className="wdi-img">
              <img src={wdLogo} alt="wdLogo" />
            </div>
        </div>
        <div className="rating-client">
          <img src={finger} alt="finger" />
          <h2 className="main-head">4/5 Rating by 100+ Clients</h2>
          <h3 className="main-head">Serving all businesses alike, Big and Small.</h3>
        </div>
        <div className="choose-us">
          <h3>Why Choose Us?</h3>
          <p>We have a wide variety of certified partners and a customer-centric team to manage your projects end-to-end.</p>
          <div className = "cu-img">
            <div className="cu-line"></div>
            <img src={rocket} alt="" />
            <div className="cu-line"></div>
          </div>
        </div>
          <div className="left-img">
            <img src="https://ansuninternationals.com/image/why-choose-us.svg" alt="" />
            <div className="cu-left-img-content">
              <h3>Delivery Administration.</h3>
              <p>Guaranteed on-time delivery.</p>
              <p>End-to-end assistance.</p>
              <p>Choose what is best for you.</p>
            </div>
          </div>
          <div className="left-img li-rev">
            <img src="https://ansuninternationals.com/image/why-choose-us.svg" alt="" />
            <div className="cu-left-img-content">
              <h3>Payments Made Using Escrow</h3>
              <p>Payment structure dependent on milestones</p>
              <p>Transactions that are secure.</p>
              <p>There is a money-back guarantee.</p>
            </div>
          </div>
          <div className="left-img">
            <img src="https://ansuninternationals.com/image/why-choose-us.svg" alt="" />
            <div className="cu-left-img-content">
              <h3>Agencies that have been verified</h3>
              <p>Partners who have been quality vetted and verified</p>
              <p>There are around 750 agencies across the country.</p>
              <p>Portfolio reviews.</p>
            </div>
          </div>
          <div className="pre-content">
            <h3>Unlock Your Potential with Online Ansun Internationals:</h3>
            <h4>Exceptional Website Development Services for Business Success</h4>
            <p>Ansun Internationals is a company that specializes in providing high-quality website development services to businesses of all sizes. There are several benefits of choosing to work with Ansun Internationals for your website development needs.</p>
            <ul>
              <li><strong>Comprehensive services:</strong> Ansun Internationals offers a wide range of services related to website development, including design, development, optimization, marketing, and monetization. This allows businesses to have a one-stop solution for all their website needs.</li>
              <li><strong>Expertise and experience:</strong> Ansun Internationals have a team of experienced professionals who have the knowledge and skills to create high-quality websites that are optimized for search engines, user-friendly and visually appealing.</li>
              <li><strong>Customizable solutions:</strong> Ansun Internationals will work with their clients to understand their specific needs and goals, and create a customized solution that meets those needs. They will provide a tailor-made solution to match the client's brand and goals.</li>
              <li><strong>Cost-effective:</strong> Ansun Internationals offers competitive pricing for their services, which can help businesses to save money while still getting a high-quality website.</li>
              <li><strong>Flexibility:</strong> Ansun Internationals will work with their clients to ensure that their website is flexible and can be easily updated and modified as needed. This allows businesses to keep their website current and relevant.</li>
            </ul>
          </div>
      </section>
    </div>
  );
}
