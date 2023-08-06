import './Home.css';
import React from 'react';
import supply from './Resources/supply-chain.png';
import valuechain from './Resources/value-chain.png';
import special from './Resources/1.gif';
import special1 from './Resources/2.gif';
import special3 from './Resources/3.gif';
import { Link } from 'react-router-dom';
import AnimatedPage from '../Animation/Animatedpage';
import Typed from 'typed.js';

function goToBtn() {
	window.scrollTo({
		top: 0, left: 0, behavior: 'smooth'
	})
}

export default function Home() {
	const el = React.useRef(null);

	React.useEffect(() => {
	  const typed = new Typed(el.current, {
		strings: ['With you', 'For you'],
		typeSpeed: 50,
		loop: true,
	  });
  
	  return () => {
		// Destroy Typed instance during cleanup to stop animation
		typed.destroy();
	  };
	}, []);
	return (
		<AnimatedPage>
			<>
				{/* --------------section-1---------------- */}
				<section className="c-home-s1">
					<div className="c-home-s1-info">
						<h1 className="c-home-heading">SSE Global Solution <span ref={el} style={{color: 'orange', fontWeight: '600'}}/></h1>
						<p className="c-home-p1">Always at Your Service</p>
						<p className="c-home-p2">Since 2016, SSE Global Solution has provided quality services to customers & clients by providing them with the professional care they deserve. Get in touch today to learn more about our Delivery Service.</p>
						<div className="c-home-btn">
							<Link to='/contactus'><p>Contact US</p></Link>
						</div>
					</div>
				</section>

				<section className="sub-sec-1 container">
					<h3>ONE OF THE WORLD'S</h3>
					<h2>MOST TRUSTED SUPPLY CHAIN SPECIALIST</h2><hr /><br />
					<p>SSE Global Solution has over 5 years of experience addressing supply chain challenges for international organisations, large and medium-sized businesses through our fully integrated service offerings. We provide a range of supply chain services from Integrated Supply Chain Solutions to Global Forwarding and Last Mile Solutions tailored to our customers’ needs.</p>
					<p>SSE Global has grown organically and through strategic acquisitions to become a fully integrated global supply chain provider with dedicated employees.</p>
				</section>

				{/* --------------section-2---------------- */}
				<section className="c-home-s2">
					<h1 className="s2-main-head">Our Specialization</h1>
					<div class="social-box">
						<div class="container">
							<p className='s-home-s2-passage'>SSE Globals Pvt. Ltd. is a trusted fast growing company in the field of freight forwarding, providing businesses across diverse industries with efficient and reliable transportation solutions. We specialize in managing the complex logistics of moving goods from one location to another, whether it's across cities, countries, or continents. With our extensive network and strategic partnerships, we ensure that goods are transported seamlessly by air, sea, or land, from the point of origin to the final destination. Our expert team takes care of every aspect of the supply chain, including documentation, customs clearance, tracking, and timely delivery. By leveraging our knowledge, resources, and technological capabilities, we offer tailored solutions that meet the unique transportation needs of our clients, helping them optimize their supply chain operations and achieve their business objectives. With a commitment to excellence and customer satisfaction, SSE Globals Pvt. Ltd. is the go-to partner for reliable and cost-effective freight forwarding services.</p>
							<div class="row">
								<div class="col-lg-4 col-xs-12 text-center">
									<div class="box">
										<i class="fa fa-behance fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>Freight Forwarding</h3>
										</div>
										<div class="box-text">
											<span>SSE Globals Pvt. Ltd. specializes in freight forwarding, providing efficient and reliable transportation solutions for businesses across various industries. Our expert team ensures seamless movement of goods through air, sea, and land, managing all aspects of the supply chain from origin to destination.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-xs-12  text-center">
									<div class="box">
										<i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>Warehousing and Distribution</h3>
										</div>
										<div class="box-text">
											<span>With a strong focus on warehousing and distribution, SSE Globals Pvt. Ltd. offers state-of-the-art storage facilities and optimized inventory management solutions. Our specialization lies in streamlining the storage, handling, and distribution processes to ensure timely delivery and cost-effective operations.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-xs-12 text-center">
									<div class="box">
										<i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>Customs Brokerage</h3>
										</div>
										<div class="box-text">
											<span>As specialists in customs brokerage, SSE Globals Pvt. Ltd. assists clients in navigating the complex world of international trade regulations and customs procedures. Our dedicated team possesses in-depth knowledge and expertise in handling customs documentation, compliance, and clearance, ensuring smooth cross-border shipments.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-xs-12 text-center">
									<div class="box">
										<i class="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>Third-Party Logistics (3PL)</h3>
										</div>
										<div class="box-text">
											<span>SSE Globals Pvt. Ltd. provides comprehensive third-party logistics services, acting as an outsourced partner for businesses seeking end-to-end supply chain solutions. Our specialization in 3PL encompasses inventory management, order fulfillment, transportation, and value-added services, allowing clients to focus on their core competencies.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-xs-12 text-center">
									<div class="box">
										<i class="fa fa-google-plus fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>E-commerce Logistics</h3>
										</div>
										<div class="box-text">
											<span>Recognizing the growing demand for e-commerce logistics, SSE Globals Pvt. Ltd. specializes in managing the unique challenges associated with online retail fulfillment. We offer tailored solutions for order processing, inventory synchronization, last-mile delivery, and returns management, helping businesses thrive in the digital marketplace.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-xs-12 text-center">
									<div class="box">
										<i class="fa fa-github fa-3x" aria-hidden="true"></i>
										<div class="box-title">
											<h3>Supply Chain Solution</h3>
										</div>
										<div class="box-text">
											<span>SSE Globals Pvt. Ltd. provides strategic supply chain solution services, helping businesses optimize their operations for maximum efficiency and cost-effectiveness. Our team of experts conducts comprehensive assessments, designs customized supply chain solutions, and implements process improvements to enhance overall performance and drive growth.</span>
										</div>
										<div class="box-btn">
											<Link to="/aboutus" onClick={goToBtn}>Learn More</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="c-home-s3-f">
					<section className="c-home-s3">
						<h2 className="s3-head">Why Choose us?</h2>
						<div className="s3-body">
							<img src={special} alt="" />
							<div className="s3-body-r">
								<h3 className="s3-list-head">In-House App</h3>
								<ul className="s3-list">
									<li>For Middle Mile and Last Mile operations (Hub and Deliveries) we have developed in house technology. We have our own management system and servers.</li>
									<li>We have API integration with two of the largest E-com player with real time updates and recon. </li>
									<li>This has enabled the E-commerce players to extend the reach to the Tier 3 and below regions & Pin codes. We cover 400 pin codes for them in this sector and are handling 11k packages daily.</li>
								</ul>
							</div>
						</div>
						<div className="s3-body">
							<div className="s3-body-r">
								<h3 className="s3-list-head">Our approach</h3>
								<ul className="s3-list">
									<li>SSE Global Solution emphasises loyalty and transparency with prioritization of client's success.</li>
									<li>Our opeartion team combines creative thinking and technology to develop innovative and dynamic last mile solutions.</li>
									<li>We believe in optimizing distribution networks & maximize delivery accuracy for effective cost management.</li>
									<li>Operational practices are uniquely customised to your satisfaction.</li>
									<li>Visibility at all levels.</li>
									<li>Real Time Resolutions and a Quick Response to crisis.</li>
								</ul>
							</div>
							<img src={special1} alt="" />
						</div>
						<div className="s3-body">
							<img src={special3} alt="" />
							<div className="s3-body-r">
								<h3 className="s3-list-head">Specialization</h3>
								<ul className="s3-list">
									<li>First Mile, Middle Mile and Last Mile operations (B2B & B2C). </li>
									<li>Hub Operations- Sorting and Routing solutions.</li>
									<li>All kinds of Vehicle management and Tracking.</li>
									<li>Specialisation in handling large packages- T.V, Fridge, Washing machines etc.</li>
									<li>Specialisation in scheduled Food and Grocery delivery. </li>
									<li>Scheduled Deliveries and Pickups.</li>
									<li>Reverse logistics</li>
									<li>Seller pickups and Returns. </li>
									<li>All kinds of documents like bank documents, parcels and E-com operations.</li>
								</ul>
							</div>
						</div>
					</section>
				</section>
			</>
		</AnimatedPage>
	)
}