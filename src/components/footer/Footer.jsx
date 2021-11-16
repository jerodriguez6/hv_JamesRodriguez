import React from 'react'
import '../footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBehance, faGithub, faGitlab, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
                <section class="top-bar">
                    <a href="https://github.com/DaniOspina" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/daniela-ospina-sarmiento-87a1b7170/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/DaniOspina"target="blank"><FontAwesomeIcon icon={faGitlab} /></a>
                    {/* <a href="www.facebook.com"target="blank"><FontAwesomeIcon icon={faBehance} /></a> */}
                </section>
                <section class="bottom-bar">
                    <p className="copy">Daniela Ospina Sarmiento | All rights reserved</p>
                </section>
        </div>
    )
}

export default Footer
