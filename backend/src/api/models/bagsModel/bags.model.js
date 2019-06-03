const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ANTI STATIC BAG //
const antiStaticBagsSchema = new Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

// BUBBLE POUCHES //
const bubblePouchesSchema = new Schema({
  regularNumber: String,
  antiStaticNumber: String,
  size: String,
  bagPercase: String
});

// CLEAR POLY BAGS //
const clearPolyBagsSchema = new Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

// POLY BAG SEALER //
const polyBagSealerSchema = mongoose.Schema({
  productNumber: String,
  description: String,
  sealing: String
});

// POLYPROPYLENE BAGS //
const polypropyleneBags = mongoose.Schema({
  productNumber: String,
  durability: String,
  size: String,
  bagPercase: String
});

// POLY TUBING //
const polyTubingSchema = mongoose.Schema({
  productNumber: String,
  size: String,
  durability: String,
  weight: String,
  length: String
});

// RECLOSABLE BAGS //
const reclosableBagSchema = new Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

// STATIC SHIELDING BAGS //
const staticShieldingBagsSchema = mongoose.Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

// VACUUM BAGS //
const vacuumBagsSchema = mongoose.Schema({
  productNumber: String,
  outsideDimensions: String,
  strength: String,
  bagPercase: String
});


// EXPORTS //
module.exports = mongoose.model("AntiStaticBags", antiStaticBagsSchema);
module.exports = mongoose.model("BubblePouches", antiStaticBagsSchema);
module.exports = mongoose.model("ClearPolyBags", antiStaticBagsSchema);
module.exports = mongoose.model("PolyBagSealer", polyBagSealerSchema);
module.exports = mongoose.model("PolypropyleneBags", antiStaticBagsSchema);
module.exports = mongoose.model("PolyTubing", antiStaticBagsSchema);
module.exports = mongoose.model("ReclosableBags", antiStaticBagsSchema);
module.exports = mongoose.model("staticShieldingBags", staticShieldingBagsSchema);
module.exports = mongoose.model("VacuumBags", antiStaticBagsSchema);
