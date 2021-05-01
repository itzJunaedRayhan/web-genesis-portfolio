import React from 'react';
import './Footers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Footers = () => {
    return (
        <section className="footer-section">
            <div className="social-icons">
                <ul>
                    <li><a href="https://twitter.com/itzJunaedRayhan" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.facebook.com/JKwebGenesis" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/itzjunaedrayhan/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/itzJunaedRayhan/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
            <div className="copyright-text pr-5">
                <p className="text-center"> &copy; 2021 All rights reserved<Link to="/home"><span className="logo ml-2">W</span> Web <span style={{fontWeight: 'normal'}}>Genesis</span></Link>.</p>
            </div>
        </section>
    );
};

export default Footers;