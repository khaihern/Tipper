import React from 'react';

const Overview = () => {
    return (
        <div className="Overview section">
            <div className="overview-container">
            <div>
              <h4 className="subheading">Total</h4>
              <h2>$93.54</h2>
              <h2 className="tip-amount">TIP: $20.95</h2>
            </div>
            <div>
              <h4 className="subheading">Per Person</h4>
              <h2>$18.71</h2>
            </div>
          </div>
        </div>
    );
}
 
export default Overview;