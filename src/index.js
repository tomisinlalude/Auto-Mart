import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import user from '/database/user';

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

app.listen(port, () => {
    console.log(`server running on port ${PORT}`)
});

app.get('api/v1/user', (req, res) => {
    res.status(200).send ({
        success: 'true',
        message: 'database compiled successfully',
        user: user
    })
});

export default app;



