import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
    return (
        <div>
            <div className="hero-section">
                <nav></nav>
                <div className="about-text hover-target">
                    <a href="#about">About</a>
                </div>
                <div className="contact-text hover-target">
                    <a href="#contact">Contac</a>
                </div>
                <div className="section-banner">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h1>
                                    JAMES
                                    <br />
                                    RODRIGUEZ
                                </h1>
                            </div>

                            <div className="text-center">
                                <p>
                                    <span className="work-text hover-target">
                                        <a href="#work">Ver proyectos</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
