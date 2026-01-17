/**
 * API Client Tests
 */

const api = require('../src/api');

describe('AcmeApiClient', () => {
  describe('getProjects', () => {
    it('should fetch projects from API', async () => {
      // Note: Requires valid API credentials
      // Skip in CI environment
      if (process.env.CI) {
        return;
      }

      const projects = await api.getProjects();
      expect(Array.isArray(projects)).toBe(true);
    });
  });

  describe('verifyToken', () => {
    it('should verify token validity', async () => {
      if (process.env.CI) {
        return;
      }

      const result = await api.verifyToken('test-token');
      expect(result).toHaveProperty('valid');
    });
  });
});
