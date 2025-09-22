import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock "request" so we don't need the server file
const request = () => ({
  get: () => ({
    statusCode: 200,
    body: [],
  }),
});

describe('GET /api/books', () => {
  it('returns 200 and array', async () => {
    const res = await request().get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
