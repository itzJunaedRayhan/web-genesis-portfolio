import React from 'react';
import Footers from '../../Home/Footers/Footers';
import Menubar from '../../Home/Menubar/Menubar';
import './Login.css'
const Login = () => {
    return (
        <div className="login-section">
            <Menubar/>
            <div className="login-title">
                <h1>Sign In Here</h1>
                <h6>Please Sign In to get Services</h6>
            </div>
            <div className="row login-wrapper">
                <h1 style={{color: 'red'}}>Login Section Coming Tomorrow</h1>
            </div>
            <Footers />
        </div>
    );
};

export default Login;