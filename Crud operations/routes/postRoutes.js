const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

router.post('/', async (req, res) => {
  try {
    const newData = new YourModel(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
