import React from 'react';

import '../Styles/HealthAccount.css';const HealthAccount = () => {
  return (
    <div className="health-account">
      <h2 className="peek">A PEEK INTO THE FUTURE OF HEALTH</h2>
      <h1>What do you get with a health account?</h1>
      <div className="cards">
        <div className="card blue">
          <h2>Upload your medical records through </h2>
          <p>WhatsApp,Email or File</p>
          {/* <p>9900900909</p> */}
          <button>UPLOAD A REPORT<span>→</span></button>
          
        </div>
        <div className="card green">
          <h2>A system analysis the  health records</h2>
          <p>to get  your smart medical reports</p>
          <button>GET A SMART REPORT <span>→</span></button>
          
        </div>
        <div className="card yellow">
          <h2>Automated health profile</h2>
          <p>so you make better health decisions</p>
          <button>DOWNLOAD THE APP <span>→</span></button>
         
        </div>
      </div>
    </div>
  );
};export default HealthAccount;