// routes/userRoutes.js
import express from 'express';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Protected route
router.get('/me', auth, (req, res) => {
  res.json({ user: req.user });
});

export default router;
