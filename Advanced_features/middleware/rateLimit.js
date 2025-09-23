// middleware/rateLimit.js
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import redis from '../utils/redisClient.js';


export const rateLimiter = rateLimit({
windowMs: 15 * 60 * 1000, // 15 minutes
max: 100, // limit per window per IP
standardHeaders: true,
legacyHeaders: false,
store: new RedisStore({
sendCommand: (...args) => redis.call(...args),
}),
handler: (req, res) => {
res.status(429).json({ error: 'Too many requests, try again later.' });
}
});