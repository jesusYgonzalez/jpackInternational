const mongoose = require("mongoose");

const polypropyleneBags = mongoose.Schema({
  productNumber: String,
  durability: String,
  size: String,
  bagPercase: String
});

module.exports = mongoose.model('PolypropyleneBags', polypropyleneBags);
