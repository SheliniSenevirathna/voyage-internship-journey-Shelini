import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send(`Server running on port ${process.env.PORT || 5000}`);
});

// User routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
