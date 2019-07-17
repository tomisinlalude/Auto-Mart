/* eslint-disable no-console */
import pool from '../../config/databaseConfig';
​
pool.on('connect', () => {
    console.log('Connected to the database');
  });
​
const queryText = `DROP TABLE IF EXISTS Flags, Orders, Cars, Users CASCADE;
  
CREATE TABLE IF NOT EXISTS Users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(254) UNIQUE NOT NULL,
    password_hash VARCHAR(150) NOT NULL,
    address VARCHAR(120) NOT NULL,
    is_admin BOOLEAN DEFAULT false
  );
  
  CREATE TABLE IF NOT EXISTS Cars(
    car_id SERIAL PRIMARY KEY,
    owner INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    state VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    price INTEGER NOT NULL,
    manufacturer VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    body_type VARCHAR(20) NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    created_on DATE DEFAULT NOW()
  );
  
  CREATE TABLE IF NOT EXISTS Orders(
    order_id SERIAL,
      buyer_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
      car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE NOT NULL,
      price_offered INTEGER NOT NULL,
      price INTEGER NOT NULL,
      status VARCHAR(10) DEFAULT 'pending',
      created_on DATE DEFAULT NOW()
  );
  
  CREATE TABLE IF NOT EXISTS Flags(
    flag_id SERIAL PRIMARY KEY,
    car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE NOT NULL,
    reason VARCHAR(110) NOT NULL,
    description TEXT,
    reported_by INTEGER REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    created_on DATE DEFAULT NOW()
  );`;
​
pool
  .query(queryText)
  .then((res) => {
      console.log(res)
    pool.end();
  })
  .catch((err) => {
      console.log(err)
    pool.end();
  });