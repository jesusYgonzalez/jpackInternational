const mongoose = require("mongoose");

const vacuumBagsSchema = mongoose.Schema({
  productNumber: String,
  outsideDimensions: String,
  strength: String,
  bagPercase: String
});

module.exports = mongoose.model('VacuumBags', vacuumBagsSchema);
