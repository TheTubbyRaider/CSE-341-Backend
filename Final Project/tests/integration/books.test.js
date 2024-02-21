const request = require('supertest');
const app = require('../../app');

describe('Book API', () => {

  it('gets all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toEqual(200);
  });

  it('gets a book by id', async () => {
    // Test GET book by id
  });

  // Add additional endpoint tests

});
