import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import UserRoute from './routes/UserRoute';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(cors({
    credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(morgan('dev'));

app.use('api/v1/user', UserRoute);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});

export default app;