// Final Project\controllers\bookcontroller.js

const Book = require('../models/book');
const Author = require('../models/author');

// @route   GET /books
// @desc    Get all books
// @access  Public
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// @route   GET /books/:id
// @desc    Get single book by id
// @access  Public  
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// @route   POST /books
// @desc    Create a book
// @access  Private
exports.createBook = async (req, res) => {
  try {
    const { title, isbn, authors, genres } = req.body;

    // Validate input
    if (!title) {
      return res.status(400).json({ msg: 'Title is required' });
    }

    const newBook = new Book({
      title,
      isbn,
      authors: authors.map(author => author._id),
      genres: genres.map(genre => genre._id)
    });

    const book = await newBook.save();

    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// @route   PUT /books/:id
// @desc    Update a book
// @access  Private  
exports.updateBook = async (req, res) => {
  try {
    const { title, isbn, authors, genres } = req.body;

    const bookFields = {};
    if (title) bookFields.title = title;
    if (isbn) bookFields.isbn = isbn;
    if (authors) bookFields.authors = authors.map(author => author._id);
    if (genres) bookFields.genres = genres.map(genre => genre._id);

    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    book = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: bookFields },
      { new: true }
    );

    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// @route   DELETE /books/:id
// @desc    Delete a book
// @access  Private
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    await book.remove();

    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Authors CRUD operations

// @route   GET /authors
// @desc    Get all authors
// @access  Public
exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// @route   GET /authors/:id
// @desc    Get single author by id
// @access  Public
exports.getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({ msg: 'Author not found' });
    }

    res.json(author);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error