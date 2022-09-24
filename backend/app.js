const express = require('express');
const morgan = require('morgan');

const testRouter = require('./routes/testRoute');

const app = express();

// Development logging
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// Mounting routers
app.use('/', testRouter);

module.exports = app;