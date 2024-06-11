import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const UploadRecord = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [token] = useState(null); // State to store the JWT token

  // Function to handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle description change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to handle upload button click
  const handleUpload = () => {
    if (!file || !description) {
      swal({
        text: 'Please provide a file and description.',
        icon: 'warning',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    setUploading(true);

    axios.post('http://localhost:2000/upload-record', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'token': token // Include the JWT token in the request headers
      },
    })
      .then((response) => {
        setUploading(false);
        swal({
          text: 'File uploaded successfully!',
          icon: 'success',
        });
        setFile(null);
        setDescription('');
        if (response.data && response.data.fileUrl) {
          setUploadedFileUrl(response.data.fileUrl); // Store the uploaded file URL
        }
      })
      .catch((error) => {
        setUploading(false);
        swal({
          text: error.response?.data?.errorMessage || 'An error occurred',
          icon: 'error',
        });
      });
  };

  // Render the component
  return (
    <div>
      <h1>Upload Record</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={handleDescriptionChange} 
        />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {uploadedFileUrl && (
        <div>
          <p>Uploaded File:</p>
          {/* Render the uploaded file */}
          <img src={uploadedFileUrl} alt="Uploaded File" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default UploadRecord;
