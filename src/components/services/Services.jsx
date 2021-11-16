import React from 'react'
import '../services/services.css'

const Services = () => {
    return (
        <div>
            <div id="services" className="services">
                <div className="container">
                    <div className="card">
                    <div className="box">
                        <div className="content">
                        <h3>Diseño</h3>
                        <p>Diseño de identidad de marca, UX/UI, wireframes, frameworks.</p>
                        <a href="#work">Conoce más</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <h3>Frontend</h3>
                            <p>Desarrollo del frontend teniendo en cuenta la identidad de marca.</p>
                            <a href="#work">Conoce más</a>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                    <div className="box">
                        <div className="content">
                        <h3>Backend </h3>
                        <p>Desarrollo de bases de datos relacionales y no relacionales segun la necesidad.</p>
                        <a href="#work">Conoce más</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
