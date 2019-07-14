/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import client from '../../config/databaseConfig';

class carModel {
  constructor(carTable) {
    this.table = carTable;
  }

  async checkOwner(first_name, last_name) {
    const query = {
      text: 'SELECT * FROM Users ORDER BY id ASC;',
      values: [first_name, last_name],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createAd(owner, state, price, manufacturer, model, body_type, image_url) {
    const query = {
      text: `INSERT INTO Cars
            (owner, state, status, price, manufacturer, model, body_type, image_url)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;`,
      values: [owner, state, price, manufacturer, model, body_type, image_url],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async selectSpecificCar(car_id) {
    const query = {
      text: 'SELECT * FROM Cars WHERE carId=$1;',
      values: [car_id],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async updateCarPrice(car_id, owner, new_price) {
    const query = {
      text: 'UPDATE Cars SET newPrice = $3 WHERE carId = $1 AND owner=$2 RETURNING *;',
      values: [car_id, owner, new_price],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async unsoldCarsOnly() {
    const query = {
      text: 'SELECT * FROM Cars WHERE status=$3;',
      values: ['available'],
    };
    const { rows } = await client.query(query);
    return rows;
  }

  async unsoldCarsPriceRange() {
    const query = {
      text: 'SELECT * FROM Cars WHERE price=$4 AND price>=min_price AND price<=max_price;',
    };
    const { rows } = await client.query(query);
    return rows;
  }

  async allCars() {
    const query = 'SELECT * FROM Cars;';
    const { rows } = await client.query(query);
    return rows;
  }

  async markAdAsSold(car_id, owner) {
    const query = {
      text: ' UPDATE Cars SET status = $3 WHERE carId = $1 AND owner = $2 RETURNING *;',
      values: [car_id, owner, 'sold'],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async deleteAd(car_id) {
    const query = {
      text: 'DELETE FROM Cars WHERE carId=$1;',
      values: [car_id],
    };
    await client.query(query);
  }
}

export default carModel;
