import React from 'react';
import './Testimonial.css'
const Testimonial = ({testimonial}) => {
    return (
        <div className="item">
            <div className="testimonial">
                <div className="testimonial-image">
                    <img src={testimonial.image} alt=""/>
                </div>
                <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.profession}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;