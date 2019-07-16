/* eslint-disable linebreak-style */
const authTable = `
  CREATE TABLE IF NOT EXISTS Users(
    user_id SERIAL PRIMARY KEY,
    token VARCHAR NOT NULL,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    email VARCHAR (254) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    is_admin BOOLEAN
  );
`;

const dropAuthTable = 'DROP TABLE IF EXISTS Users CASCADE;';

export { authTable, dropAuthTable };
