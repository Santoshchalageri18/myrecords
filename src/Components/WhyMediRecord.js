import React from "react";
import Doctor from "../Assets/Untitled design (6).gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/WhyMediRecord.css";

function WhyMediRecord() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/Login");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Why Mymedirecords" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Mymedirecords</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Mymedirecords for your healthcare management. 
          Experience secure record handling, advanced analytics, and personalized insights, 
          making your well-being our top priority. Join us on a journey to smarter health management.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Secure Medical Records
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Advanced Analytics
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Easy and Quick Enrollment
        </p>

        <button
          className="ba-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Start 
        </button>
      </div>
    </div>
  );
}

export default WhyMediRecord;
