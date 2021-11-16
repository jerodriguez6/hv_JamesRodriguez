import React from 'react';
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
	return (
		<div>
			<div className="hero-section">
				<nav>
				</nav>	
				<div className="about-text hover-target"><a href="#about">about</a></div>
				<div className="contact-text hover-target"><a href="#contact">contact</a></div>
				<div className="section-banner">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-12 text-center">
								<h1>Daniela<br/>Ospina</h1>
							</div>
							<div className="col-12 text-center mb-2">
								<div className="dancing"><span>developer</span></div>
							</div>
							<div className="text-center">
								<p>
									<span className="work-text hover-target"><a href="#work">work</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Banner
