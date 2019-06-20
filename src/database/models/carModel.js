/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import client from '../../config/databaseConfig';

class carModel {
  constructor(carTable) {
    this.table = carTable;
  }

  async checkOwner(firstName, lastName) {
    const query = {
      text: 'SELECT * FROM userDb ORDER BY id ASC;',
      values: [firstName, lastName],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createAd(owner, state, status, price, make, manufacturer, model, bodyType, imageUrl) {
    const query = {
      text: `INSERT INTO cars
            (owner, state, status, price, manufacturer, model, bodyType, imageUrl)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;`,
      values: [owner, state, status, price, make, manufacturer, model, bodyType, imageUrl],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async selectSpecificCar(carId) {
    const query = {
      text: 'SELECT * FROM cars WHERE carId=$1;',
      values: [carId],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async updateCarPrice(carId, owner, newPrice) {
    const query = {
      text: 'UPDATE cars SET newPrice = $3 WHERE carId = $1 AND owner=$2 RETURNING *;',
      values: [carId, owner, newPrice],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async unsoldCarsOnly() {
    const query = {
      text: 'SELECT * FROM carDb WHERE status=$3;',
      values: ['available'],
    };
    const { rows } = await client.query(query);
    return rows;
  }

  async unsoldCarsPriceRange() {
    const query = {
      text: 'SELECT * FROM carDb WHERE price=$4 AND price>=minPrice AND price<=maxPrice;',
    };
    const { rows } = await client.query(query);
    return rows;
  }

  async allCars() {
    const query = 'SELECT * FROM cars;';
    const { rows } = await client.query(query);
    return rows;
  }

  async markAdAsSold(carId, owner) {
    const query = {
      text: ' UPDATE cars SET status = $3 WHERE carId = $1 AND owner = $2 RETURNING *;',
      values: [carId, owner, 'sold'],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async deleteAd(carId) {
    const query = {
      text: 'DELETE FROM cars WHERE carId=$1;',
      values: [carId],
    };
    await client.query(query);
  }
}

export default carModel;
