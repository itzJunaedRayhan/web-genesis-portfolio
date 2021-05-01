import React from 'react';
import './Services.css'
import writing from '../../../images/writing.png'
import bank from '../../../images/bank.png'
import laptop from '../../../images/laptop.png'
import marketing from '../../../images/marketing.png'
import Service from '../Service/Service';

const servicesData = [
    {
        icon : writing,
        name : 'Copywrite',
        text : 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'
    },
    {
        icon : bank,
        name : 'E-Commerce Site',
        text : 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'
    },
    {
        icon : laptop,
        name : 'Web Development',
        text : 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'
    },
    {
        icon : marketing,
        name : 'Digital Marketing',
        text : 'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'
    },
]
const Services = () => {
    return (
        <section className="services-section">
                <h2>What I Do</h2>
                <div className="row">
                        {
                            servicesData.map(service => <Service service={service}></Service>)
                        }
                </div>
        </section>
    );
};

export default Services;