/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import express from 'express';
import dotenv from 'dotenv';

import authRouter from './AuthRoutes';
import carRouter from './carRoutes';
import orderRouter from './OrderRoutes';
import uploadRouter from './UploadRoutes';

dotenv.config();
const router = express.Router();

router.use('/auth', authRouter);
router.use('/car', carRouter);
router.use('/order', orderRouter);
router.use('/uploads', uploadRouter);

export default router;
