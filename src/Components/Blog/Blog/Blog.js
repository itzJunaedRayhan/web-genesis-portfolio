import React from 'react';
import './Blog.css'
const Blog = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className="blog">
                <div className="blog-image">
                    <img src={blog.image} alt=""/>
                </div>
                <div className="blog-footer">
                    <div className="text">
                        <p><small>{blog.date}</small></p>
                        <h4>{blog.title}</h4>
                    </div>
                    <a href="https://medium.com/me/design" className="submit-btn">Read More</a>
                </div>
                <div className="category">
                    <h6>{blog.category}</h6>
                </div>
            </div>
        </div>
    );
};

export default Blog;