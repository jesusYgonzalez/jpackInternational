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
import corrugatedMailers from "../api/controllers/boxesController/corrugatedMailers.controller";
import easyFoldBoxes from "../api/controllers/boxesController/easyFoldBoxes.controller";
import corrugatedBulkContainers from "../api/controllers/boxesController/corrugatedBulkContainers.controller";
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
router.post("/boxes/corrugatedBoxes", corrugatedBoxes.create);
router.get("/boxes/corrugatedBoxes/:id", corrugatedBoxes.findOne);
router.get("/boxes/corrugatedBoxes", corrugatedBoxes.findAll);
router.put("/boxes/corrugatedBoxes/:id", corrugatedBoxes.update);
router.delete("/boxes/corrugatedBoxes/:id", corrugatedBoxes.delete);

// CORRUGATED PADS //
router.post("/boxes/corrugatedPads", corrugatedPads.create);
router.get("/boxes/corrugatedPads/:id", corrugatedPads.findOne);
router.get("/boxes/corrugatedPads", corrugatedPads.findAll);
router.put("/boxes/corrugatedPads/:id", corrugatedPads.update);
router.delete("/boxes/corrugatedPads/:id", corrugatedPads.delete);

// CORRUGATED MAILERS //
router.post("/boxes/corrugatedMailers", corrugatedMailers.create);
router.get("/boxes/corrugatedMailers/:id", corrugatedMailers.findOne);
router.get("/boxes/corrugatedMailers", corrugatedMailers.findAll);
router.put("/boxes/corrugatedMailers/:id", corrugatedMailers.update);
router.delete("/boxes/corrugatedMailers/:id", corrugatedMailers.delete);

// EASY FOLD BOXES //
router.post("/boxes/easyFoldBoxes", easyFoldBoxes.create);
router.get("/boxes/easyFoldBoxes/:id", easyFoldBoxes.findOne);
router.get("/boxes/easyFoldBoxes", easyFoldBoxes.findAll);
router.put("/boxes/easyFoldBoxes/:id", easyFoldBoxes.update);
router.delete("/boxes/easyFoldBoxes/:id", easyFoldBoxes.delete);

// EASY FOLD BOXES //
router.post("/boxes/corrugatedBulkContainers", corrugatedBulkContainers.create);
router.get("/boxes/corrugatedBulkContainers/:id", corrugatedBulkContainers.findOne);
router.get("/boxes/corrugatedBulkContainers", corrugatedBulkContainers.findAll);
router.put("/boxes/corrugatedBulkContainers/:id", corrugatedBulkContainers.update);
router.delete("/boxes/corrugatedBulkContainers/:id", corrugatedBulkContainers.delete);

// CARTON STAPLER //
// STAPLES //
// STAPLE REMOVER //

// MAILING TUBES //
// TUBE CAPS //

//////////////////////////////// CUSHIONING ////////////////////////////////
// BUBBLE WRAP //
router.post("/cushioning/corrugatedBulkContainers", corrugatedBulkContainers.create);
router.get("/cushioning/corrugatedBulkContainers/:id", corrugatedBulkContainers.findOne);
router.get("/cushioning/corrugatedBulkContainers", corrugatedBulkContainers.findAll);
router.put("/cushioning/corrugatedBulkContainers/:id", corrugatedBulkContainers.update);
router.delete("/cushioning/corrugatedBulkContainers/:id", corrugatedBulkContainers.delete);

// bWFoamDispenser //
router.post("/cushioning/bWFoamDispenser", bWFoamDispenser.create);
router.get("/cushioning/bWFoamDispenser/:id", bWFoamDispenser.findOne);
router.get("/cushioning/bWFoamDispenser", bWFoamDispenser.findAll);
router.put("/cushioning/bWFoamDispenser/:id", bWFoamDispenser.update);
router.delete("/cushioning/bWFoamDispenser/:id", bWFoamDispenser.delete);

// CUSHIONING FOAM //
router.post("/cushioning/cushioningFoam", cushioningFoam.create);
router.get("/cushioning/cushioningFoam/:id", cushioningFoam.findOne);
router.get("/cushioning/cushioningFoam", cushioningFoam.findAll);
router.put("/cushioning/cushioningFoam/:id", cushioningFoam.update);
router.delete("/cushioning/cushioningFoam/:id", cushioningFoam.delete);

