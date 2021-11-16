import React from 'react'
import './about.css';

const About = () => {
    return (
        <div>
            <div className="about-section">	
                <div className="section-about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <img src={require('../../images/perfil.jpeg')} alt=""/>
                            </div>
                            <div className="col-lg-8 text-center mt-3">
                                <p className="mb-1">⚡️  Tecnologías  ⚡️
                                    <br></br>
                                    HTML5 | CSS3 | SASS | JavaScript | React | Node.js | Express.js | Bootstrap |
                                    <br></br><br></br>
                                    ⚙️  Herramientas ⚙️
                                    <br></br>
                                    VSCode | Git | GitHub | GitLab | Slack | Figma | Photoshop | Illustrator | Indesign | XD | Notion</p>
                                    <br></br>
                            </div>
                            <div className="col-12 text-center">
                                <p className="mb-0"><span>CV</span></p>
                            </div>
                        </div>
                    </div>
		        </div>		
	        </div>
        </div>
    )
}

export default About
