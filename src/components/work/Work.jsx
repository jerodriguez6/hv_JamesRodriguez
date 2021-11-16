import React from 'react'
import './work.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
    return (
       <div>
		   <section id="clients">
				<div className="project">
				<img className="project__image" src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ae34625b8db390fb2b784800d76d225&auto=format&fit=crop&w=700&q=80" alt="a" />
				<p>CLIENTE</p>
				<h3 className="grid__title"> SEO Y PÁGINA WEB</h3>
				<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
				</div>
				</div>
				
				<div className="project">
				<img className="project__image" src="https://images.unsplash.com/photo-1521104955835-ba91c70d6443?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38cdeda7d073c4b6d47a5776f184cba9&auto=format&fit=crop&w=700&q=80" alt="a"/>
				<p>CLIENTE</p>
				<h3 className="grid__title"> SEO Y PÁGINA WEB</h3>
				<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
				</div>
				</div>
				
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80"alt="a" />
					<p>CLIENTE</p>
					<h3 className="grid__title"> INBOUND MARKETING</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					</div>
				</div><div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" alt="a"/>
					<p>CLIENTE</p>
					<h3 className="grid__title"> INBOUND MARKETING</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					</div>
				</div>
			</section>
	   </div>
    )
}

export default Work
