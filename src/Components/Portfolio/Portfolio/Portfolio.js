import React from 'react';
import './Portfolio.css'
import blog from '../../../images/Portfolio/Blog.jpg'
import books from '../../../images/Portfolio/Books.png'
import bootstrap1 from '../../../images/Portfolio/bootstrap-1.jpg'
import bootstrap2 from '../../../images/Portfolio/Bootstrap-2.jpg'
import business from '../../../images/Portfolio/Business.jpg'
import electroworld from '../../../images/Portfolio/Electro-World.png'
import portfolio1 from '../../../images/Portfolio/portfolio-1.png'
import travel from '../../../images/Portfolio/travel agency.jpg'
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <Menubar/>
            <div className="portfolio-title">
                <h1>portfolio</h1>
                <h6>Some of my Projects</h6>
            </div>
            <div className="row portfolio-wrapper">
                <h2>Working On It....</h2>
            </div>
            <Footers />
        </div>
    );
};

export default Portfolio;