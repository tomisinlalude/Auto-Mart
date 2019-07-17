/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */

import pool from '../../config/databaseConfig';

/**
 * Perform CRUD operations on database
 */

class authModel {
  async checkEmail(email) {
    const query = {
      text: 'SELECT * FROM Users ORDER BY id ASC;',
      values: [email],
    };
    const { rows } = await pool.query(query);
    return rows[0];
  }

  async createUser(first_name, last_name, email, passwordHash, address) {
    const query = {
      text: `INSERT INTO Users
                (first_name, last_name, email, password, confirm_password, address)
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING id, firstName, lastName, email;`,
      values: [first_name, last_name, email, passwordHash, address],
    };

    const { rows } = await pool.query(query);
    return rows[0];
  }

  async resetPassword(user_id, passwordHash) {
    const query = {
      text: `UPDATE users SET password_hash = $2
            WHERE user_id = $1; `,
      values: [user_id, passwordHash],
    };
    const { rows } = await pool.query(query);
    return rows;
  }
}

export default authModel;
