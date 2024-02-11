// Genre routes  

const {
    getGenres,
    getGenre,
    createGenre,
    updateGenre,
    deleteGenre
  } = require('../controllers/genreController');
  
  router.route('/').get(getGenres).post(createGenre);
  router.route('/:id').get(getGenre).put(updateGenre).delete(deleteGenre);
  
  module.exports = router;
  