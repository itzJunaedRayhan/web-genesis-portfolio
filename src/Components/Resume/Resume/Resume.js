import React from 'react';
import Menubar from '../../Home/Menubar/Menubar';
import Educations from '../Educations/Educations';
import './Resume.css'
const Resume = () => {
    return (
        <section className="resume-section">
            <Menubar/>
            <div className="resume-title">
                <h1>RESUME</h1>
                <h6>2 Years of Experience</h6>
            </div>
                <div className="row education-experience">
                    <Educations/>
                </div>
        </section>
    );
};

export default Resume;