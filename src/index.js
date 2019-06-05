/* eslint-disable linebreak-style */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import UserRoute from './routes/route';

const app = express();
dotenv.config();

app.use(cors({
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(morgan('dev'));

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
