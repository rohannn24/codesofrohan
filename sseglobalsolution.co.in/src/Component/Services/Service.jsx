import './Service.css';
import React from 'react';
import safe from './Resources/JOP.gif';
import efficient from './Resources/ET.gif';
import HP from './Resources/HP.gif';
import AnimatedPage from '../Animation/Animatedpage';
export default function Service() {
  return (
    <AnimatedPage>
    <>
        <section className="serv-first">
            <div className="sf-both">
                <h1 className="sf-heading">Our Services</h1>
                <p className="sf-para">With Us your Packages are safe, so sit-back and relax.</p>
            </div>
        </section>

        <section className="serv-second">
            <h2 className="ss-single-head">100% Safe Delivery</h2>
            <div className="ss-single">
                <img src={safe} alt="" />
                <p>
SSE Global is committed to providing its customers with 100% safe delivery of their products. With a strong focus on customer satisfaction and quality assurance, SSE Global has implemented robust systems and processes to ensure that every delivery reaches its destination securely and without any harm.</p>
            </div>
            <h2 className="ss-single-head">Efficient Team</h2>
            <div className="ss-single">
                <p>SSE Global prides itself on maintaining a team that operates at 100% efficiency, ensuring optimal performance and exceptional results. By fostering a culture of collaboration, innovation, and continuous improvement, SSE Global has developed a workforce that consistently delivers outstanding outcomes for its clients.

To achieve a 100% efficient team, SSE Global focuses on several key aspects. Firstly, they place a strong emphasis on talent acquisition and nurturing. By recruiting individuals with diverse skill sets, expertise, and a passion for excellence, SSE Global builds a team that possesses the necessary knowledge and capabilities to



</p>
                <img src={efficient} alt="" />
            </div>
            <h2 className="ss-single-head">High Performance</h2>
            <div className="ss-single">
                <img src={HP} alt="" />
                <p>SSE Global is renowned for its commitment to high performance in all aspects of its operations. By continuously striving for excellence, leveraging cutting-edge technologies, and fostering a culture of innovation, SSE Global consistently delivers outstanding results for its clients. At SSE Global, high performance starts with a team of highly skilled professionals who are passionate about their work. </p>
            </div>
        </section>
    </>
    </AnimatedPage>
  )
}
