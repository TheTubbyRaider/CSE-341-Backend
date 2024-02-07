const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

// GET route
router.get('/', async (req, res) => {
  try {
    const data = await YourModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
