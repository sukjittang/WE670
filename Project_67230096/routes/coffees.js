const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffee');

router.get('/', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.render('index', { coffees });
  } catch (err) {
    res.status(500).send('Error loading data');
  }
});

router.get('/api', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/api', async (req, res) => {
  try {
    const coffee = new Coffee(req.body);
    await coffee.save();
    res.status(201).json(coffee);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET by ID
router.get('/api/:id', async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) return res.status(404).send('Not found');
    res.json(coffee);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// PUT update by ID
router.put('/api/:id', async (req, res) => {
  try {
    const coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coffee) return res.status(404).send('Not found');
    res.json(coffee);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE by ID
router.delete('/api/:id', async (req, res) => {
  try {
    const result = await Coffee.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send('Not found');
    res.send('Deleted successfully');
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;