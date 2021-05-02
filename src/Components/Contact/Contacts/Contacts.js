import React from 'react';
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import './Contacts.css'
const Contacts = () => {
    return (
        <div className="contacts-section">
            <Menubar/>
            <div className="contacts-title">
                <h1>Contact Us</h1>
                <h6>Get In Touch</h6>
            </div>
            <div className="row contacts-wrapper">
                <h1 style={{color: 'red'}}>Contacts Section Coming Tomorrow</h1>
            </div>
            <Footers />
        </div>
    );
};

export default Contacts;