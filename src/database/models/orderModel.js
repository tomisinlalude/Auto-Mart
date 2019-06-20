/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import client from '../../config/databaseConfig';

class orderModel {
  constructor(orderTable) {
    this.table = orderTable;
  }

  async checkBuyer(firstName, lastName) {
    const query = {
      text: 'SELECT * FROM userDb ORDER BY id ASC;',
      values: [firstName, lastName],
    };
    const { rows } = await client.query(query);
    return rows[0];
  }

  async createOrder(buyer, carId, price, priceOffered) {
    const query = {
      text: `INSERT INTO orders 
            (buyer, carId, price, priceOffered)
            VALUES ($1, $2, $3, $4)
            RETURNING *;`,
      values: [buyer, carId, price, priceOffered],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }

  async updateOrderPrice(orderId, newPriceOffered) {
    const query = {
      text: ` UPDATE orders SET priceOffered = $2
                    WHERE orderId  = $1
                    RETURNING * ;`,
      values: [orderId, newPriceOffered],
    };

    const { rows } = await client.query(query);
    return rows[0];
  }
}

export default orderModel;