// KRAFT WRAPPING PAPER //
router.post("/cushioning/kraftWrappingPaper", kraftWrappingPaper.create);
router.get("/cushioning/kraftWrappingPaper/:id", kraftWrappingPaper.findOne);
router.get("/cushioning/kraftWrappingPaper", kraftWrappingPaper.findAll);
router.put("/cushioning/kraftWrappingPaper/:id", kraftWrappingPaper.update);
router.delete("/cushioning/kraftWrappingPaper/:id", kraftWrappingPaper.delete);

// MINI AIR SYSTEM //
router.post("/cushioning/miniAirSystem", miniAirSystem.create);
router.get("/cushioning/miniAirSystem/:id", miniAirSystem.findOne);
router.get("/cushioning/miniAirSystem", miniAirSystem.findAll);
router.put("/cushioning/miniAirSystem/:id", miniAirSystem.update);
router.delete("/cushioning/miniAirSystem/:id", miniAirSystem.delete);

// NEWSPRINT WRAPPING PAPER //
router.post("/cushioning/newsprintWrappingPaper", newsprintWrappingPaper.create);
router.get("/cushioning/newsprintWrappingPaper/:id", newsprintWrappingPaper.findOne);
router.get("/cushioning/newsprintWrappingPaper", newsprintWrappingPaper.findAll);
router.put("/cushioning/newsprintWrappingPaper/:id", newsprintWrappingPaper.update);
router.delete("/cushioning/newsprintWrappingPaper/:id", newsprintWrappingPaper.delete);

// PACKING PEANUTS //
router.post("/cushioning/packingPeanuts", packingPeanuts.create);
router.get("/cushioning/packingPeanuts/:id", packingPeanuts.findOne);
router.get("/cushioning/packingPeanuts", packingPeanuts.findAll);
router.put("/cushioning/packingPeanuts/:id", packingPeanuts.update);
router.delete("/cushioning/packingPeanuts/:id", packingPeanuts.delete);

// STANDARD COMPUTER SHIPPING FOAM //
router.post("/cushioning/computerShippingFoam", computerShippingFoam.create);
router.get("/cushioning/computerShippingFoam/:id", computerShippingFoam.findOne);
router.get("/cushioning/computerShippingFoam", computerShippingFoam.findAll);
router.put("/cushioning/computerShippingFoam/:id", computerShippingFoam.update);
router.delete("/cushioning/computerShippingFoam/:id", computerShippingFoam.delete);

// TISSUE WRAPPING PAPER //
router.post("/cushioning/tissueWrappingPaper", tissueWrappingPaper.create);
router.get("/cushioning/tissueWrappingPaper/:id", tissueWrappingPaper.findOne);
router.get("/cushioning/tissueWrappingPaper", tissueWrappingPaper.findAll);
router.put("/cushioning/tissueWrappingPaper/:id", tissueWrappingPaper.update);
router.delete("/cushioning/tissueWrappingPaper/:id", tissueWrappingPaper.delete);

// WRAPPING PAPER DISPENSER //
router.post("/cushioning/wrappingPaperDispenser", wrappingPaperDispenser.create);
router.get("/cushioning/wrappingPaperDispenser/:id", wrappingPaperDispenser.findOne);
router.get("/cushioning/wrappingPaperDispenser", wrappingPaperDispenser.findAll);
router.put("/cushioning/wrappingPaperDispenser/:id", wrappingPaperDispenser.update);
router.delete("/cushioning/wrappingPaperDispenser/:id", wrappingPaperDispenser.delete);

//////////////////////////////// LABELS / ENVELOPES ////////////////////////////////
// CIRCLE MAILING LABELS //
router.post("/labels-envelopes/circleMailingLabels", circleMailingLabels.create);
router.get("/labels-envelopes/circleMailingLabels/:id", circleMailingLabels.findOne);
router.get("/labels-envelopes/circleMailingLabels", circleMailingLabels.findAll);
router.put("/labels-envelopes/circleMailingLabels/:id", circleMailingLabels.update);
router.delete("/labels-envelopes/circleMailingLabels/:id", circleMailingLabels.delete);

