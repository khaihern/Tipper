import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const PartySize = () => {
    const [partySize, setPartySize] = useState(1);
    const { newPartySize } = useContext(GlobalContext);

    const handleChange = (e) => {
        if (!(Number(e.target.value) < 1)) {
            setPartySize(e.target.value);
            newPartySize(e.target.value);
        } else {
            setPartySize(e.target.value);
        }
    }

    const handleBlur = (e) => {
        if (partySize < 1) {
            setPartySize(1);
            newPartySize(1);
        }
    }

    return (
        <div className="PartySize section">
            <h4 className="subheading">Number of People</h4>
            <div className="textbox-container">
                <input 
                    type="number" 
                    value={partySize} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="1" 
                    className="textbox left"
                />
                <div 
                    onClick={() => {
                        if (!((partySize - 1) < 1)) {
                            setPartySize(partySize - 1);
                            newPartySize(partySize - 1);
                        }
                    }} 
                    className="textbox-icon-container center no-select"
                >
                    <div className="textbox-icon pointer">
                        <h3>-</h3>
                    </div>
                </div>
                <div 
                    onClick={() => {
                        setPartySize(partySize + 1);
                        newPartySize(partySize + 1);
                    }} 
                    className="textbox-icon-container right no-select"
                >
                    <div className="textbox-icon pointer">
                        <h3>+</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PartySize;