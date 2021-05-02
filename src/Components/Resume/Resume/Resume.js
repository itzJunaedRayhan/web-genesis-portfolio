import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';
import Certificates from '../Certificates/Certificates';
import Educations from '../Educations/Educations';
import Experiences from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
import Footers from '../../Home/Footers/Footers'
import './Resume.css'
const Resume = () => {
    return (
        <div className="resume-section">
            <Menubar/>
            <div className="resume-title">
                <h1>RESUME</h1>
                <h6>2 Years of Experience</h6>
            </div>
                <div className="row education-experience">
                    <Educations/>
                    <Experiences/>
                </div>
            <Certificates/>
            <Skills/>
            <Footers />
        </div>
    );
};

export default Resume;