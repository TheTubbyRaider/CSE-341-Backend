const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/cruddb', { useNewUrlParser: true }); 

// Passport config  
require('./config/passport');

// Use passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Import routes
const authRoutes = require('./routes/auth');
const getRoutes = require('./routes/get');
const postRoutes = require('./routes/post');
const putRoutes = require('./routes/put');
const deleteRoutes = require('./routes/delete');

// Use routes
app.use('/auth', authRoutes);
app.use('/get', passport.authenticate('jwt', {session: false}), getRoutes);
app.use('/post', passport.authenticate('jwt', {session: false}), postRoutes);
app.use('/put', passport.authenticate('jwt', {session: false}), putRoutes);
app.use('/delete', passport.authenticate('jwt', {session: false}), deleteRoutes);

app.listen(3000);


// Add OAuth authentication
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Implement CRUD operations for books, authors, genres
const Book = require('./models/Book');
const Author = require('./models/Author');
const Genre = require('./models/Genre');

// GET all books
app.get('/books', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET book by ID
app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST new book
app.post('/books', (req, res) => {
    const newBook = new Book(req.body);

    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Similar CRUD routes for authors and genres

// Set up MongoDB collections
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/bookdb';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Add controller logic
const bookController = require('./controllers/bookController');
app.use('/books', bookController);

const authorController = require('./controllers/authorController');
app.use('/authors', authorController);

const genreController = require('./controllers/genreController');
app.use('/genres', genreController);


// Write tests
const request = require('supertest');

describe('Book API', () => {
    it('gets all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('gets a book by id', async () => {
        const res = await request(app).get('/books/123');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Object);
    });

    // Add more tests for other routes

    afterAll(async () => {
        await mongoose.connection.close();
    });
});
