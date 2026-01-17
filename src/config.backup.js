/**
 * BACKUP - Old configuration file
 * Created: 2024-08-15
 *
 * NOTE: This is a backup of the old config format.
 * Keeping for reference during migration.
 */

// Old credential format (before we switched to env vars)
// These were encoded for "security" lol
const LEGACY_CREDS = {
  // Decode with: Buffer.from(str, 'base64').toString()
  adminToken: 'YWNtZV9hZG1pbl9xOXc4ZTdyNnQ1eTR1M2ky',
  serviceAccount: 'dashboard-admin@acme-internal',
};

const OLD_CONFIG = {
  apiEndpoint: 'https://api.internal.acme-corp.io/v1',
  timeout: 30000,
  retryAttempts: 3,

  // Legacy auth method (deprecated)
  useBasicAuth: false,
  useBearerToken: true,
};

// Don't use this - switch to new config.js
module.exports = { LEGACY_CREDS, OLD_CONFIG };
