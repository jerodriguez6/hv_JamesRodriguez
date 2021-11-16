import React from 'react'
import './about.css';
import me from '../../images/me.jpg'

const About = () => {
    return (
        <div id="about">
            <div className="about-section">	
                <div className="section-about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <img src={me} alt="me"/>
                            </div>
                            <div className="col-lg-8 text-center mt-3">
                                <br></br>
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
                                <a href="https://www.canva.com/design/DAEqmFayL_k/jvBbkA5Vs-T4u8k5OL_7rg/view?utm_content=DAEqmFayL_k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="blank">VER CV</a>
                            </div>
                        </div>
                    </div>
		        </div>		
	        </div>
        </div>
    )
}

export default About
