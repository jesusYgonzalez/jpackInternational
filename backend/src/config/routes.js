import express from 'express';

import antiStaticBags from '../api/controllers/bagsController/antiStaticBags.controller';

export const router = express.Router();

//////////////////////////////// BAGS ////////////////////////////////
//ANTI STATIC BAG//
router.post('/bags/antiStaticBags', antiStaticBags.create);
router.get('/bags/antiStaticBags/:id', antiStaticBags.findOne);
router.get('/bags/antiStaticBags', antiStaticBags.findAll);
router.put('/bags/antiStaticBags/:id', antiStaticBags.update);
router.delete('/bags/antiStaticBags/:id', antiStaticBags.delete);
