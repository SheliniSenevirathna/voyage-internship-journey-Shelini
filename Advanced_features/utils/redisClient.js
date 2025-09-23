// utils/redisClient.js
import Redis from 'ioredis';
import dotenv from 'dotenv';


dotenv.config();


const redis = new Redis(process.env.REDIS_URL);



redis.on('error', (err) => console.warn('Redis Error', err));


export default redis;