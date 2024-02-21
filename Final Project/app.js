// Require modules
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); 
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

// Create express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/booklibrary', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes); 
app.use('/api/authors', authorRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
