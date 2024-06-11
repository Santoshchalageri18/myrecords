import React, { useState } from 'react';
import '../Styles/WhatWeDo.css';

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      "name": "Upload Medical Reports",
      "description": "Users have the option to securely upload their medical reports onto our platform. From MRI scans to blood test results, our system seamlessly handles various file formats with ease."
    },
    {
      "name": "Comprehensive Review and Analysis",
      "description": "Our advanced system meticulously reviews and analyzes every detail within uploaded medical reports. From interpreting lab values to identifying key findings, our algorithm ensures a thorough understanding of the user's medical data."
    },
    {
      "name": "Smart Report Generation",
      "description": "Following analysis, our system generates a comprehensive and intelligible report tailored to the specific medical condition or concern highlighted in the user's document. This report provides insights, recommendations, and potential next steps based on the analyzed data."
    },
    {
      "name": "Personalized Insights",
      "description": "Recognizing the uniqueness of every individual and medical situation, our smart reports are personalized to reflect the user's health profile, history, and relevant contextual factors. This ensures that insights provided are meaningful and actionable."
    },
    {
      "name": "Accessible and Understandable Results",
      "description": "We believe understanding your health shouldn't be complicated. Our smart reports are designed to be user-friendly and easily digestible, translating complex medical jargon into clear, concise language. This empowers users to make informed decisions about their health with confidence."
    },
    {
      "name": "Continual Learning and Improvement",
      "description": "Our system continuously learns and evolves. With each new report processed, our algorithms gain insights and refine their capabilities, ensuring users receive the most accurate and up-to-date information possible. We're committed to staying at the forefront of medical technology to provide the best service to our users."
    },
    {
      "name": "Privacy and Security",
      "description": "We prioritize the privacy and security of our users' medical data above all else. Our platform employs state-of-the-art encryption and data protection measures to safeguard sensitive information. Users can trust that their personal health information is handled with the utmost care and confidentiality."
    },
  ];

  return (
    <div className="whatwedo font-montserrat">
      <div className="left-section1">
        <h2>How It Works</h2>
        <h1>Drive end-to-end process automation</h1>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              >
                {item.name}
              </div>
              <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section1">
        <div className="image-container">
          <img src="https://i.postimg.cc/PqbcJqKg/Untitled-design-4.gif" alt="Process Automation" />
          <div className="image-text">
            {/* <p>Empowering healthcare through innovation</p>
            <p>Transforming medical data into actionable insights</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
