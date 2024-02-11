const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
  // Author fields  
});

module.exports = mongoose.model('Author', AuthorSchema);
