import React from 'react';
import { useParams } from 'react-router';
import './ProjectDetails.css'
import Menu from '../ProjectFakeData/ProjectFakeData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const ProjectDetails = () => {
    const {id} = useParams();
    console.log (id)
    const data = Menu.find(project => project.id == id);
    console.log(data)
    const closeBtn = () =>{
        document.getElementsByClassName('project-details')[0].style.display = "none";
    }
    return (
        <div className="project-details">
            <div className="container project-header">
                <h3>{data.name}</h3>
                <Link to="/portfolio">
                    <h2><FontAwesomeIcon icon={faTimes} /></h2>
                </Link>
            </div>
            <div className="row" style={{margin: '0px'}}>
                <div className="project-details-image col-md-6">
                    <img src={data.image} alt="" />
                </div>
                <div className="project-content text-white col-md-5">
                    <p><span>Description: {data.details}</span></p>
                    <p><span>Technologies: {data.technology}</span></p>
                    <h6>{data.category}</h6>
                    <div className="button-group">
                        <a className="submit-btn" href={data.github}>GitHub</a>
                        <a className="submit-btn" href={data.live}>Live</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;