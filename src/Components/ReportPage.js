import React, { useState } from 'react';
import Swal from 'sweetalert2';

import '../Styles/ReportPage.css';

const ReportPage = () => {
  const [records, setRecords] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleUpload = () => {
    // Upload functionality here
    if (selectedFiles.length === 0) {
      Swal.fire('No files selected', 'Please select files to upload', 'warning');
      return;
    }

    // Simulate upload process
    Swal.fire('Upload started', 'Simulating upload process...', 'info');
    setTimeout(() => {
      Swal.fire('Upload complete', 'Files uploaded successfully', 'success');
      // Update records with uploaded files
      setRecords(prevRecords => prevRecords.concat(selectedFiles));
      setSelectedFiles([]); // Clear selected files
    }, 2000);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className="report-page">
      <h2>Report</h2>
      <div className="report-header">
        <input type="file" multiple onChange={handleFileChange} />
        <button className="btn upload-btn" onClick={handleUpload}>Upload Report</button>
      </div>
      <div className="report-body">
        <p>Total {records.length} Record(s) Found.</p>
        {records.length === 0 ? (
          <div className="no-report">
            <p>No Report Available.</p>
          </div>
        ) : (
          <div className="report-list">
            {/* Render uploaded records */}
            {records.map((record, index) => (
              <div key={index} className="report-item">
                {record.name} {/* Display file name or any other relevant information */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
