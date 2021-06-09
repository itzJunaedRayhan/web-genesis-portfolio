import React from 'react';
import './Portfolio.css'
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <Menubar/>
            <div className="portfolio-title">
                <h1>portfolio</h1>
                <h6>Some of my Projects</h6>
            </div>
            <div className="portfolio-gallery">
                    <ProjectGallery/>
            </div>
            <Footers />
        </div>
    );
};

export default Portfolio;