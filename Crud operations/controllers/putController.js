const YourModel = require('../models/yourModel');

module.exports = {
  updateOne: async (req, res) => {
    try {
      const updatedDoc = await YourModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedDoc);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating document');
    }
  }
}