// LASER LABELS //
router.post("/labels-envelopes/laserLabels", laserLabels.create);
router.get("/labels-envelopes/laserLabels/:id", laserLabels.findOne);
router.get("/labels-envelopes/laserLabels", laserLabels.findAll);
router.put("/labels-envelopes/laserLabels/:id", laserLabels.update);
router.delete("/labels-envelopes/laserLabels/:id", laserLabels.delete);

// PACKING LIST ENVELOPES //
router.post("/labels-envelopes/packingListEnvelopes", packingListEnvelopes.create);
router.get("/labels-envelopes/packingListEnvelopes/:id", packingListEnvelopes.findOne);
router.get("/labels-envelopes/packingListEnvelopes", packingListEnvelopes.findAll);
router.put("/labels-envelopes/packingListEnvelopes/:id", packingListEnvelopes.update);
router.delete("/labels-envelopes/packingListEnvelopes/:id", packingListEnvelopes.delete);

// SHIPPING & HANDLING LABELS //
router.post("/labels-envelopes/shippingHandlingLabels", shippingHandlingLabels.create);
router.get("/labels-envelopes/shippingHandlingLabels/:id", shippingHandlingLabels.findOne);
router.get("/labels-envelopes/shippingHandlingLabels", shippingHandlingLabels.findAll);
router.put("/labels-envelopes/shippingHandlingLabels/:id", shippingHandlingLabels.update);
router.delete("/labels-envelopes/shippingHandlingLabels/:id", shippingHandlingLabels.delete);

// THERMAL TRANSFER //
router.post("/labels-envelopes/thermalTransfer", thermalTransfer.create);
router.get("/labels-envelopes/thermalTransfer/:id", thermalTransfer.findOne);
router.get("/labels-envelopes/thermalTransfer", thermalTransfer.findAll);
router.put("/labels-envelopes/thermalTransfer/:id", thermalTransfer.update);
router.delete("/labels-envelopes/thermalTransfer/:id", thermalTransfer.delete);

//////////////////////////////// MAILERS ////////////////////////////////
// KRAFT BUBBLE //
router.post("/mailers/kraftBubble", kraftBubble.create);
router.get("/mailers/kraftBubble/:id", kraftBubble.findOne);
router.get("/mailers/kraftBubble", kraftBubble.findAll);
router.put("/mailers/kraftBubble/:id", kraftBubble.update);
router.delete("/mailers/kraftBubble/:id", kraftBubble.delete);

// SHIPPING & HANDLING LABELS //
router.post("/mailers/shippingHandlingLabels", shippingHandlingLabels.create);
router.get("/mailers/shippingHandlingLabels/:id", shippingHandlingLabels.findOne);
router.get("/mailers/shippingHandlingLabels", shippingHandlingLabels.findAll);
router.put("/mailers/shippingHandlingLabels/:id", shippingHandlingLabels.update);
router.delete("/mailers/shippingHandlingLabels/:id", shippingHandlingLabels.delete);

// THERMAL TRANSFER //
router.post("/mailers/thermalTransfer", thermalTransfer.create);
router.get("/mailers/thermalTransfer/:id", thermalTransfer.findOne);
router.get("/mailers/thermalTransfer", thermalTransfer.findAll);
router.put("/mailers/thermalTransfer/:id", thermalTransfer.update);
router.delete("/mailers/thermalTransfer/:id", thermalTransfer.delete);

//////////////////////////////// STRAPPING ////////////////////////////////
// CORRUGATED CORNER PADS //
router.post("/strapping/corrugatedCornerPads", corrugatedCornerPads.create);
router.get("/strapping/corrugatedCornerPads/:id", corrugatedCornerPads.findOne);
router.get("/strapping/corrugatedCornerPads", corrugatedCornerPads.findAll);
router.put("/strapping/corrugatedCornerPads/:id", corrugatedCornerPads.update);
router.delete("/strapping/corrugatedCornerPads/:id", corrugatedCornerPads.delete);

// FOAM CORNER PADS //
router.post("/strapping/foamCornerPads", foamCornerPads.create);
router.get("/strapping/foamCornerPads/:id", foamCornerPads.findOne);
router.get("/strapping/foamCornerPads", foamCornerPads.findAll);
router.put("/strapping/foamCornerPads/:id", foamCornerPads.update);
router.delete("/strapping/foamCornerPads/:id", foamCornerPads.delete);

