require('dotenv').config();
const logEvent = require('./logger');
const TOKEN = process.env.LOG_TOKEN;

const loggingMiddleware = async (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;

  await logEvent("backend", "info", "middleware", `${method} ${url}`, TOKEN);

  next();
};

module.exports = loggingMiddleware;
