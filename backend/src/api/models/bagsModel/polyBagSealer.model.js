const mongoose = require('mongoose');

const polyBagSealerSchema = mongoose.Schema({
  productNumber: String,
  description: String,
  sealing: String
});

module.exports = mongoose.model('PolyBagSealer', polyBagSealerSchema);
