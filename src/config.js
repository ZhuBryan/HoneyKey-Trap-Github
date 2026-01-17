/**
 * ACME Internal Dashboard Configuration
 *
 * WARNING: Do not commit this file with real credentials!
 * TODO: Move to environment variables before production
 */

module.exports = {
  // API Configuration
  api: {
    baseUrl: 'https://api.internal.acme-corp.io',
    version: 'v1',
    // ACME Internal API credentials
    apiKey: 'acme_live_f93k2jf92jf0s9df',
    timeout: 30000,
  },

  // Dashboard Settings
  dashboard: {
    refreshInterval: 60000, // 1 minute
    maxDataPoints: 100,
    timezone: 'America/Los_Angeles',
  },

  // Authentication
  auth: {
    sessionTimeout: 3600000, // 1 hour
    cookieName: 'acme_session',
  },

  // Feature Flags
  features: {
    enableAnalytics: true,
    enableExports: true,
    debugMode: false,
  },
};
