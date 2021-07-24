import React from 'react';

const NumberOfPeople = () => {
    return (
        <div className="NumberOfPeople section">
            <h4 className="subheading">Number of People</h4>
            <div className="textbox-container">
                <input className="textbox left" type="number" placeholder="1" />
                <div className="textbox-icon-container center">
                    <div className="textbox-icon pointer">
                        <h3>-</h3>
                    </div>
                </div>
                <div className="textbox-icon-container right">
                    <div className="textbox-icon pointer">
                        <h3>+</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NumberOfPeople;