// POLY STRAPPING //
router.post("/strapping/polyStrapping", polyStrapping.create);
router.get("/strapping/polyStrapping/:id", polyStrapping.findOne);
router.get("/strapping/polyStrapping", polyStrapping.findAll);
router.put("/strapping/polyStrapping/:id", polyStrapping.update);
router.delete("/strapping/polyStrapping/:id", polyStrapping.delete);

// POLY STRAPPING MACHINE //
router.post("/strapping/polyStrappingMachine", polyStrappingMachine.create);
router.get("/strapping/polyStrappingMachine/:id", polyStrappingMachine.findOne);
router.get("/strapping/polyStrappingMachine", polyStrappingMachine.findAll);
router.put("/strapping/polyStrappingMachine/:id", polyStrappingMachine.update);
router.delete("/strapping/polyStrappingMachine/:id", polyStrappingMachine.delete);

// POLY STRAPPING TOOLS //
router.post("/strapping/polyStrappingTools", polyStrappingTools.create);
router.get("/strapping/polyStrappingTools/:id", polyStrappingTools.findOne);
router.get("/strapping/polyStrappingTools", polyStrappingTools.findAll);
router.put("/strapping/polyStrappingTools/:id", polyStrappingTools.update);
router.delete("/strapping/polyStrappingTools/:id", polyStrappingTools.delete);

// STEEL STRAPPING //
router.post("/strapping/steelStrapping", steelStrapping.create);
router.get("/strapping/steelStrapping/:id", steelStrapping.findOne);
router.get("/strapping/steelStrapping", steelStrapping.findAll);
router.put("/strapping/steelStrapping/:id", steelStrapping.update);
router.delete("/strapping/steelStrapping/:id", steelStrapping.delete);

// V BOARDS //
router.post("/strapping/vBoards", vBoards.create);
router.get("/strapping/vBoards/:id", vBoards.findOne);
router.get("/strapping/vBoards", vBoards.findAll);
router.put("/strapping/vBoards/:id", vBoards.update);
router.delete("/strapping/vBoards/:id", vBoards.delete);

//////////////////////////////// STRETCH FILM ////////////////////////////////
// HAND STRETCH WRAP //
router.post("/stretch-film/handStretchWrap", handStretchWrap.create);
router.get("/stretch-film/handStretchWrap/:id", handStretchWrap.findOne);
router.get("/stretch-film/handStretchWrap", handStretchWrap.findAll);
router.put("/stretch-film/handStretchWrap/:id", handStretchWrap.update);
router.delete("/stretch-film/handStretchWrap/:id", handStretchWrap.delete);

// MACHINE STRETCH WRAP //
router.post("/stretch-film/machineStretchWrap", machineStretchWrap.create);
router.get("/stretch-film/machineStretchWrap/:id", machineStretchWrap.findOne);
router.get("/stretch-film/machineStretchWrap", machineStretchWrap.findAll);
router.put("/stretch-film/machineStretchWrap/:id", machineStretchWrap.update);
router.delete("/stretch-film/machineStretchWrap/:id", machineStretchWrap.delete);

// OPAQUE STRETCH WRAP //
router.post("/stretch-film/opaqueStretchWrap", opaqueStretchWrap.create);
router.get("/stretch-film/opaqueStretchWrap/:id", opaqueStretchWrap.findOne);
router.get("/stretch-film/opaqueStretchWrap", opaqueStretchWrap.findAll);
router.put("/stretch-film/opaqueStretchWrap/:id", opaqueStretchWrap.update);
router.delete("/stretch-film/opaqueStretchWrap/:id", opaqueStretchWrap.delete);

// STRETCH WRAP DISPENSER //
router.post("/stretch-film/stretchWrapDispenser", stretchWrapDispenser.create);
router.get("/stretch-film/stretchWrapDispenser/:id", stretchWrapDispenser.findOne);
router.get("/stretch-film/stretchWrapDispenser", stretchWrapDispenser.findAll);
router.put("/stretch-film/stretchWrapDispenser/:id", stretchWrapDispenser.update);
router.delete("/stretch-film/stretchWrapDispenser/:id", stretchWrapDispenser.delete);

