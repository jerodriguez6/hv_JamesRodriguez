import React from "react";
import "./about.css";
import me from "../../images/me.jpg";

const About = () => {
    return (
        <div id="about">
            <div className="about-section">
                <div className="section-about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <img src={me} alt="me" />
                            </div>
                            <div className="col-lg-8 text-center mt-3">
                                <br></br>
                                <p className="mb-1">
                                Soy Desarrollador web y Desarrollador Blockchain, con excelentes relaciones humanas, trabajo en equipo, usando metodologías ágiles (SCRUM), jira y uso de github.
                                Me gusta desarrollar experiencias en nuevas áreas tecnológicas (Blockchain) y estoy abierto a nuevas oportunidades.
                                    <br></br>
                                    <br></br>| Tecnologías |<br></br>
                                    Solidity | web3.js | ERC20, ERC721, BEP20 | OpenZeppelin | HTML5 | CSS3 | JavaScript | React | Node.js
                                    | WordPress | Bootstrap |MySQL |<br></br>
                                    <br></br>| Herramientas |<br></br>
                                    VSCode | Git | GitHub | Jira | Figma | Notion | Ganache | Truffle
                                </p>
                                <br></br>
                            </div>
                            <div className="col-12 text-center">
                                <a
                                    href="https://www.canva.com/design/DAEvxMR7_6Q/J-SwbJ4te8kbdpKEn0KHOA/edit"
                                    target="blank"
                                >
                                    DESCARGAR CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
