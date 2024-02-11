const YourModel = require('../models/yourModel');

module.exports = {
  deleteOne: async (req, res) => {
    try {
      const deletedDoc = await YourModel.findByIdAndDelete(req.params.id);
      res.json(deletedDoc);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting document');
    }
  }
}
