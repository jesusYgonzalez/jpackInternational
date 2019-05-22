const mongoose = require("mongoose");

const corrugatedPadsSchema = mongoose.Schema({
  dimensionsLW: String,
  style: String,
  numberPerBundle: String,
  numberPerPallet: String
});

module.exports = mongoose.model('CorrugatedPads', corrugatedPadsSchema);
