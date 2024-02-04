// Congratulations.js
import React from 'react';

const Congratulations = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', color: 'white' }}>
      <h2>Congratulations!</h2>
      <p>You have successfully completed your payment.</p>
      <p>Thank you for choosing our service.</p>

      {/* Add the img tag with the GIF URL */}
      
       <img
        src="../images/imy.gif"
        alt="Congratulations GIF"
        style={{ width: '300px', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
};

export default Congratulations;
