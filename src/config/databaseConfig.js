/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const connectionString = process.env.DB_URL;

const config = () => {
  const env = process.env.NODE_ENV;

  if (env === 'dev') {
    return {
      DATABASE: process.env.DEV_DB,
      DATABASE_PASSWORD: process.env.DB_PASSWORD,
      DATABASE_USERNAME: process.env.DB_USERNAME,
      PORT: process.env.PORT,
      ENV: 'development',
    };
  }

  if (env === 'prod') {
    return {
      DATABASE: process.env.PROD_DB,
      DATABASE_PASSWORD: process.env.DB_PASSWORD,
      DATABASE_USERNAME: process.env.DB_USERNAME,
      PORT: process.env.PORT,
      ENV: 'production',
    };
  }

  if (env === 'test') {
    return {
      DATABASE: process.env.TEST_DB,
      DATABASE_PASSWORD: process.env.DB_PASSWORD,
      DATABASE_USERNAME: process.env.DB_USERNAME,
      PORT: process.env.PORT,
      ENV: 'test',
    };
  }
};

const client = new Client({
  connectionString,
});

client.connect();

export default client;
