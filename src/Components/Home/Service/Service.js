import React from 'react';
import './Service.css'
const Service = ({service}) => {
    return (
        <div className="col-md-6 service">
            <div className="service-wrapper">
                <div className="service-icon">
                    <img src={service.icon} alt="" />
                </div>
                <div className="service-content">
                    <h4>{service.name}</h4>
                    <p>{service.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;