import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { pool } from './db.js'; // MySQL connection pool
import authRoutes from './routes/authroutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Test route
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json({ serverTime: rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    const [rows] = await pool.query('SELECT 1');
    console.log('✅ MySQL connected');
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  }
  console.log(`🚀 Server running on http://localhost:${port}`);
});
