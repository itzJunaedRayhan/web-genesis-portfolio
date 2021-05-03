import React from 'react';
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import './Blogs.css'
import blog1 from '../../../images/Blogs/blog-1.jpg'
import blog2 from '../../../images/Blogs/blog-2.jpg'
import blog3 from '../../../images/Blogs/blog-3.png'
import blog4 from '../../../images/Blogs/blog-4.jpg'
import blog5 from '../../../images/Blogs/blog-5.jpg'
import blog6 from '../../../images/Blogs/blog-6.jpg'
import Blog from '../Blog/Blog';
const blogData = [
    {
        image : blog1,
        category : 'Node Js',
        date : '5 Jan 2021',
        title : 'How to Make a Node Js Javascript',
    },
    {
        image : blog2,
        category : 'Design',
        date : '10 Feb 2021',
        title : '6 Easy Steps to Better Icon Design',
    },
    {
        image : blog3,
        category : 'UI',
        date : '14 March 2021',
        title : 'Creative and Innovative Navigation Designs',
    },
    {
        image : blog4,
        category : 'Design',
        date : '26 April 2021',
        title : 'Why I Switched to Sketch For UI Desig',
    },
    {
        image : blog5,
        category : 'E-Commerce',
        date : '1 May 2021',
        title : 'An Overview of E-Commerce Platforms',
    },
    {
        image : blog6,
        category : 'Appointment',
        date : '3 May 2021',
        title : 'An Overview of Doctors Appointments',
    }
]
const Blogs = () => {
    return (
        <div className="blogs-section">
            <Menubar/>
            <div className="blogs-title">
                <h1>Blogs</h1>
                <h6>Some of my Blogs</h6>
            </div>
            <div className="row blogs-wrapper">
                {
                    blogData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
            <Footers />
        </div>
    );
};

export default Blogs;