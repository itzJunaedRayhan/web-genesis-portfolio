import React from 'react';
import './Fact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Fact = ({fact}) => {
    return (
        <div className="col-md-3">
            <div className="fact">
                <div className="fact-icon">
                    <FontAwesomeIcon icon={fact.icon} />
                    <div className="fact-content">
                        <h4>{fact.title}</h4>
                        <h1>{fact.number}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fact;