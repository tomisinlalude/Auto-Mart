/* eslint-disable linebreak-style */

const carTable = `
  CREATE TABLE IF NOT EXISTS Cars(
    car_id SERIAL PRIMARY KEY,
    owner VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    body_type VARCHAR NOT NULL
  );
`;

const dropCarTable = 'DROP TABLE IF EXISTS Cars CASCADE;';

export { carTable, dropCarTable };
