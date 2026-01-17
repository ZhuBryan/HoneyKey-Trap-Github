/**
 * ACME Internal API Client
 * Handles all communication with the internal API
 */

const config = require('./config');

class AcmeApiClient {
  constructor() {
    this.baseUrl = `${config.api.baseUrl}/${config.api.version}`;
    this.apiKey = config.api.apiKey;
    this.timeout = config.api.timeout;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      'X-Client': 'acme-dashboard',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        timeout: this.timeout,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${error.message}`);
      throw error;
    }
  }

  // Project endpoints
  async getProjects() {
    return this.request('/projects');
  }

  async getProject(projectId) {
    return this.request(`/projects/${projectId}`);
  }

  // Secrets endpoint (requires elevated permissions)
  async getSecrets() {
    return this.request('/secrets');
  }

  // Authentication
  async verifyToken(token) {
    return this.request('/auth/verify', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }

  // Analytics
  async getMetrics(startDate, endDate) {
    return this.request(`/metrics?start=${startDate}&end=${endDate}`);
  }

  async getTeamStats(teamId) {
    return this.request(`/teams/${teamId}/stats`);
  }
}

module.exports = new AcmeApiClient();
