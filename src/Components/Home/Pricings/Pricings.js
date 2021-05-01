import React from 'react';
import Price from '../Price/Price';
import './Pricings.css'

const PricingData = [
    {
        package : 'Silver',
        price   : 64,
        duration: 'per month',
        buttonText : 'Free Trial',
        info    : 'Lorem ipsum dolor Pellentesque scelerisque Morbi eu sagittis'
    },
    {
        package : 'Gold',
        price   : 128,
        duration: 'per month',
        buttonText : 'Free Trial',
        info    : 'Lorem ipsum dolor Pellentesque scelerisque Morbi eu sagittis Donec non diam'
    },
    {
        package : 'Platinum',
        price   : 256,
        duration: 'per month',
        buttonText : 'Free Trial',
        info    : 'Lorem ipsum dolor Pellentesque scelerisque Morbi eu sagittis Donec non diam Aenean nec libero'
    }
]
const Pricings = () => {
    return (
        <section className="pricing-section">
            <h2>Pricing</h2>
            <div className="row pricing-wrapper">
                {
                    PricingData.map(prices => <Price prices={prices}></Price>)
                }
            </div>
        </section>
    );
};

export default Pricings;