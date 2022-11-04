'use strict';

const { sign } = require('crypto');
const express = require('express');
const cors = require('cors');

const notFoundHandler = require('./../src/auth/error-handlers/404');
const errorHandler = require('./../src/auth/error-handlers/500');
const logger = require('./../src/auth/middleware/logger.js');

const authRoutes = require('./../src/auth/routes/authRouter');
const v1Routes = require('./../src/auth/routes/v1');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use(authRoutes);

app.use('/api/v1', v1Routes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};