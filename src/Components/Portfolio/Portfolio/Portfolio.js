import React from 'react';
import './Portfolio.css'
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import Projects from '../Projects/Projects';
const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <Menubar/>
            <div className="portfolio-title">
                <h1>portfolio</h1>
                <h6>Some of my Projects</h6>
            </div>
            <div className="portfolio-gallery">
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio-buttons button-group">
                            <button type="button" class="active" id="btn1" data-filter="*">All</button>
                            <button type="button" data-filter=".popular">Popular</button>
                            <button type="button" data-filter=".latest">Latest</button>
                            <button type="button" data-filter=".following">Following</button>
                            <button type="button" data-filter=".upcoming">Upcoming</button>
                        </div>
                    </div>
                </div>
                <div className="row grid portfolio-wrapper">
                    <Projects/>
                </div>
            </div>
            <Footers />
        </div>
    );
};

export default Portfolio;