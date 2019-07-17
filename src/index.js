/* eslint-disable linebreak-style */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import { cloudinaryConfig } from './config/cloudinaryConfig';

import router from './routes';

const app = express();
const port = process.env.PORT || 3300;
dotenv.config();

app.use(cors({
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(logger('dev'));

app.use('/', cloudinaryConfig);
app.use('/api/v1/', router);

app.listen(port, () => console.log(`server running on port ${port}`));

export default app;