// STRETCH WRAP MACHINERY //
router.post("/stretch-film/stretchWrapMachinery", stretchWrapMachinery.create);
router.get("/stretch-film/stretchWrapMachinery/:id", stretchWrapMachinery.findOne);
router.get("/stretch-film/stretchWrapMachinery", stretchWrapMachinery.findAll);
router.put("/stretch-film/stretchWrapMachinery/:id", stretchWrapMachinery.update);
router.delete("/stretch-film/stretchWrapMachinery/:id", stretchWrapMachinery.delete);

// SHRINK WRAP ROLL //
router.post("/stretch-film/shrinkWrapRoll", shrinkWrapRoll.create);
router.get("/stretch-film/shrinkWrapRoll/:id", shrinkWrapRoll.findOne);
router.get("/stretch-film/shrinkWrapRoll", shrinkWrapRoll.findAll);
router.put("/stretch-film/shrinkWrapRoll/:id", shrinkWrapRoll.update);
router.delete("/stretch-film/shrinkWrapRoll/:id", shrinkWrapRoll.delete);

// SHRINK WRAP SYSTEM //
router.post("/stretch-film/shrinkWrapSystem", shrinkWrapSystem.create);
router.get("/stretch-film/shrinkWrapSystem/:id", shrinkWrapSystem.findOne);
router.get("/stretch-film/shrinkWrapSystem", shrinkWrapSystem.findAll);
router.put("/stretch-film/shrinkWrapSystem/:id", shrinkWrapSystem.update);
router.delete("/stretch-film/shrinkWrapSystem/:id", shrinkWrapSystem.delete);


//////////////////////////////// TAPE ////////////////////////////////
// CARTON SEALING TAPE //
router.post("/tape/cartonSealingTape", cartonSealingTape.create);
router.get("/tape/cartonSealingTape/:id", cartonSealingTape.findOne);
router.get("/tape/cartonSealingTape", cartonSealingTape.findAll);
router.put("/tape/cartonSealingTape/:id", cartonSealingTape.update);
router.delete("/tape/cartonSealingTape/:id", cartonSealingTape.delete);

// COLORED TAPE //
router.post("/tape/coloredTape", coloredTape.create);
router.get("/tape/coloredTape/:id", coloredTape.findOne);
router.get("/tape/coloredTape", coloredTape.findAll);
router.put("/tape/coloredTape/:id", coloredTape.update);
router.delete("/tape/coloredTape/:id", coloredTape.delete);

// CUSTOM PRINT TAPE //
router.post("/tape/customPrintTape", customPrintTape.create);
router.get("/tape/customPrintTape/:id", customPrintTape.findOne);
router.get("/tape/customPrintTape", customPrintTape.findAll);
router.put("/tape/customPrintTape/:id", customPrintTape.update);
router.delete("/tape/customPrintTape/:id", customPrintTape.delete);

// FILAMENT TAPE //
router.post("/tape/filamentTape", filamentTape.create);
router.get("/tape/filamentTape/:id", filamentTape.findOne);
router.get("/tape/filamentTape", filamentTape.findAll);
router.put("/tape/filamentTape/:id", filamentTape.update);
router.delete("/tape/filamentTape/:id", filamentTape.delete);

// MASKING TAPE //
router.post("/tape/maskingTape", maskingTape.create);
router.get("/tape/maskingTape/:id", maskingTape.findOne);
router.get("/tape/maskingTape", maskingTape.findAll);
router.put("/tape/maskingTape/:id", maskingTape.update);
router.delete("/tape/maskingTape/:id", maskingTape.delete);

// OFFICE TAPE & DISPENSER //
router.post("/tape/officeTapeDispenser", officeTapeDispenser.create);
router.get("/tape/officeTapeDispenser/:id", officeTapeDispenser.findOne);
router.get("/tape/officeTapeDispenser", officeTapeDispenser.findAll);
router.put("/tape/officeTapeDispenser/:id", officeTapeDispenser.update);
router.delete("/tape/officeTapeDispenser/:id", officeTapeDispenser.delete);

