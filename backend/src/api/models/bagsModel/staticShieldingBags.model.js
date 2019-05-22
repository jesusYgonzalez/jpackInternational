const mongoose = require("mongoose");

const staticShieldingBagsSchema = mongoose.Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

module.exports = mongoose.model('StaticShieldingBags', staticShieldingBagsSchema);
