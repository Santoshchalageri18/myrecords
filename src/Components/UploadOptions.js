import React from 'react';

const UploadOptions = () => {
  return (
    <div className="upload-options">
      <style>
        {`
        .upload-options {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .sentences {
          text-align: center;
          margin-bottom: 20px;
          
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          font-family: 'Arial', sans-serif;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 100px;
        }

        .card2 {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          width: 300px;
          transition: transform 0.3s ease-in-out;
        }

        .card2:hover {
          transform: translateY(-10px);
        }

        .icon {
          width: 50px;
          height: 50px;
          margin-bottom: 20px;
        }

        .card2 h2 {
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        .card2 p {
          font-size: 1em;
          color: #666;
          margin-bottom: 20px;
        }

        .card2 button {
          background: none;
          border: 2px solid #6200ea;
          color: #6200ea;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 1em;
          font-weight: bold;
          transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        .card2 button:hover {
          background: #6200ea;
          color: #fff;
        }
        `}
      </style>
      <div className="sentences">
        <h4 style={{ fontFamily: 'Arial', fontSize: '1em', margin: '0', paddingBottom: '10px' ,color:'green'}}>YOUR SMART HEALTH LOCKER</h4>
        <p style={{ fontFamily: 'Arial', fontSize: '1.2em', margin: '0',color:'black' }}>Store, search and organise all medical records as per your convenience</p>
      </div>
      <div className="cards">
        <div className="card2">
          <img src="https://static-00.iconduck.com/assets.00/gmail-icon-1024x1024-09wrt8am.png" alt="Gmail Icon" className="icon" />
          <h2>Sync your gmail</h2>
          <p>& auto backup all your medical records</p>
          <button>SYNC GMAIL NOW!</button>
        </div>
        <div className="card2">
          <img src="https://img.freepik.com/premium-vector/whatsapp-icon-concept_23-2147900930.jpg" alt="WhatsApp Icon" className="icon" />
          <h2>Upload using Whatsapp</h2>
          <p>Send us your document on<br/>+91 9972088103</p>
          <button>SEND NOW</button>
        </div>
        <div className="card2">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/302/609/small/eps10-red-upload-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg" alt="Upload Icon" className="icon" />
          <h2>Upload a picture</h2>
          <p>Click or upload a photo and we will scan those records automatically</p>
          <button>UPLOAD NOW</button>
        </div>
      </div>
    </div>
  );
};

export default UploadOptions;
