import React, { useState } from 'react';

function EmailForm({ sentEmails, setSentEmails }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!to || !subject || !body) return;

    // Save email metadata
    const emailData = {
      to,
      subject,
      message: body,
      sentDate: new Date().toLocaleString(),
    };
    setSentEmails([...sentEmails, emailData]);
    setStatus(`Email ready to: ${to}`);

    // Reset input
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="feature-box">
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Recipient"
          value={to}
          onChange={e => setTo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default EmailForm;
