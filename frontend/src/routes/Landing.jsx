import React from 'react';
import { Link } from 'react-router-dom';

function ButtonPanel() {
  const handleButtonClick = (path) => {
    // Redirect to the desired page
    window.location.href = path;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div>
        <button
          type="submit"
          className="col-span-1 text-lg bg-green-600 text-white rounded-md p-10" onClick={() => handleButtonClick('/Home')}>
          AIR QUALITY PREDICTION
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="submit"
          className="col-span-1 text-lg bg-orange-600 text-white rounded-md p-10" onClick={() => handleButtonClick('/Home1')}>
          HEATWAVE PREDICTION
        </button>
      </div>
    </div>
  );
}

export default ButtonPanel;
