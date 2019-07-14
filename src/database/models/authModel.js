/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line no-unused-vars

import client from '../../config/databaseConfig';

/**
 * Perform CRUD operations on database
 */

class authModel {
  async checkAll(email) {
    const query = {
      text: 'SELECT * FROM Users ORDER BY id ASC;',
      values: [email],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createUser(first_name, last_name, email, password, confirm_password, address) {
    const query = {
      text: `INSERT INTO Users
                (first_name, last_name, email, password, confirm_password, address)
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING id, firstName, lastName, email;`,
      values: [first_name, last_name, email, password, confirm_password, address],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }
}

export default authModel;
