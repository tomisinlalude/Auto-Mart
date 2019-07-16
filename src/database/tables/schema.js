/* eslint-disable linebreak-style */

import debug from 'debug';

import authTable from './authTable';
import carTable from './carTable';
import orderTable from './orderTable';
import Client from '../../config/databaseConfig';

const schema = async () => {
  try {
    await Client.query(authTable);
    await Client.query(carTable);
    await Client.query(orderTable);
  } catch (err) {
    if (err) debug(err);
  }
};

export default schema();
