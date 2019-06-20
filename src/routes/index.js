/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */

import express from 'express';
import dotenv from 'dotenv';

import authRouter from './AuthRoutes';
// import carRouter from './CarRoutes';
// import flagRouter from './FlagRoutes';
// import orderRouter from './OrderRoutes';

dotenv.config();
const router = express.Router();

router.use('/auth', authRouter);
// router.use('/car', carRouter);
// router.use('/flag', flagRouter);
// router.use('/order', orderRouter);

export default router;
