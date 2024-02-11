const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register route
router.post('/register', async (req, res) => {
  // Create user logic
});

// Login route
router.post('/login', async (req, res) => {
  // Authenticate user

  // Create JWT payload
  const payload = {
    id: user.id
  };

  // Sign token
  jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
    res.json({
      success: true,
      token: 'Bearer ' + token
    });
  });
});

module.exports = router;
