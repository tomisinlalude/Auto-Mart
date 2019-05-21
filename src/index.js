import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import UserData from '../src/database/seeders/user-seed';
import UserRoute from '../src/routes/user-route';

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

app.use('/users', UserData);
app.use('/user', UserRoute);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});

export default app;



