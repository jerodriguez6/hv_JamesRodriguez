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
                                    Soy Desarrollador web full stack y
                                    administrador financiero con 8 años de
                                    experiencia en el sector financiero, con
                                    excelentes relaciones humanas, trabajo en
                                    equipo, usando metodologías ágiles (SCRUM) y
                                    uso de github. Me gusta desarrollar
                                    experiencias en nuevas áreas tecnológicas y
                                    estoy abierto a nuevas oportunidades.
                                    <br></br>
                                    <br></br>| Tecnologías |<br></br>
                                    HTML5 | CSS3 | JavaScript | React | Node.js
                                    | WordPress | Bootstrap |MySQL |<br></br>
                                    <br></br>| Herramientas |<br></br>
                                    VSCode | Git | GitHub | Jira | Figma |
                                    Photoshop | Notion
                                </p>
                                <br></br>
                            </div>
                            <div className="col-12 text-center">
                                <a
                                    href="https://www.canva.com/design/DAEvxMR7_6Q/JepTT4HouuJ_S-J_wsyfuQ/view?utm_content=DAEvxMR7_6Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
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
