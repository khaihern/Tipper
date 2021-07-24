import React from 'react';

const Amount = () => {
    return (
        <div className="Amount section">
            <h4 className="subheading">Amount</h4>
            <input type="range" min="1" max="150" value="30" className="slider" />
            <div className="textbox-container">
                <div className="textbox-icon-container left">
                    <div className="textbox-icon">
                        <h3>$</h3>
                    </div>
                </div>
                <input className="textbox right" type="number" placeholder="0.00" />
            </div>
        </div>
    );
}
 
export default Amount;