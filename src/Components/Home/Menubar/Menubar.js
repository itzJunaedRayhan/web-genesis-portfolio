import React from 'react';
import './Menubar.css'
import menuIcon from '../../../images/menu-bar.png'
import { Link } from 'react-router-dom';
const Menubar = () => {
    const closeNav = () => {
        document.getElementById('menu').style.visibility = 'hidden';
    }
    const openNav = () => {
        document.getElementById('menu').style.visibility = 'visible'
    }
    return (
        <>
        <div className="navbar-wrapper">
            <div className="brand">
                <div className="brand-link"><Link to="/home"><span className="logo">W</span> Web <span style={{fontWeight: 'normal'}}>Genesis</span></Link></div>
                <div className="row container-fluid hamburger-section">
                    <div className="hamburger-icon ml-auto">
                        <a href="javascript:void(0)" onClick={openNav} class="openBtn">
                            <img src={menuIcon}  alt="" style={{color: 'white'}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="menu-items ml-auto">
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login" className="login">Login</Link></li>
                </ul>  
            </div>
        </div>
        <div className="mobile-menu" id="menu" style={{visibility: 'hidden'}}>
            <a href="javascript:void(0)" onClick={closeNav} class="closeBtn"><span>&times;</span></a>
            <ul>
                <li onClick={closeNav}><Link to="/about">About Me</Link></li>
                <li onClick={closeNav}><Link to="/resume">Resume</Link></li>
                <li onClick={closeNav}><Link to="/portfolio">Portfolio</Link></li>
                <li onClick={closeNav}><Link to="/blog">Blog</Link></li>
                <li onClick={closeNav}><Link to="/contact">Contact</Link></li>
                <li onClick={closeNav}><Link to="/login" className="login">Login</Link></li>
            </ul>   
        </div>
        </>
    );
};

export default Menubar;