const mongoose = require("mongoose");

const corrugatedBoxesSchema = mongoose.Schema({
  description: String,
  numberPerBundle: String,
  numberPerPallet: String
});

module.exports = mongoose.model('CorrugatedBoxes', corrugatedBoxesSchema);
