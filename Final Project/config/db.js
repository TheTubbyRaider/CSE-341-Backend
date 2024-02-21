const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/booklibrary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema for books
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  status: {
    type: String,
    enum: ['available', 'checkedOut', 'reserved'],
    default: 'available'
  }
});

// Define schema for authors
const authorSchema = new mongoose.Schema({
  name: String,
  books: [String]
});

// Define schema for genres
const genreSchema = new mongoose.Schema({
  name: String,
  books: [String]
});

// Define schema for users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: String
});

// Define models
const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);
const Genre = mongoose.model('Genre', genreSchema);
const User = mongoose.model('User', userSchema);

// Export models
module.exports = {
  Book,
  Author,
  Genre,
  User
};

