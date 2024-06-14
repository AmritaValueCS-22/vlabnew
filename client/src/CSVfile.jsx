import React, { useState } from "react";

function CSVUploader({ onUpload }) {
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();

      // Callback function when file is read
      reader.onload = (event) => {
        const csvData = event.target.result;
        // Pass the CSV data to the parent component
        onUpload(csvData);
      };

      // Read the file as text
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
}

export default CSVUploader;
