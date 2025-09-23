// middleware/redisCache.js
import redis from '../utils/redisClient.js';


export const cacheMiddleware = (ttlSeconds = 60) => {
return async (req, res, next) => {
try {
const key = `cache:${req.method}:${req.originalUrl}`;
const cached = await redis.get(key);
if (cached) {
res.set('X-Cache', 'HIT');
return res.json(JSON.parse(cached));
}


const origJson = res.json.bind(res);
res.json = async (body) => {
try {
await redis.set(key, JSON.stringify(body), 'EX', ttlSeconds);
} catch (e) {
console.warn('Redis set failed', e);
}
res.set('X-Cache', 'MISS');
return origJson(body);
};


next();
} catch (err) {
console.warn('Redis cache error', err);
next();
}
};
};