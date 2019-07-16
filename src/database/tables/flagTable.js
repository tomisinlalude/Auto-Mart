/* eslint-disable linebreak-style */
const flagTable = `
  CREATE TABLE IF NOT EXISTS Users(
    flag_id SERIAL PRIMARY KEY,
    car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE NOT NULL,
    reason VARCHAR(110) NOT NULL,
    description TEXT,
    reported_by INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    created_on DATE DEFAULT NOW()
  );
`;

const dropFlagTable = 'DROP TABLE IF EXISTS Users CASCADE;';

export { flagTable, dropFlagTable };
