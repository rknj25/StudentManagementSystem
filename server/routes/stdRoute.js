import express from 'express';
import { addStd, deleteStd, getStd, getSWI, updStd } from '../controllers/stuAuth.js';

const router=express.Router();

router.post('/add',addStd);
router.get('/get',getStd);
router.delete('/del/:id',deleteStd)
router.get('/fnd/:id',getSWI);
router.put('/upd/:id',updStd)

export default router;