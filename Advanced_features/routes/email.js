// routes/email.js
import express from 'express';
import nodemailer from 'nodemailer';


const router = express.Router();


const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: parseInt(process.env.SMTP_PORT || '587', 10),
secure: process.env.SMTP_PORT === '465',
auth: {
user: process.env.SMTP_USER,
pass: process.env.SMTP_PASS,
},
});


transporter.verify().then(() => console.log('SMTP OK')).catch(err => console.warn('SMTP verify failed', err));


router.post('/send', async (req, res) => {
try {
const { to, subject, text, html } = req.body;
if (!to || !subject) return res.status(400).json({ error: 'Missing fields' });


const info = await transporter.sendMail({
from: process.env.EMAIL_FROM,
to,
subject,
text,
html,
});


res.json({ success: true, messageId: info.messageId });
} catch (err) {
console.error('Email send error', err);
res.status(500).json({ error: 'Failed to send email', details: err.message });
}
});


export default router;