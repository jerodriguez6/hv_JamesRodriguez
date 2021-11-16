import React from 'react'
import '../footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBehance, faGithub, faGitlab, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
                <section class="top-bar">
                    <a href="www.facebook.com" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="www.facebook.com" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="www.facebook.com"target="blank"><FontAwesomeIcon icon={faGitlab} /></a>
                    <a href="www.facebook.com"target="blank"><FontAwesomeIcon icon={faBehance} /></a>
                </section>
                <section class="bottom-bar">
                    <p className="copy">Daniela Ospina Sarmiento | All rights reserved</p>
                </section>
        </div>
    )
}

export default Footer
