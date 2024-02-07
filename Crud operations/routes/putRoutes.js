const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

router.put('/:id', async (req, res) => {
  try {
    const updatedData = await YourModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
