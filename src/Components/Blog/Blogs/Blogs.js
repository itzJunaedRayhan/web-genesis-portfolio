import React from 'react';
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="blogs-section">
            <Menubar/>
            <div className="blogs-title">
                <h1>Blogs</h1>
                <h6>Some of my Blogs</h6>
            </div>
            <div className="row blogs-wrapper">
                <h1 style={{color: 'red'}}>Blog Section Coming Tomorrow</h1>
            </div>
            <Footers />
        </div>
    );
};

export default Blogs;