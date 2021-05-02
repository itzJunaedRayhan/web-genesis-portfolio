import React from 'react';
import './Experience.css'

const Experience = ({experience}) => {
    return (
        <div className="experience-wrapper">
            <div className="year-and-company">
                <h5>{experience.year}</h5>
                <h6>{experience.company}</h6>
            </div>
            <div className="experience-body">
                <h3>{experience.title}</h3>
                <p>{experience.text}</p>
            </div>
        </div>
    );
};

export default Experience;