import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const Amount = () => {
    const [amount, setAmount] = useState(30);
    const { newAmount } = useContext(GlobalContext);

    useEffect(() => {
        setAmount(amount.toFixed(2));
        newAmount(30);
        // eslint-disable-next-line
    }, []);

    const handleChange = (e) => {
        let value = e.target.value;
        e.target.className === 'slider' ? setAmount(Number(value).toFixed(2)) : setAmount(value);
        value === '' ? newAmount(0) : newAmount(value);
    }
    
    const handleBlur = (e) => {
        let value = Number(e.target.value);
        setAmount(value.toFixed(2));
    }
    
    return (
        <div className="Amount section">
            <h4 className="subheading">Amount</h4>
            <div className="textbox-container">
                <div className="textbox-icon-container left">
                    <div className="textbox-icon">
                        <h3>$</h3>
                    </div>
                </div>
                <input 
                    type="number" 
                    value={amount} 
                    //onChange ={(e) => setAmount(e.target.value)} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="0.00" 
                    className="textbox right"
                />
            </div>
            <input 
                type="range" 
                min="1" 
                max="150" 
                value={amount} 
                onChange={handleChange}
                className="slider" 
            /> 
        </div>
    );
}
 
export default Amount;