// TAPE DISPENSER //
router.post("/tape/tapeDispenser", tapeDispenser.create);
router.get("/tape/tapeDispenser/:id", tapeDispenser.findOne);
router.get("/tape/tapeDispenser", tapeDispenser.findAll);
router.put("/tape/tapeDispenser/:id", tapeDispenser.update);
router.delete("/tape/tapeDispenser/:id", tapeDispenser.delete);

// VINYL TAPE //
router.post("/tape/vinylTape", vinylTape.create);
router.get("/tape/vinylTape/:id", vinylTape.findOne);
router.get("/tape/vinylTape", vinylTape.findAll);
router.put("/tape/vinylTape/:id", vinylTape.update);
router.delete("/tape/vinylTape/:id", vinylTape.delete);

// WATER-ACTIVATED GUMMED TAPE //
router.post("/tape/waterActivatedGummedTape", waterActivatedGummedTape.create);
router.get("/tape/waterActivatedGummedTape/:id", waterActivatedGummedTape.findOne);
router.get("/tape/waterActivatedGummedTape", waterActivatedGummedTape.findAll);
router.put("/tape/waterActivatedGummedTape/:id", waterActivatedGummedTape.update);
router.delete("/tape/waterActivatedGummedTape/:id", waterActivatedGummedTape.delete);


//////////////////////////////// TOOLS & MACHINES ////////////////////////////////
// AIR PILLOW MACHINE //
router.post("/tools-machines/airPillowMachine", airPillowMachine.create);
router.get("/tools-machines/airPillowMachine/:id", airPillowMachine.findOne);
router.get("/tools-machines/airPillowMachine", airPillowMachine.findAll);
router.put("/tools-machines/airPillowMachine/:id", airPillowMachine.update);
router.delete("/tools-machines/airPillowMachine/:id", airPillowMachine.delete);

// BOX STAPLER //
router.post("/tools-machines/boxStapler", boxStapler.create);
router.get("/tools-machines/boxStapler/:id", boxStapler.findOne);
router.get("/tools-machines/boxStapler", boxStapler.findAll);
router.put("/tools-machines/boxStapler/:id", boxStapler.update);
router.delete("/tools-machines/boxStapler/:id", boxStapler.delete);

// BUBBLE WRAP DISPENSER //
router.post("/tools-machines/bubbleWrapDispenser", bubbleWrapDispenser.create);
router.get("/tools-machines/bubbleWrapDispenser/:id", bubbleWrapDispenser.findOne);
router.get("/tools-machines/bubbleWrapDispenser", bubbleWrapDispenser.findAll);
router.put("/tools-machines/bubbleWrapDispenser/:id", bubbleWrapDispenser.update);
router.delete("/tools-machines/bubbleWrapDispenser/:id", bubbleWrapDispenser.delete);

// GLUE GUN //
router.post("/tools-machines/glueGun", glueGun.create);
router.get("/tools-machines/glueGun/:id", glueGun.findOne);
router.get("/tools-machines/glueGun", glueGun.findAll);
router.put("/tools-machines/glueGun/:id", glueGun.update);
router.delete("/tools-machines/glueGun/:id", glueGun.delete);

// POLY BAG SEALER //
router.post("/tools-machines/polyBagSealer", polyBagSealer.create);
router.get("/tools-machines/polyBagSealer/:id", polyBagSealer.findOne);
router.get("/tools-machines/polyBagSealer", polyBagSealer.findAll);
router.put("/tools-machines/polyBagSealer/:id", polyBagSealer.update);
router.delete("/tools-machines/polyBagSealer/:id", polyBagSealer.delete);

// NEWSPRINT WRAPPING PAPER //
router.post("/tools-machines/newsprintWrappingPaper", newsprintWrappingPaper.create);
router.get("/tools-machines/newsprintWrappingPaper/:id", newsprintWrappingPaper.findOne);
router.get("/tools-machines/newsprintWrappingPaper", newsprintWrappingPaper.findAll);
router.put("/tools-machines/newsprintWrappingPaper/:id", newsprintWrappingPaper.update);
router.delete("/tools-machines/newsprintWrappingPaper/:id", newsprintWrappingPaper.delete);

