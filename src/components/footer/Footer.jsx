import React from "react";
import "../footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <section class="top-bar">
                <a href="https://github.com/jerodriguez6" target="blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/james-rodriguez-fonseca-a4195192"
                    target="blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                {/* <a href="www.facebook.com"target="blank"><FontAwesomeIcon icon={faBehance} /></a> */}
            </section>
            <section class="bottom-bar">
                <p className="copy">
                    2021 | @James Rodriguez | All rights reserved
                </p>
            </section>
        </div>
    );
};

export default Footer;
