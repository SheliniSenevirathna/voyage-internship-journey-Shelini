import React from 'react';

function ExportData({ uploadedFiles, sentEmails }) {
  const handleExport = () => {
    if (uploadedFiles.length === 0 && sentEmails.length === 0) {
      alert('No data to export.');
      return;
    }

    let csvContent = '';

    // 1. Add uploaded files
    if (uploadedFiles.length > 0) {
      csvContent += 'Uploaded Files\n';
      csvContent += ['File Name', 'Size (KB)', 'Type', 'Upload Date'].join(',') + '\n';
      csvContent += uploadedFiles
        .map(f => [f.fileName, f.sizeKB, f.type, f.uploadDate].join(','))
        .join('\n');
      csvContent += '\n\n'; // extra line
    }

    // 2. Add sent emails
    if (sentEmails.length > 0) {
      csvContent += 'Sent Emails\n';
      csvContent += ['Recipient', 'Subject', 'Message', 'Sent Date'].join(',') + '\n';
      csvContent += sentEmails
        .map(e => [e.to, e.subject, e.message.replace(/,/g, ';'), e.sentDate].join(','))
        .join('\n');
    }

    // 3. Create Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="feature-box">
      <h2>Export Data</h2>
      <button onClick={handleExport}>Download CSV</button>
    </div>
  );
}

export default ExportData;
