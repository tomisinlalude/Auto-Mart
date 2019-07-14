/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import client from '../../config/databaseConfig';

class flagModel {
  async checkReporter(first_name, last_name) {
    const query = {
      text: 'SELECT * FROM userDb ORDER BY id ASC;',
      values: [first_name, last_name],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createFlag(car_id, reason, description, reporter) {
    const query = {
      text: `INSERT INTO flagDb
            (car_id, reason, description, reporter)
            VALUES ($1, $2, $3, $4)
            RETURNING *;`,
      values: [car_id, reason, description, reporter],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }
}

export default flagModel;
