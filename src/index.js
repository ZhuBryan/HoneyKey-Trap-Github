/**
 * ACME Internal Dashboard
 * Main entry point
 */

const express = require('express');
const path = require('path');
const api = require('./api');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Dashboard routes
app.get('/api/dashboard/projects', async (req, res) => {
  try {
    const projects = await api.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/dashboard/metrics', async (req, res) => {
  try {
    const { start, end } = req.query;
    const metrics = await api.getMetrics(start, end);
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

app.get('/api/dashboard/team/:teamId', async (req, res) => {
  try {
    const stats = await api.getTeamStats(req.params.teamId);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team stats' });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`ACME Dashboard running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
