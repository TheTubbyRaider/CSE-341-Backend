const User = require('../models/User');

const registerUser = async (req, res) => {
  // Implement user registration  
};

const loginUser = async (req, res) => {
  // Implement user login
};

module.exports = {
  registerUser,
  loginUser
};

// Require password hashing utility
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  // Hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
  // Create user in DB
};

const loginUser = async (req, res) => {
  // Validate password
  const validPassword = await bcrypt.compare(
    req.body.password, 
    user.password
  );
  
  if(!validPassword) {
    return res.status(400).json({msg: 'Invalid credentials'});
  }
  
  // Generate and return JWT
};
