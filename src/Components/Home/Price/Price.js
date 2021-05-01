import React from 'react';
import './Price.css'
const Price = ({prices}) => {
    return (
        <div className="col-md-4">
            <div className="price-card">
                <h6>{prices.package}</h6>
                <h1>${prices.price}</h1>
                <p><small>{prices.duration}</small></p>
                <button className="submit-btn" type="submit">{prices.buttonText}</button>
                <p>{prices.info}</p>
            </div>
        </div>
    );
};

export default Price;