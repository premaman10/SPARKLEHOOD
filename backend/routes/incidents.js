const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// GET all incidents
router.get('/', async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
});

// GET incident by ID
router.get('/:id', async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch incident' });
  }
});

// POST new incident
router.post('/', async (req, res) => {
  try {
    const incident = new Incident(req.body);
    await incident.validate();
    const savedIncident = await incident.save();
    res.status(201).json(savedIncident);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Failed to create incident' });
  }
});

// DELETE incident
router.delete('/:id', async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }
    res.json({ message: 'Incident deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete incident' });
  }
});

module.exports = router; 