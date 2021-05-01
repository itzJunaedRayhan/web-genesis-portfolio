import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Clients from '../Clients/Clients';
import Facts from '../Facts/Facts';
const Home = () => {
    return (
        <section className="home-section">
            <Header/>
            <Services/>
            <Testimonials/>
            <Clients/>
            <Facts/>
        </section>
    );
};

export default Home;