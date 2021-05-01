import React from 'react';
import './Educations.css'
import Education from '../Education/Education';

const EducationData = [
    {
        year : 2021,
        institute : 'Programming Hero',
        subject : 'Full Stack Web Development',
        text    : 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
    },
    {
        year : 2019,
        institute : 'BM IT Limited',
        subject : 'Web Design',
        text : 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
    },
    {
        year : 2019,
        institute : 'Habiganj Polytechnic Institute',
        subject : 'Diploma in Computer Engineering',
        text : 'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
    }
]
const Educations = () => {
    return (
        <div className="col-md-6">
            <div className="education-section">
            <h2 className="pb-5">Education</h2>
                {
                    EducationData.map(education => <Education education={education}></Education>)
                }
            </div>
        </div>
    );
};

export default Educations;