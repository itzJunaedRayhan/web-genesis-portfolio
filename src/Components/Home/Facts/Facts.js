import React from 'react';
import './Facts.css'
import { faHeart, faStopwatch, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Clients from '../Clients/Clients';
import Fact from '../Fact/Fact';
const FactsData = [
    {
        icon : faHeart,
        title : 'Happy Clients',
        number : 578
    },
    {
        icon : faStopwatch,
        title : 'Working Hours',
        number : 4780
    },
    {
        icon : faStar,
        title : 'Awards Won',
        number : 15
    },
    {
        icon : faCoffee,
        title : 'Coffe Consumed',
        number : 1286
    }
]
const Facts = () => {
    return (
        <section className="fact-section">
            <h2>Fun Facts</h2>
            <div className="row fact-wrapper">
                {
                    FactsData.map(fact => <Fact fact={fact}></Fact>)
                }
            </div>
        </section>
    );
};

export default Facts;