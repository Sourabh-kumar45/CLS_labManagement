import React from 'react'
import AlertBox from './AlertBox'


// Use the AlertBox component within Test
const Test = () => {
    return (
      <div className="p-8">
        <AlertBox type="success" message="Task done!" />
        <AlertBox type="error" message="Error in login!" />
        <AlertBox type="info" message="Login successful!" />
        <AlertBox type="warning" message="Login successful!" />
      </div>
    );
  };

export default Test
