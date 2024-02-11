const express = require('express');
const router = express.Router();

const putController = require('../controllers/putController');

router.put('/:id', putController.updateOne);

module.exports = router;
