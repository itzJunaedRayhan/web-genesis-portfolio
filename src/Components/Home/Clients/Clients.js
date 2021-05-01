import React from 'react';
import './Clients.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import client1 from '../../../images/Clients/client-1.png'
import client2 from '../../../images/Clients/client-2.png'
import client3 from '../../../images/Clients/client-3.png'
import client4 from '../../../images/Clients/client-4.png'
import client5 from '../../../images/Clients/client-2.png'
import client6 from '../../../images/Clients/client-6.png'
import client7 from '../../../images/Clients/client-7.png'
import client8 from '../../../images/Clients/client-1.png'
import client9 from '../../../images/Clients/client-2.png'
import client10 from '../../../images/Clients/client-3.png'
import client11 from '../../../images/Clients/client-4.png'
import client12 from '../../../images/Clients/client-1.png'
import Client from '../Client/Client';
const ClientsData = [
    {
        Image : client1
    },
    {
        Image : client2
    },
    {
        Image : client3
    },
    {
        Image : client4
    },
    {
        Image : client5
    },
    {
        Image : client6
    },
    {
        Image : client7
    },
    {
        Image : client8
    },
    {
        Image : client9
    },
    {
        Image : client10
    },
    {
        Image : client11
    },
    {
        Image : client12
    }
]
const Clients = () => {
    const state= {
        responsive:{
            0: {
                items: 2,
            },
            450: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
            },
        },
    }
    return (
        <section className="client-section">
            <h2>Clients</h2>
            <OwlCarousel items="5" className="owl-theme" loop={true} margin={20} nav responsive={state.responsive}>
                {
                    ClientsData.map(client => <Client client={client}></Client>)
                }
            </OwlCarousel>
        </section>
    );
};

export default Clients;