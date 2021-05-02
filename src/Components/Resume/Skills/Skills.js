import React from 'react';
import './Skills.css'
import SkillBar from 'react-skills-bars';

const backEnd = [
    {type: "JavaScript", level: 100},
    {type: "Node Js", level: 65},
    {type: "MongoDB", level: 75},
    {type: "Express Js", level: 65},
    {type: "Redux", level: 65},
    {type: "Material UI", level: 80},
];
const frontEnd = [
    {type: "HTML", level: 100},
    {type: "CSS3", level: 85},
    {type: "Bootstrap", level: 80},
    {type: "SCSS", level: 60},
    {type: "React Js", level: 85},
    {type: "Jquery", level: 75},
];
const Skills = () => {
    return (
        <section className="skills-section">
        <h2 className="p-5">Skills</h2>
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sx-12">
                    <h4 className="mb-4">Back End Skills</h4>
                    <SkillBar skills={backEnd}/>
                </div>
                <div className="col-md-6 col-xs-12">
                    <h4 className="mb-4">Front End Skills</h4>
                    <SkillBar skills={frontEnd}/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Skills;