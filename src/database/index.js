/* eslint-disable linebreak-style */
import { Pool } from 'pg';
import dotenv from 'dotenv';
import debug from 'debug';

dotenv.config();

let connection;

if (process.env.ENV_TEST) {
  connection = process.env.DATABASE_URL_TEST;
} else {
  connection = process.env.DATABASE_URL;
}

const pool = new Pool({ connection });
const baseUrl = process.env.BASE_URL;

debug.info(`Connected database: ${connection.replace(`${baseUrl}`, '')}`);

export default {
  query(text, values) {
    return new Promise((resolve, reject) => {
      pool.query(text, values)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
};
