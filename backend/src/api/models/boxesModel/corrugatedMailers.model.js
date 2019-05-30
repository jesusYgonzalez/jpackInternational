const mongoose = require("mongoose");

const corrugatedMailersSchema = mongoose.Schema({
  insideDimensions: String,
  style: String,
  numberPerBundle: String,
  numberPerPallet: String
});

module.exports = mongoose.model('CorrugatedMailers', corrugatedMailersSchema);
