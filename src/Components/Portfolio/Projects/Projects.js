import React from 'react';
import './Projects.css'

import BlogCover from '../../../images/Projects/Bloger-cover.png'
import BookCover from '../../../images/Projects/Book-cover.png'
import htmcssCover from '../../../images/Projects/HTML-CSS-Cover.png'
import travelCover from '../../../images/Projects/Lets-Travel-cover.png'
import ElectroCover from '../../../images/Projects/Electro-Cover.png'
import portfolioCover from '../../../images/Projects/Portfolio-cover.png'
const Projects = () => {
    return (
        <>
            <div className="col-md-4 element-item latest">
                <div className="project">
                    <div className="project-image">
                        <a href="https://web-genesis-blog-webapp-1.netlify.app/"  target="_blank"  rel="noreferrer" >
                            <img src={BlogCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">Blog website</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/Blog-Website/"  target="_blank"  rel="noreferrer"  className="project-btn">GitHub</a>
                            <a href="https://web-genesis-blog-webapp-1.netlify.app/"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 element-item popular">
                <div className="project">
                    <div className="project-image">
                        <a href="https://itzjunaedrayhan.github.io/book-website-1/index.html"  target="_blank"  rel="noreferrer" >
                            <img src={BookCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">Books website</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/book-website-1"  target="_blank"  rel="noreferrer"  className="project-btn">GitHub</a>
                            <a href="https://itzjunaedrayhan.github.io/book-website-1/index.html"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 element-item latest">
                <div className="project">
                    <div className="project-image">
                        <a href="https://web-genesis-html-css-website1.netlify.app/"  target="_blank"  rel="noreferrer" >
                            <img src={htmcssCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">HTML-CSS website</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/html-css-website/"  target="_blank"  rel="noreferrer"  className="project-btn">GitHub</a>
                            <a href="https://web-genesis-html-css-website1.netlify.app/"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 element-item">
                <div className="project">
                    <div className="project-image">
                        <a href="https://web-genesis-travel-agency.web.app/"  target="_blank"  rel="noreferrer" >
                            <img src={travelCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">Travel Agency</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/Lets-Travel-Client" className="project-btn"  target="_blank"  rel="noreferrer" >GitHub</a>
                            <a href="https://web-genesis-travel-agency.web.app/"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 element-item latest">
                <div className="project">
                    <div className="project-image">
                        <a href="https://web-genesis-electro-world.web.app/" target="blank">
                            <img src={ElectroCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">E-Commerce</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/Electro-World-Client"  target="_blank"  rel="noreferrer"  className="project-btn">GitHub</a>
                            <a href="https://web-genesis-electro-world.web.app/"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 element-item latest">
                <div className="project">
                    <div className="project-image">
                        <a href="https://webgenesis-single-page-portfolio.netlify.app/"  target="_blank"  rel="noreferrer" >
                            <img src={portfolioCover} alt="" />
                        </a>

                    </div>
                    <div className="project-content">
                        <h5 className="text-center">Portfolio</h5>
                        <div className="project-button-group">
                            <a href="https://github.com/itzJunaedRayhan/CUDA-Single-Page-Portfolio"  target="_blank"  rel="noreferrer"  className="project-btn">GitHub</a>
                            <a href="https://webgenesis-single-page-portfolio.netlify.app/"  target="_blank"  rel="noreferrer"  className="project-btn">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;