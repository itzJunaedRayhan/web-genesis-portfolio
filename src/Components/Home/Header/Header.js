import React from 'react';
import './Header.css'
import profile from '../../../images/JunaedIslam.png'
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <header className="header-section">
            <Menubar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-image">
                            <img src={profile} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-content">
                            <h4>Front End Developer</h4>
                            <h1>Junaed Islam</h1>
                            <p>Dedicated web developer with 1+ year of job experience, skilled in JavaScript, React, React-native. Developed 8+ websites, including E-Commerce, Travel Agency, Doctors Appointment websites. Fixed Bugs and design issues using Chrome Dev Tools. Passionate about software architecture and learning new technologies</p>
                            <div className="button-wrapper">
                                <a href="" className="submit-btn">Download CV</a>
                                <a href="" className="submit-btn contact-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;