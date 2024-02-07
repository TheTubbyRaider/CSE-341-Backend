const express = require('express');
const router = express.Router();
const YourModel = require('../models/yourModel');

router.delete('/:id', async (req, res) => {
  try {
    const deletedData = await YourModel.findByIdAndDelete(req.params.id);
    res.json(deletedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
