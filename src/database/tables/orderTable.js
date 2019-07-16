/* eslint-disable linebreak-style */
const orderTable = `CREATE TABLE IF NOT EXISTS Orders(
  order_id SERIAL,
    buyer_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE NOT NULL,
    price_offered INTEGER NOT NULL,
    price INTEGER NOT NULL,
    status VARCHAR(10) DEFAULT 'pending',
    created_on DATE DEFAULT NOW()
);
`;

const dropOrderTable = 'DROP TABLE IF EXISTS Orders CASCADE;';

export { orderTable, dropOrderTable };
