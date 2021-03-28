import React from 'react';
import "../assets/styles/components/Footer.scss";

const Footer = () => (
    <footer className="footer">
        <div className="footer__made">
            Made with
            {" "}
            <span role="img" aria-label="heart">💜</span>
            {" "}
            <a 
                href="https://www.linkedin.com/in/hector-adolfo-diaz-marcano-ab0a27aa/"
                rel="noopener noreferrer"
                target="_blank"
                className="logo"
            >
                <span className="logo-img">&lt;&gt;</span>
                {" "}
                <span>Héctor Díaz</span>
            </a>
        </div>
        <div className="footer__location">
            CL-RM,
            <span>Santiago ,</span>
            2021.
        </div>
    </footer>
);

export default Footer;
 
