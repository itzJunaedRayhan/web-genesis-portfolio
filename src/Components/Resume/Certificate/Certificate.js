import React from 'react';
import './Certificate.css'
const Certificate = ({certificate}) => {
    return (
        <div className="col-md-6 col-xs-12">
            <div className="certificate">
            <div className="certificate-image">
                <img src={certificate.image} alt=""/>
            </div>
            <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <h5>{certificate.company}</h5>
                <div className="certificate-footer">
                    <p>{certificate.mark}</p>
                    <p><small>{certificate.date}</small></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Certificate;