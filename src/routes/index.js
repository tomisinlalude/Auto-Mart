/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import express from 'express';
import dotenv from 'dotenv';

import orderRouter from './OrderRoutes';
import uploadRouter from './UploadRoutes';

dotenv.config();
const router = express.Router();

router.use('/order', orderRouter);
router.use('/uploads', uploadRouter);

export default router;
