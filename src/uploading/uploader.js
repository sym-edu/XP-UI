import React, { useState } from 'react';
import './uploader.css';

function Uploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the uploaded file
  };

  return (
    <div className="assignment-upload-container">
      <h2>Upload Your Assignment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="file-upload-label">
          Choose a file
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="file-upload-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uploader;
