const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
  } = require('../controllers/bookController');
  
  // book routes 
  router.get('/', getBooks);
  router.get('/:id', getBook);
  router.post('/', createBook);  
  router.put('/:id', updateBook);
  router.delete('/:id', deleteBook);
  