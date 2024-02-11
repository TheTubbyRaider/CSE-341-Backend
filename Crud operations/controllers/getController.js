const YourModel = require('../models/yourModel');

module.exports = {
  getAll: async (req, res) => {
    try {
      const docs = await YourModel.find();
      res.json(docs);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error getting documents');
    }
  },

  getOne: async (req, res) => {
    try {
      const doc = await YourModel.findById(req.params.id);
      res.json(doc);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error getting document');
    }
  }
}
