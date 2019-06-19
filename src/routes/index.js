/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import express from 'express';
import dotenv from 'dotenv';

import authRouter from './AuthRoutes';
// import carRouter from './CarRoutes';
// import orderRouter from './OrderRoutes';
// import uploadRouter from './UploadRoutes';

dotenv.config();
const router = express.Router();

router.use('/auth', authRouter);

export default router;
