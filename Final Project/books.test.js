const request const request = require('supertest');
const app = require('../app');
const { getBookById } = require('../controllers/books');

describe('Book API', // Create Git Repo
    git init
git add.
git commit - m "Initial commit"

// Push to Heroku
heroku create
git push heroku master

    // API DOCUMENTATION is complete and available at route '/api-docs'
    // See code below for Swagger API documentation

    // Create Git repository
    // Done above

    // Set up MongoDB
    // Install and configure MongoDB

    // Outline initial file structure
    // src/
    //   models/
    //     book.js
    //     user.js
    //   routes/
    //     book.js
    //     user.js
    //   app.js
    // .gitignore
    // package.json
    // ...

    // Implement user authentication with OAuth
    // Install Passport.js
    // Set up OAuth with Google, Facebook etc
    // Create User model
    // Create /auth routes

    // Develop basic CRUD operations for books and authors
    // Create Book model 
    // Create book routes:
    //   GET /books
    //   GET /books/:id
    //   POST /books
    //   PUT /books/:id
    //   DELETE /books/:id

    // Push project to Heroku
    // git push heroku master

    // Complete initial API documentation
    // Use Swagger/OpenAPI to document API endpoints

    // Enhance CRUD operations with additional features (e.g., lending tracking)
    // Add lending data to Book model
    // Update book routes to track loans

    // Implement user-specific features
    // e.g. GET /users/:id/books to get a user's books

    // Conduct testing and bug fixing
    // Write unit and integration tests
    // Fix bugs uncovered by tests

    // Finalize API documentation using Swagger
    // Ensure docs are complete and accurate

    // Record video presentation showcasing key features

    // Prepare for the final demonstration
    // Write script/talking points
    // Practice presentation
    // Test app functionality
);
              = require('supertest');
const app = require('../app');

const Book = require('../models/Book');

describe('Book API', () => {

    let book;

    beforeEach(async () => {
        book = await Book.create({
            title: 'Test Book',
            author: 'Test Author',
            genre: 'Fiction',
            year: 2022
        });
    });

    afterEach(async () => {
        await Book.deleteMany();
    });

    it('gets a book by id', async () => {
        const res = await request(app).get(`/api/books/${book._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', book.title);
    });

    it('creates a new book', async () => {
        const res = await request(app)
            .post('/api/books')
            .send({
                title: 'New Book',
                author: 'New Author',
                genre: 'Non-Fiction',
                year: 2021
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'New Book');
    });

    it('updates a book', async () => {
        const res = await request(app)
            .put(`/api/books/${book._id}`)
            .send({
                title: 'Updated Title'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Title');
    });

    it('deletes a book', async () => {
        const res = await request(app)
            .delete(`/api/books/${book._id}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Book deleted');
    });

});
