const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  // book fields 
});

module.exports = mongoose.model('Book', BookSchema); 
