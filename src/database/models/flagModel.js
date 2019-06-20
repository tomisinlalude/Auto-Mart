/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import client from '../../config/databaseConfig';

class flagModel {
  async checkReporter(firstName, lastName) {
    const query = {
      text: 'SELECT * FROM userDb ORDER BY id ASC;',
      values: [firstName, lastName],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createFlag(carId, reason, description, reporter) {
    const query = {
      text: `INSERT INTO flagDb
            (carId, reason, description, reporter)
            VALUES ($1, $2, $3, $4)
            RETURNING *;`,
      values: [carId, reason, description, reporter],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }
}

export default flagModel;
