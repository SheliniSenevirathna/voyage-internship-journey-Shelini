import React, { useState } from 'react';
import FileUploadForm from './components/FileUploadForm.jsx';
import EmailForm from './components/EmailForm.jsx';
import ExportData from './components/ExportData.jsx';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);

  return (
    <div className="app-container">
      <h1>Advanced Features App</h1>
      <FileUploadForm uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
      <EmailForm sentEmails={sentEmails} setSentEmails={setSentEmails} />
      <ExportData uploadedFiles={uploadedFiles} sentEmails={sentEmails} />
    </div>
  );
}

export default App;
