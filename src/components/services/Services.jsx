import React from "react";
import "../services/services.css";

const Services = () => {
    return (
        <div>
            <div id="services" className="services">
                <div className="container">
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h3>Frontend</h3>
                                <p>
                                    Branding, UX/UI, wireframes y Desarrollo de
                                    interfaz de la web.
                                </p>
                                <a href="#work">Conoce más</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h3>Backend </h3>
                                <p>
                                    Desarrollo de bases de datos relacionales y
                                    no relacionales.
                                </p>
                                <a href="#work">Conoce más</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h3>Blockchain Y Criptomonedas</h3>
                                <p>
                                    Actualmente me estoy formando en el
                                    desarrollo blockchain y criptomonedas.
                                </p>
                                <a href="#work">Conoce más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
