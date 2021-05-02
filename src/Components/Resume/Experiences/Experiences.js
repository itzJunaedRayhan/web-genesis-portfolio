import React from 'react';
import Experience from '../Experience/Experience';
import './Experiences.css'

const ExperiencesData = [
    {
        year : "Current",
        company : "Fiverr",
        title   : "Front End Web Developer",
        text    : "Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna."
    },
    {
        year : "Jun 2020",
        company : "Sarlex Technology",
        title   : "Web Designer",
        text    : "Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam."
    },
    {
        year    : "Sept 2019",
        company : "BM IT Limited",
        title   : "Industrial Training",
        text    : "Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet."
    }
]
const Experiences = () => {
    return (
        <div className="col-md-6">
            <div className="experiences-section">
            <h2 className="pb-5">Experience</h2>
                {
                    ExperiencesData.map(experience => <Experience experience={experience}></Experience>)
                }
            </div>
        </div>
    );
};

export default Experiences;