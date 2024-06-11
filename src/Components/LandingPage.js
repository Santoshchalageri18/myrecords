import React from 'react';
import '../Styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Write More. Read Less.</h1>
        <p>
          Secure the insights you require for even the most complex underwriting and claim decisions.
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Extraction</h2>
          <p>
            We start by extracting from your incoming medical records (APSs) for all of the data necessary for medical underwriting decisions.
          </p>
        </div>
        <div className="feature">
          <h2>Processing</h2>
          <p>
            Next, we process the extracted data using an extensive, customizable rules base.
          </p>
        </div>
        <div className="feature">
          <h2>Reporting</h2>
          <p>
            Finally, we provide extracted data back to you as XML with industry-standard codes such as ICD-10 and MIB and in the form of a PDF report.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
