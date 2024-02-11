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
