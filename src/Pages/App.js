import React, { useState, useEffect, useRef } from 'react';
import '../Styles/App.css';
import WhatWeDo from '../Components/WhatWeDoSection';
import HealthAccount from '../Components/HealthAccount';
import UploadOptions from '../Components/UploadOptions';
import About from '../Components/About';
import WhyMediRecord from '../Components/WhyMediRecord';
import Footer from '../Components/Footer';
import Reviews from '../Components/Reviews';
import LandingPage from '../Components/LandingPage';
import Header from '../Header';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Get Expert Second Opinions",
      text: "Consult with top doctors worldwide to ensure you receive the best care and advice. Your health is our priority.",
    },
    {
      title: "Manage Your Health Records Effortlessly",
      text: "Our platform provides a seamless experience for managing all your personal health records. Stay organized and in control.",
    },
  ];

  const whatWeDoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header whatWeDoRef={whatWeDoRef} />
      <div className="hero-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <h1 className="font-montserrat">{slide.title}</h1>
            <p className="font-poppins">{slide.text}</p>
          </div>
        ))}
        <button className="slide-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slide-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div ref={whatWeDoRef}>
        <WhatWeDo />
      </div>
      <HealthAccount />
      <UploadOptions />
      <About />
      <LandingPage />
      <WhyMediRecord />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