// PACKING PEANUTS //
router.post("/tools-machines/packingPeanuts", packingPeanuts.create);
router.get("/tools-machines/packingPeanuts/:id", packingPeanuts.findOne);
router.get("/tools-machines/packingPeanuts", packingPeanuts.findAll);
router.put("/tools-machines/packingPeanuts/:id", packingPeanuts.update);
router.delete("/tools-machines/packingPeanuts/:id", packingPeanuts.delete);

// STANDARD COMPUTER SHIPPING FOAM //
router.post("/tools-machines/computerShippingFoam", computerShippingFoam.create);
router.get("/tools-machines/computerShippingFoam/:id", computerShippingFoam.findOne);
router.get("/tools-machines/computerShippingFoam", computerShippingFoam.findAll);
router.put("/tools-machines/computerShippingFoam/:id", computerShippingFoam.update);
router.delete("/tools-machines/computerShippingFoam/:id", computerShippingFoam.delete);

// TISSUE WRAPPING PAPER //
router.post("/tools-machines/tissueWrappingPaper", tissueWrappingPaper.create);
router.get("/tools-machines/tissueWrappingPaper/:id", tissueWrappingPaper.findOne);
router.get("/tools-machines/tissueWrappingPaper", tissueWrappingPaper.findAll);
router.put("/tools-machines/tissueWrappingPaper/:id", tissueWrappingPaper.update);
router.delete("/tools-machines/tissueWrappingPaper/:id", tissueWrappingPaper.delete);

// WRAPPING PAPER DISPENSER //
router.post("/tools-machines/wrappingPaperDispenser", wrappingPaperDispenser.create);
router.get("/tools-machines/wrappingPaperDispenser/:id", wrappingPaperDispenser.findOne);
router.get("/tools-machines/wrappingPaperDispenser", wrappingPaperDispenser.findAll);
router.put("/tools-machines/wrappingPaperDispenser/:id", wrappingPaperDispenser.update);
router.delete("/tools-machines/wrappingPaperDispenser/:id", wrappingPaperDispenser.delete);

//////////////////////////////// MISCELLANEOUS ////////////////////////////////
// CABLE TIES //
router.post("/misc/cableTies", cableTies.create);
router.get("/misc/cableTies/:id", cableTies.findOne);
router.get("/misc/cableTies", cableTies.findAll);
router.put("/misc/cableTies/:id", cableTies.update);
router.delete("/misc/cableTies/:id", cableTies.delete);

// DOCK BOARD //
router.post("/misc/dockBoard", dockBoard.create);
router.get("/misc/dockBoard/:id", dockBoard.findOne);
router.get("/misc/dockBoard", dockBoard.findAll);
router.put("/misc/dockBoard/:id", dockBoard.update);
router.delete("/misc/dockBoard/:id", dockBoard.delete);

// GLOVES & MASKS //
router.post("/misc/glovesMasks", glovesMasks.create);
router.get("/misc/glovesMasks/:id", glovesMasks.findOne);
router.get("/misc/glovesMasks", glovesMasks.findAll);
router.put("/misc/glovesMasks/:id", glovesMasks.update);
router.delete("/misc/glovesMasks/:id", glovesMasks.delete);

// METAL TRUCK SEAL //
router.post("/misc/metalTruckSeal", metalTruckSeal.create);
router.get("/misc/metalTruckSeal/:id", metalTruckSeal.findOne);
router.get("/misc/metalTruckSeal", metalTruckSeal.findAll);
router.put("/misc/metalTruckSeal/:id", metalTruckSeal.update);
router.delete("/misc/metalTruckSeal/:id", metalTruckSeal.delete);

// SHIPPING SCALES //
router.post("/misc/shippingScales", shippingScales.create);
router.get("/misc/shippingScales/:id", shippingScales.findOne);
router.get("/misc/shippingScales", shippingScales.findAll);
router.put("/misc/shippingScales/:id", shippingScales.update);
router.delete("/misc/shippingScales/:id", shippingScales.delete);

// TWIST TIES //
router.post("/misc/twistTies", twistTies.create);
router.get("/misc/twistTies/:id", twistTies.findOne);
router.get("/misc/twistTies", twistTies.findAll);
router.put("/misc/twistTies/:id", twistTies.update);
router.delete("/misc/twistTies/:id", twistTies.delete);
