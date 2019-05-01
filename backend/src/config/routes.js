import express from 'express';

import antiStaticBags from '../api/controllers/bagsController/antiStaticBags.controller';

export const router = express.Router();

//////////////////////////////// BAGS ////////////////////////////////
//ANTI STATIC BAG//
router.get('/bags/antiStaticBags', antiStaticBags.findAll);
router.post('/bags/antiStaticBags', antiStaticBags.create);
