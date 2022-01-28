const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const historySchema = new Schema({
  cityName: {
    type: String,
    required: false,
  }
}
, { timestamps: true }
);


const historyRecords = mongoose.model('HistoryRecords', historySchema);

module.exports = historyRecords;

