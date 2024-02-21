const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  genre: {
    type: String
  },
  yearPublished: {
    type: Number
  } 
});

module.exports = mongoose.model('Book', BookSchema);
