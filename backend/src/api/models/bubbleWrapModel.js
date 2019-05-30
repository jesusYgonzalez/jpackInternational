const mongoose = require("mongoose");

const corrugatedBulkContainers = mongoose.Schema({
  description: String,
  outsideDimensions: String,
  insideDimensions: String,
  test: String,
  numberPerBundle: String,
  numberPerPallet: String
});

module.exports = mongoose.model('CorrugatedBulkContainers', corrugatedBulkContainers);
