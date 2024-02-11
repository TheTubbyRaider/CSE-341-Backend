const express = require('express');
const router = express.Router();

const getController = require('../controllers/getController');

router.get('/', getController.getAll);
router.get('/:id', getController.getOne);

module.exports = router; 
