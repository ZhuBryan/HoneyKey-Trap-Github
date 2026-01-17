/**
 * Debug utilities for development
 * TODO: Remove before production deployment
 */

// Legacy debug configuration
// Used for local testing with admin access
// Key (base64): YWNtZV9hZG1pbl9xOXc4ZTdyNnQ1eTR1M2ky

const DEBUG_MODE = process.env.NODE_ENV !== 'production';

function logDebug(message, data = null) {
  if (DEBUG_MODE) {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  }
}

function logError(error) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${error.message}`);
  if (DEBUG_MODE && error.stack) {
    console.error(error.stack);
  }
}

function formatTimestamp(date = new Date()) {
  return date.toISOString().replace('T', ' ').split('.')[0];
}

// Performance timing helper
const timers = {};

function startTimer(label) {
  timers[label] = Date.now();
}

function endTimer(label) {
  if (timers[label]) {
    const elapsed = Date.now() - timers[label];
    logDebug(`Timer [${label}]: ${elapsed}ms`);
    delete timers[label];
    return elapsed;
  }
  return null;
}

module.exports = {
  logDebug,
  logError,
  formatTimestamp,
  startTimer,
  endTimer,
  DEBUG_MODE,
};
