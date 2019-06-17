/* eslint-disable linebreak-style */
const userTable = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    token VARCHAR NOT NULL,
    firstName VARCHAR (50) NOT NULL,
    lastName VARCHAR (50) NOT NULL,
    email VARCHAR (254) UNIQUE NOT NULL,
    phoneNumber VARCHAR (15) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    is_admin BOOLEAN
  );
`;

const dropUserTable = 'DROP TABLE IF EXISTS user CASCADE;';

export { userTable, dropUserTable };
