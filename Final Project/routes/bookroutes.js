const express = require('express');
const { 
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookControllers');

const router = express.Router();

// RESTful routes for books
router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
