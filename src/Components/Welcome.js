import React from 'react';
import '../Styles/Welcome.css';
import Board from './Board';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="announcement-bar">
        Announcements go here. <a href="">Include links if needed.</a>
      </div>
      <div className="welcome-content">
        <h1>Hi sunilkumar tc,<br />we're here to help</h1>
        <button className="get-care-button">Get Care</button>
      </div>
      <div className="footer-bar">
        <button className="footer-button">
          <i className="icon"></i>
          Put calls to action here
        </button>
        <button className="footer-button">
          <i className="icon"></i>
          Send Message
        </button>
      </div>
      <Board />
    </div>
  );
};

export default Welcome;
