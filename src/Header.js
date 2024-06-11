import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, onLogout, whatWeDoRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToWhatWeDo = () => {
    if (whatWeDoRef && whatWeDoRef.current) {
      whatWeDoRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            MYMEDI <span className="logo-highlight">RECORDS</span>
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <Link  className="nav-link" onClick={scrollToWhatWeDo}>How It Works</Link>
          <Link to="/get-smart-record" className="nav-link" onClick={handleMenuToggle}>Get Smart Record</Link>
          <Link to="/second-opinion" className="nav-link" onClick={handleMenuToggle}>Second Opinion</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="nav-link" onClick={handleMenuToggle}>Dashboard</Link>
              <Link to="/" onClick={() => { onLogout(); handleMenuToggle(); }} className="nav-link">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link" onClick={handleMenuToggle}>Sign In</Link>
              <Link to="/register" className="nav-link" onClick={handleMenuToggle}>Sign Up</Link>
            </>
          )}
        </nav>
        <button className="menu-button" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
