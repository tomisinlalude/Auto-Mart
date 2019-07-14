/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import { cloudinaryConfig } from './config/cloudinaryConfig';

import router from './routes';

const app = express();
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
app.get('/', (req, res) => {
  res.json('Hello, welcome to AutoMart');
});

app.use('/api/v1/user', UserRoute);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);

export default app;
