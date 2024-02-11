const YourModel = require('../models/yourModel');

module.exports = {
  createOne: async (req, res) => {
    try {
      const newDoc = await YourModel.create(req.body);
      res.status(201).json(newDoc);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error creating document');
    }
  }
}
