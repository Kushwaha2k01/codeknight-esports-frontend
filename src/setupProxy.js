// Suppress webpack deprecation warnings
const { createProxyMiddleware } = require('http-proxy-middleware');
const originalWarn = console.warn;
const originalError = console.error;

const suppressWarnings = function(...args) {
  const message = args && args[0] ? String(args[0]) : '';
  if (
    message.includes('DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE') ||
    message.includes('DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE') ||
    message.includes('onAfterSetupMiddleware') ||
    message.includes('onBeforeSetupMiddleware')
  ) {
    return;
  }
  return originalWarn.apply(console, args);
};

const suppressErrors = function(...args) {
  const message = args && args[0] ? String(args[0]) : '';
  if (
    message.includes('DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE') ||
    message.includes('DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE') ||
    message.includes('onAfterSetupMiddleware') ||
    message.includes('onBeforeSetupMiddleware')
  ) {
    return;
  }
  return originalError.apply(console, args);
};

console.warn = suppressWarnings;
console.error = suppressErrors;

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
