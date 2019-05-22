import express from "express";
export const router = express.Router();

// BAG ROUTES //
import antiStaticBags from "../api/controllers/bagsController/AntiStaticBags.controller";
import clearPolyBags from "../api/controllers/bagsController/clearPolyBags.controller";
import bubblePouches from "../api/controllers/bagsController/bubblePouches.controller";
import reclosableBags from "../api/controllers/bagsController/reclosableBags.controller";
import polypropyleneBags from "../api/controllers/bagsController/polypropyleneBags.controller";
import polyTubing from "../api/controllers/bagsController/polyTubing.controller";
import staticShieldingBags from "../api/controllers/bagsController/staticShieldingBags.controller";
import vacuumBags from "../api/controllers/bagsController/vacuumBags.controller";
import polyBagSealer from "../api/controllers/bagsController/polyBagSealer.controller";

// BOXES ROUTES //
import corrugatedPads from "../api/controllers/boxesController/corrugatedPads.controller";
import corrugatedBoxes from "../api/controllers/boxesController/corrugatedBoxes.controller";

//////////////////////////////// BAGS ////////////////////////////////

// ANTI STATIC BAG //
router.post("/bags/antiStaticBags", antiStaticBags.create);
router.get("/bags/antiStaticBags/:id", antiStaticBags.findOne);
router.get("/bags/antiStaticBags", antiStaticBags.findAll);
router.put("/bags/antiStaticBags/:id", antiStaticBags.update);
router.delete("/bags/antiStaticBags/:id", antiStaticBags.delete);

// BUBBLE POUCHES //
router.post("/bags/bubblePouches", bubblePouches.create);
router.get("/bags/bubblePouches/:id", bubblePouches.findOne);
router.get("/bags/bubblePouches", bubblePouches.findAll);
router.put("/bags/bubblePouches/:id", bubblePouches.update);
router.delete("/bags/bubblePouches/:id", bubblePouches.delete);

// CLEAR POLY BAGS //
router.post("/bags/clearPolyBags", clearPolyBags.create);
router.get("/bags/clearPolyBags/:id", clearPolyBags.findOne);
router.get("/bags/clearPolyBags", clearPolyBags.findAll);
router.put("/bags/clearPolyBags/:id", clearPolyBags.update);
router.delete("/bags/clearPolyBags/:id", clearPolyBags.delete);

// RECLOSABLE POLY BAGS //
router.post("/bags/reclosableBags", reclosableBags.create);
router.get("/bags/reclosableBags/:id", reclosableBags.findOne);
router.get("/bags/reclosableBags", reclosableBags.findAll);
router.put("/bags/reclosableBags/:id", reclosableBags.update);
router.delete("/bags/reclosableBags/:id", reclosableBags.delete);

// POLY BAG SEALER //
router.post("/bags/polyBagSealer", polyBagSealer.create);
router.get("/bags/polyBagSealer/:id", polyBagSealer.findOne);
router.get("/bags/polyBagSealer", polyBagSealer.findAll);
router.put("/bags/polyBagSealer/:id", polyBagSealer.update);
router.delete("/bags/polyBagSealer/:id", polyBagSealer.delete);

// POLYPROPYLENE BAGS //
router.post("/bags/polypropyleneBags", polypropyleneBags.create);
router.get("/bags/polypropyleneBags/:id", polypropyleneBags.findOne);
router.get("/bags/polypropyleneBags", polypropyleneBags.findAll);
router.put("/bags/polypropyleneBags/:id", polypropyleneBags.update);
router.delete("/bags/polypropyleneBags/:id", polypropyleneBags.delete);

// POLY TUBING //
router.post("/bags/polyTubing", polyTubing.create);
router.get("/bags/polyTubing/:id", polyTubing.findOne);
router.get("/bags/polyTubing", polyTubing.findAll);
router.put("/bags/polyTubing/:id", polyTubing.update);
router.delete("/bags/polyTubing/:id", polyTubing.delete);

// STATIC SHIELDING BAGS //
router.post("/bags/staticShieldingBags", staticShieldingBags.create);
router.get("/bags/staticShieldingBags/:id", staticShieldingBags.findOne);
router.get("/bags/staticShieldingBags", staticShieldingBags.findAll);
router.put("/bags/staticShieldingBags/:id", staticShieldingBags.update);
router.delete("/bags/staticShieldingBags/:id", staticShieldingBags.delete);

// VACUUM BAGS //
router.post("/bags/vacuumBags", vacuumBags.create);
router.get("/bags/vacuumBags/:id", vacuumBags.findOne);
router.get("/bags/vacuumBags", vacuumBags.findAll);
router.put("/bags/vacuumBags/:id", vacuumBags.update);
router.delete("/bags/vacuumBags/:id", vacuumBags.delete);

//////////////////////////////// BOXES ////////////////////////////////

// CORRUGATED BOXES //
router.post("/bags/corrugatedBoxes", corrugatedBoxes.create);
router.get("/bags/corrugatedBoxes/:id", corrugatedBoxes.findOne);
router.get("/bags/corrugatedBoxes", corrugatedBoxes.findAll);
router.put("/bags/corrugatedBoxes/:id", corrugatedBoxes.update);
router.delete("/bags/corrugatedBoxes/:id", corrugatedBoxes.delete);

// CORRUGATED PADS //
router.post("/bags/corrugatedPads", corrugatedPads.create);
router.get("/bags/corrugatedPads/:id", corrugatedPads.findOne);
router.get("/bags/corrugatedPads", corrugatedPads.findAll);
router.put("/bags/corrugatedPads/:id", corrugatedPads.update);
router.delete("/bags/corrugatedPads/:id", corrugatedPads.delete);
