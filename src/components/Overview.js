import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const Overview = () => {
    const { amount, tip, partySize } = useContext(GlobalContext);
    let tipAmt = tip / 100 * amount;
    let totalAmt = amount + tipAmt;
    let eachAmt = Math.ceil((totalAmt / partySize) * 100) / 100;

    return (
        <div className="Overview section">
            <div className="overview-container">
            <div>
              <h4 className="subheading">Total</h4>
              <h2>${totalAmt.toFixed(2)}</h2>
              <h2 className="tip-amount">TIP: ${tipAmt.toFixed(2)}</h2>
            </div>
            <div>
              <h4 className="subheading">Per Person</h4>
              <h2>${eachAmt.toFixed(2)}</h2>
            </div>
          </div>
        </div>
    );
}
 
export default Overview;