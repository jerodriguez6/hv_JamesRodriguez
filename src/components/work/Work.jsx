import React from 'react'
import './work.css';

const Work = () => {
    return (
       <div className="work">
		   <h1 className="titulo-clientes">PROYECTOS</h1>
		   <section id="clients">
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ae34625b8db390fb2b784800d76d225&auto=format&fit=crop&w=700&q=80" alt="a" />
					<p>CHAT</p>
					<h3 className="grid__title">EMPRESARIAL</h3>
					<div className="grid__overlay">
						<button className="viewbutton">Ver proyecto</button>
						<a href="https://intopcol-react-front.vercel.app/auth/login" target="blank">HOLA</a>
					</div>
				</div>
				
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1521104955835-ba91c70d6443?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38cdeda7d073c4b6d47a5776f184cba9&auto=format&fit=crop&w=700&q=80" alt="a"/>
					<p>VIDEOCLUB</p>
					<h3 className="grid__title"> SEO Y PÁGINA WEB</h3>
					<div className="grid__overlay">
						<button className="viewbutton">Ver proyecto</button>
						<a href="https://frontvideoclub.vercel.app/home" target="blank">HOLA</a>
					</div>
				</div>
				
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80"alt="a" />
					<p>50JS</p>
					<h3 className="grid__title"> CHALLENGE</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					<a href="https://50jschallenges.netlify.app/" target="blank">HOLA</a>
					</div>
				</div>
				
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" alt="a"/>
					<p>RESTAURANTE</p>
					<h3 className="grid__title"> INBOUND MARKETING</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					<a href="https://avila-crepes.netlify.app/" target="blank">HOLA</a>
					</div>
				</div>
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" alt="a"/>
					<p>MUSIC</p>
					<h3 className="grid__title"> INBOUND MARKETING</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					<a href="https://daniospina.github.io/Music-website/" target="blank">HOLA</a>
					</div>
				</div>
				<div className="project">
					<img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" alt="a"/>
					<p>SHOPPING</p>
					<h3 className="grid__title"> INBOUND MARKETING</h3>
					<div className="grid__overlay">
					<button className="viewbutton">Ver proyecto</button>
					<a href="https://mercatodo-control.netlify.app/" target="blank">HOLA</a>
					</div>
				</div>
			</section>
	   </div>
    )
}

export default Work
