import express from "express";
import Redis from "ioredis";
import nodemailer from "nodemailer";

// ===== Express Server =====
const app = express();
app.use(express.json());

// ===== Redis connection =====
let redisClient;
try {
  redisClient = new Redis({
    host: "127.0.0.1",
    port: 6379,
    retryStrategy: null,      // stop retrying forever
    maxRetriesPerRequest: 1   // only one attempt per request
  });

  redisClient.on("error", (err) => {
    console.error("Redis Error (non-fatal):", err.message);
  });

} catch (err) {
  console.error("Redis not connected:", err.message);
}
// ===== POST /user =====
app.post("/user", (req, res) => {
  const { name, age } = req.body; // extract name and age from request body
  res.json({ message: "User received", name, age }); // send JSON response
});

// ===== Email Sending API =====
app.post("/api/email/send", async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const info = await transporter.sendMail({
      from: "no-reply@example.com", // change to your sender email
      to,
      subject,
      text: message
    });

    res.json({ success: true, info });
  } catch (err) {
    console.error("Email send failed:", err.message);
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
});

// ===== Test GET /hello =====
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, Shelini! 🎉 Your server is working fine." });
});

// ===== SMTP connection =====
let transporter;
try {
  transporter = nodemailer.createTransport({
    host: "127.0.0.1", // or your SMTP host
    port: 587,
    secure: false
  });

  transporter.verify((err, success) => {
    if (err) {
      console.error("SMTP verify failed (non-fatal):", err.message);
    } else {
      console.log("SMTP is ready");
    }
  });

} catch (err) {
  console.error("SMTP setup failed:", err.message);
}


// ===== Simple route =====
app.get("/", (req, res) => res.send("Server is running!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
