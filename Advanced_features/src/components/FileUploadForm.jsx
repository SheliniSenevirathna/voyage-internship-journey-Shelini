import React, { useState } from 'react';

function FileUploadForm({ uploadedFiles, setUploadedFiles }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return setStatus('Select a file first');

    // Prepare metadata
    const fileMetadata = {
      fileName: file.name,
      sizeKB: Math.round(file.size / 1024),
      type: file.type || 'Unknown',
      uploadDate: new Date().toLocaleString(),
    };

    // Save in parent state
    setUploadedFiles([...uploadedFiles, fileMetadata]);
    setStatus(`Uploaded: ${file.name}`);
    setFile(null);
  };

  return (
    <div className="feature-box">
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default FileUploadForm;
