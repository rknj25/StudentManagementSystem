import express from 'express';
import { login, register } from '../controllers/userAuth.js';

const router=express.Router();

router.post('/reg',register);
router.post('/log',login)

export default router;