/* eslint-disable linebreak-style */
const authTable = `
  CREATE TABLE IF NOT EXISTS Users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(254) UNIQUE NOT NULL,
    password_hash VARCHAR(150) NOT NULL,
    address VARCHAR(120) NOT NULL,
    is_admin BOOLEAN DEFAULT false
  );
`;

const dropAuthTable = 'DROP TABLE IF EXISTS Users CASCADE;';

export { authTable, dropAuthTable };
