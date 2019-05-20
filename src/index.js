import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import user from '../src/database/user';

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

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});

app.get('/', (req, res) => {
    res.status(200).send ({
        success: 'true',
        message: 'database compiled successfully',
        user: user
    })
});

export default app;



