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
                        <h3>Inbound Marketing</h3>
                        <p>Nos encargarnos del proceso completo de gestionar un envío. Nuestro compromiso: ejecutar la campaña en menos de 24 horas y sin ningún error.</p>
                        <a href="#contact">Conoce más</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <h3>SEO</h3>
                            <p>Hemos comprobado que el buen contenido es el núcleo y la razón por la cual tanto nosotros como nuestros clientes, triunfamos en la web.</p>
                            <a href="#contact">Conoce más</a>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                    <div className="box">
                        <div className="content">
                        <h3>E-commerce </h3>
                        <p>Somos una Agencia Digital y nos enfocamos en diseñar tu sitio Web, lo convertimos en una máquina de captación de tráfico pensando siempre en la interacción y experiencia de usuario.</p>
                        <a href="#contact">Conoce más</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
