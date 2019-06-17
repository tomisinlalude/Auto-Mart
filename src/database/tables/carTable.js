/* eslint-disable linebreak-style */

const carTable = `
  CREATE TABLE IF NOT EXISTS cars(
    carId SERIAL PRIMARY KEY,
    owner VARCHAR NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    make VARCHAR NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    bodyType VARCHAR NOT NULL
  );
`;

export default carTable;
