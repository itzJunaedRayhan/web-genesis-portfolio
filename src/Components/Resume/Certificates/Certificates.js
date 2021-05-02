import React from 'react';
import webDesign from '../../../images/Certificates/BM IT logo.PNG'
import mern from '../../../images/Certificates/programming hero.jpg';
import Certificate from '../Certificate/Certificate';
const CertificatesData = [
    {
        image : mern,
        title : "Full Stack Web Development",
        company : "Programming Hero, Dhaka",
        date    : "April 2021",
        mark    : "58 Out of 60"
    },
    {
        image   : webDesign,
        title   : "Industrial Training (Web Design)",
        company : "BM IT Limited, Habiganj",
        date    : "Sept 2019",
        mark    : "Completed"
    }
]
const Certificates = () => {
    return (
        <section className="certificate-section">
        <h2 className="p-5">Certificates</h2>
            <div className="container">
            <div className="row">
                {
                    CertificatesData.map(certificate => <Certificate certificate={certificate}></Certificate>)
                }
            </div>
            </div>
        </section>
    );
};

export default Certificates;