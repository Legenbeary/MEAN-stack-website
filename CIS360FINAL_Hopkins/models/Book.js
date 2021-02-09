var mongoose = require('mongoose');
const { stringify } = require('querystring');

var BookSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  zip: Number,
  peopleAddr: Number,
  year: Number,
  taker: String,
});

module.exports = mongoose.model('Book', BookSchema);
