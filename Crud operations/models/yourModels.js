const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  // schema definition  
});

module.exports = mongoose.model('YourModel', yourSchema);
