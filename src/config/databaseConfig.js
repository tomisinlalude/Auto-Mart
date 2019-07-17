/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const config = () => {
  const env = process.env.NODE_ENV;

  if (env === 'dev') {
    return {
      database: process.env.DEV_DB,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USERNAME,
      host: process.env.DB_PORT,
      port: 5432,
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

const pool = new pg.Pool({
  connectionString,
});

pool.on('connect', () => {
  console.log('connected to the Database');
});

export default pool;
