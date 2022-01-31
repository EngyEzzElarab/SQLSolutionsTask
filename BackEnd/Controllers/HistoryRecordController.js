//Constants
const router = require('express').Router();
const historyRecords = require('../Models/HistoryRecords');
// GET Request to get all history records from MongoDB
  router.route('/getAllHistoryRecords').get(async(req, res) => {
    const history = await historyRecords.find({})
      try{
        res.send(history);
      }
      catch(err){
        res.status(500).send(err);
      }
  });
//DELETE request to delete a specific history record with an ID
  router.delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await historyRecords.findByIdAndDelete({ _id: req.params.id }, { new: true });
      console.log(result);
      res.send(result);
    }
    catch (err) {
      console.log(err.message);
    }
  })


  module.exports = router;
  