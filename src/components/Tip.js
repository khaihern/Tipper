import React from 'react';

const Tip = () => {
    return (
        <div className="Tip section">
            <h4 className="subheading">Tip</h4>
            <div className="tip-options-container">
                <input type="radio" id="12%-tip" name="tip" value="12%" />
                <label htmlFor="12%-tip" className="tip-option-label"><h4>12%</h4></label>

                <input type="radio" id="15%-tip" name="tip" value="15%" />
                <label htmlFor="15%-tip" className="tip-option-label"><h4>15%</h4></label>

                <input type="radio" id="17%-tip" name="tip" value="17%" />
                <label htmlFor="17%-tip" className="tip-option-label"><h4>17%</h4></label>

                <input type="radio" id="20%-tip" name="tip" value="20%" />
                <label htmlFor="20%-tip" className="tip-option-label"><h4>20%</h4></label>
                
                <input type="radio" id="25%-tip" name="tip" value="25%" />
                <label htmlFor="25%-tip" className="tip-option-label"><h4>25%</h4></label>
            </div>
        </div>
    );
}
 
export default Tip;