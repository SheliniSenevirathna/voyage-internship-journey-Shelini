// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

// security headers
app.use(helmet());

// CORS - allow frontend origin, or remove options to allow all
// app.use(cors()); // allow all origins (development)
// or limit to a single origin:
app.use(cors({ origin: 'http://localhost:5173' })); // change to your frontend origin

// logging
app.use(morgan('dev'));

// parse JSON body
app.use(express.json());

// simple root route
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Welcome to the API' });
});

// mount routers
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

// 404 handler for unknown routes
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// central error handler
app.use((err, req, res, next) => {
  console.error(err); // for server log
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      // include stack only in development
      ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}),
    },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
