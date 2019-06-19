/* eslint-disable linebreak-style */

import debug from 'debug';

import authTable from './authTable';
import carTable from './carTable';
import orderTable from './orderTable';
import pool from '../index';

const schema = async () => {
  try {
    await pool.query(authTable);
    await pool.query(carTable);
    await pool.query(orderTable);
  } catch (err) {
    if (err) debug(err);
  }
};

export default schema();
