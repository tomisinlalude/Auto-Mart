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
      text: 'SELECT * FROM userDb ORDER BY id ASC;',
      values: [email],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createUser(firstName, lastName, email, password, confirmPassword, phoneNumber, address) {
    const query = {
      text: `INSERT INTO users
                (firstName, lastName, email, password, confirmPassword, phoneNumber, address)
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING id, firstName, lastName, email;`,
      values: [firstName, lastName, email, password, confirmPassword, phoneNumber, address],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }
}

export default authModel;
