const mongoose = require("mongoose");

const easyFoldBoxes = mongoose.Schema({
  insideDimensions: String,
  style: String,
  numberPerBundle: String,
  numberPerPallet: String
});

module.exports = mongoose.model('EasyFoldBoxes', easyFoldBoxes);
