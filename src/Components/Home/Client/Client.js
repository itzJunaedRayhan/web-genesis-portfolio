import React from 'react';
import './Client.css'
import { Link } from 'react-router-dom';

const Client = ({client}) => {
    return (
        <div className="client">
            <Link to="/">
            <img src={client.Image} alt="" className="img-responsive"/>
            </Link>
        </div>
    );
};

export default Client;