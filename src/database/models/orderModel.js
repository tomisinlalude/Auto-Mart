/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import pool from '../index';

class orderModel {
  constructor(orderTable) {
    this.table = orderTable;
  }

  async createOrder(buyer, carId, price, priceOffered) {
    const query = {
      text: `INSERT INTO orders 
            (buyer, carId, price, priceOffered)
            VALUES ($1, $2, $3, $4)
            RETURNING *;`,
      values: [buyer, carId, price, priceOffered],
    };

    const { rows } = await pool.query(query);
    return rows[0];
  }

  async updateOrderPrice(orderId, newPriceOffered) {
    const query = {
      text: ` UPDATE orders SET priceOffered = $2
                    WHERE orderId  = $1
                    RETURNING * ;`,
      values: [orderId, newPriceOffered],
    };

    const { rows } = await pool.query(query);
    return rows[0];
  }
}

export default orderModel;
