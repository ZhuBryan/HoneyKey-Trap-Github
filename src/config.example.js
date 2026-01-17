/**
 * ACME Internal Dashboard Configuration
 *
 * Copy this file to config.js and fill in your credentials
 */

module.exports = {
  // API Configuration
  api: {
    baseUrl: 'https://api.internal.acme-corp.io',
    version: 'v1',
    // Get your API key from the DevOps team
    apiKey: 'YOUR_API_KEY_HERE',
    timeout: 30000,
  },

  // Dashboard Settings
  dashboard: {
    refreshInterval: 60000,
    maxDataPoints: 100,
    timezone: 'America/Los_Angeles',
  },

  // Authentication
  auth: {
    sessionTimeout: 3600000,
    cookieName: 'acme_session',
  },

  // Feature Flags
  features: {
    enableAnalytics: true,
    enableExports: true,
    debugMode: false,
  },
};
