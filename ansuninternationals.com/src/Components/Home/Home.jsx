import React from "react";
import "./Home.css";
import introImg from "./Resources/illustration1.png";
import firstImg from "./Resources/homImg2.png";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
    <Helmet>
        <title>Digital Marketing Solutions & Website Development | Web Design in Texas USA </title>
        <meta name="description" content="ANSUN INTERNATIONAL LLC develops & promotes all the Web Applications that ignite your business. We provide complete software development services ranging from small to complex applications. We are the one who design and develops websites that ignite your business." />
    </Helmet>
      <section className="c-full-home">
        <div className="intro-sec">
          <div className="intro-content container">
            <div className="c-text">
              <div className="c-text-con">
                <h3>IT Design & Consulting Services</h3>
                <p>
                  With the “data age”, all the businesses must run with the
                  efficiency of high-tech digital tools and technologies. Ansun
                  Internationals LLC, one of the best IT consulting company
                  serving in the USA, aids companies with data management,
                  critical infrastructure analysis, etc. through strategic
                  managed service. Our IT consulting services company will give
                  a easy and friendly solution for your business’ complex
                  technological challenges!
                </p>
                <button className="btng btn btn-danger">Contact Us</button>
              </div>
            </div>
            <div className="c-img">
              <img src={introImg} alt="" />
            </div>
          </div>
        </div>
        <div className="first-sec container">
          <div className="fs-img">
            <img src={firstImg} alt="" />
          </div>
          <div className="fs-content">
            <h2>OUR INTELLIGENT TOOLS CAN HELP YOU GROW TO YOUR BUSINESS</h2>
            <p>
              The website is the window of the organization and an important
              part of your branding process online. It is the website that can
              attract visitors and boost your online presence. Through an
              attractive website, you can earn money, or else you are going to
              lose your business. A website design help in converting the
              visitor into a potential customer only if the visitor gets
              attracted to the design of your website. Needless to mention it
              may take a glance or a few seconds for the visitor to stay on your
              website for long and keep coming back to it.
            </p>
          </div>
        </div>
        <div className="first-sec container">
          <div className="fs-content">
            <h2>OUR INTELLIGENT TOOLS CAN HELP YOU GROW TO YOUR BUSINESS</h2>
            <p>
              The website is the window of the organization and an important
              part of your branding process online. It is the website that can
              attract visitors and boost your online presence. Through an
              attractive website, you can earn money, or else you are going to
              lose your business. A website design help in converting the
              visitor into a potential customer only if the visitor gets
              attracted to the design of your website. Needless to mention it
              may take a glance or a few seconds for the visitor to stay on your
              website for long and keep coming back to it.
            </p>
          </div>
          <div className="fs-img">
            <img src={firstImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
