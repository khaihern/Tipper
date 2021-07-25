import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const Tip = () => {
    // eslint-disable-next-line
    const [tip, setTip] = useState(null);
    const { newTip } = useContext(GlobalContext);

    const handleChange = (e) => {
        setTip(e.target.value);
        newTip(e.target.value);
    }

    return (
        <div className="Tip section">
            <h4 className="subheading">Tip</h4>
            <div className="tip-options-container no-select">
                <input 
                    type="radio" 
                    id="12%-tip" 
                    name="tip" 
                    value="12" 
                    onChange={handleChange}
                />
                <label htmlFor="12%-tip" className="tip-option-label"><h4>12%</h4></label>

                <input 
                    type="radio" 
                    id="15%-tip" 
                    name="tip" 
                    value="15" 
                    onChange={handleChange}
                />
                <label htmlFor="15%-tip" className="tip-option-label"><h4>15%</h4></label>

                <input 
                    type="radio" 
                    id="17%-tip" 
                    name="tip" 
                    value="17" 
                    onChange={handleChange}
                />
                <label htmlFor="17%-tip" className="tip-option-label"><h4>17%</h4></label>

                <input 
                    type="radio" 
                    id="20%-tip" 
                    name="tip" 
                    value="20" 
                    onChange={handleChange}
                />
                <label htmlFor="20%-tip" className="tip-option-label"><h4>20%</h4></label>
                
                <input 
                    type="radio" 
                    id="25%-tip" 
                    name="tip" 
                    value="25" 
                    onChange={handleChange}
                />
                <label htmlFor="25%-tip" className="tip-option-label"><h4>25%</h4></label>
            </div>
        </div>
    );
}
 
export default Tip;