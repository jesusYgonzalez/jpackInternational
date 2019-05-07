import express from 'express';

import antiStaticBags from '../api/controllers/bagsController/antiStaticBags.controller';
import bubblePouches from '../api/controllers/bagsController/bubblePouches.controller';

export const router = express.Router();

//////////////////////////////// BAGS ////////////////////////////////
//ANTI STATIC BAG//
router.post('/bags/antiStaticBags', antiStaticBags.create);
router.get('/bags/antiStaticBags/:id', antiStaticBags.findOne);
router.get('/bags/antiStaticBags', antiStaticBags.findAll);
router.put('/bags/antiStaticBags/:id', antiStaticBags.update);
router.delete('/bags/antiStaticBags/:id', antiStaticBags.delete);

// BUBBLE POUCHES //
router.post('/bags/bubblePouches', bubblePouches.create);
router.get('/bags/bubblePouches/:id', bubblePouches.findOne);
router.get('/bags/bubblePouches', bubblePouches.findAll);
router.put('/bags/bubblePouches/:id', bubblePouches.update);
router.delete('/bags/bubblePouches/:id', bubblePouches.delete);

//CLEAR POLY BAGS //
// router.post('/bags/clearPolyBags', clearPolyBags.create);
// router.get('/bags/clearPolyBags/:id', clearPolyBags.findOne);
// router.get('/bags/clearPolyBags', clearPolyBags.findAll);
// router.put('/bags/clearPolyBags/:id', clearPolyBags.update);
// router.delete('/bags/clearPolyBags/:id', clearPolyBags.delete);
