const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: String
});

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  genre: {
    type: String
  },
  status: {
    type: String,
    enum: ['Available', 'Checked out', 'Reserved'],
    default: 'Available'
  }
});

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Set up models
const User = mongoose.model('User', UserSchema);
const Book = mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author', AuthorSchema);
const Genre = mongoose.model('Genre', GenreSchema);

// OAuth implementation

// MongoDB setup

// Initial file structure

// CRUD operations

// Additional features

// Testing

// Swagger documentation

module.exports = {
  User,
  Book,
  Author,
  Genre
};
