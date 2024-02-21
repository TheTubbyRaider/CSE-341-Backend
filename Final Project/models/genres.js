const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  // User fields like username, password, etc
});

const BookSchema = mongoose.Schema({
  // Book fields like title, author, genre, etc  
});

const AuthorSchema = mongoose.Schema({
  // Author fields like name, bio, etc
});

const GenreSchema = mongoose.Schema({
  // Genre fields like name, description, etc
});

// Set up models
const User = mongoose.model('User', UserSchema);
const Book = mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author', AuthorSchema);
const Genre = mongoose.model('Genre', GenreSchema);

module.exports = {
  User,
  Book,
  Author,
  Genre
};
