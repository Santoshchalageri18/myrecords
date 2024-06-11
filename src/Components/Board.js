import React from 'react';
import '../Styles/Board.css';

const Board = () => {
  return (
    <div className="dashboard-container">
      <div className="section-card">
        <div className="section-header">
          <input type="checkbox" /> Better rest, better health
        </div>
        <div className="section-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>
          <button className="invite-button">Invite Friends</button>
        </div>
      </div>

      <div className="section-card">
        <div className="image-content">
          <img
            src="https://wallpapercave.com/wp/wp1813060.png"
            alt="Now Available"
            className="image"
          />
        </div>
        <div className="text-content">
          <span className="badge">NOW AVAILABLE</span>
          <h2>Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>
        </div>
      </div>

      <div className="action-cards">
        <div className="action-card">
          <div className="icon health-record-icon"></div>
          <p>Health Record</p>
        </div>
        <div className="action-card">
          <div className="icon prescription-renewal-icon"></div>
          <p>Request Prescription Renewal</p>
        </div>
        <div className="action-card">
          <div className="icon pharmacy-icon"></div>
          <p>Preferred Pharmacy</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
