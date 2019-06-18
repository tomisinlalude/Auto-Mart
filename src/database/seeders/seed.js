/* eslint-disable linebreak-style */

import debug from 'debug';

import auth from './authTable';
import car from './carTable';
import order from './orderTable';
import pool from '../index';

const seed = async () => {
  try {
    await pool.query(auth.authTable);
    await pool.query(car.carTable);
    await pool.query(order.orderTable);
  } catch (err) {
    debug(err);
  }
};

export default seed();
