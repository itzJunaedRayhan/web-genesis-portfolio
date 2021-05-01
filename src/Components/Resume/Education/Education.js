import React from 'react';
import './Education.css'
const Education = ({education}) => {
    return (
        <div className="education-wrapper">
            <div className="year-and-institute">
                <h5>{education.year}</h5>
                <h6>{education.institute}</h6>
            </div>
            <div className="education-body">
                <h3>{education.subject}</h3>
                <p>{education.text}</p>
            </div>
        </div>
    );
};

export default Education;