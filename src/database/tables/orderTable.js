/* eslint-disable linebreak-style */
const orderTable = `CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  buyer VARCHAR NOT NULL,
  carId INTEGER REFERENCES car (id),
  createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR NOT NULL,
  priceOffered NUMERIC NOT NULL
);
`;

export default orderTable;
