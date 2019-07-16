/* eslint-disable linebreak-style */

const carTable = `
  CREATE TABLE IF NOT EXISTS Cars(
    car_id SERIAL PRIMARY KEY,
    owner INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    state VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    price INTEGER NOT NULL,
    manufacturer VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    body_type VARCHAR(20) NOT NULL
    image_url VARCHAR(200) NOT NULL,
    created_on DATE DEFAULT NOW()
  );
`;

const dropCarTable = 'DROP TABLE IF EXISTS Cars CASCADE;';

export { carTable, dropCarTable };
