const mongoose = require("mongoose");

const polyTubingSchema = mongoose.Schema({
  productNumber: String,
  size: String,
  durability: String,
  weight: String,
  length: String
});

module.exports = mongoose.model('PolyTubing', polyTubingSchema);
