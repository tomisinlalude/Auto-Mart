![AutoMart Logo](/ui/images/autoMart-logo.png)


# AutoMart [![Build Status](https://travis-ci.org/OluwatomisinLalude/Auto-Mart.svg?branch=develop)](https://travis-ci.org/OluwatomisinLalude/Auto-Mart) [![Coverage Status](https://coveralls.io/repos/github/OluwatomisinLalude/Auto-Mart/badge.svg)](https://coveralls.io/github/OluwatomisinLalude/Auto-Mart) [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/OluwatomisinLalude/Auto-Mart/maintainability)

AutoMart is an online marketplace for automobiles of diverse makes, model or body type where users can sell their cars or buy from trusted dealerships or private sellers. 

## Features

 - User can sign up.
 - User can sign in.
 - User (seller) can post a car sale advertisement.
 - User (buyer) can make a purchase order.  
 - User (buyer) can update the price of his/her purchase order.  
 - User (seller) can mark his/her posted AD as sold.  
 - User (seller) can update the price of his/her posted AD.  
 - User can view a specific car.  
 - User can view all unsold cars.  
 - User can view all unsold cars within a price range.  
 - Admin can delete a posted AD record.  
 - Admin can view all posted ads whether sold or unsold. 
 - User can ​flag/report​ a posted AD as fraudulent.  
 
 ## Getting Started
 
 Below are instructions to kick start AutoMart in your local server.
 
 **First off, you must have node/npm installed. Install the latest node version [here](https://nodejs.org/en/download/) Not to worry, the npm package comes along with the node package**
 
 ### Installation
 
 1. Clone this repository by running this on your terminal: `git clone https://github.com/OluwatomisinLalude/Auto-Mart.git`
 2. Navigate to the project's directory with: `cd Auto-MArt`
 3. Run `npm install` to install dependencies
 4. Run  `npm run start:dev` to start the server on a local host
 5. Test the routes with [Postman](https://www.getpostman.com/)
 
 ### Tests
 
 This project uses Mocha for testing. To test, run `npm test` or `npm t`.
 
 ### Dependencies

| Name | Version |
| ----------- | ----------- |
| bcrypt | 3.x |
| body-parser | 1.x |
| cloudinary | 1.x |
| cors | 2.x |
| datauri | 2.x |
| debug | 4.x |
| dotenv | 8.x |
| express | 4.x |
| jsonwebtoken | 8.x |
| morgan | 1.x |
| multer | 1.x |
| multer-storage-cloudinary | 2.x |

### Development Dependencies

| Name | Version |
| ----------- | ----------- |
| @babel/cli | 7.x |
| @babel/core | 7.x |
| @babel/node | 7.x |
| @babel/polyfill | 7.x |
| @babel/preset-env | 7.x |
| @babel/register | 7.x |
| babel-plugin-istanbul | 5.x |
| chai | 4.x |
| chai-http | 4.x |
| coveralls | 3.x |
| cross-env | 5.x |
| eslint | 5.x |
| eslint-config-airbnb-base | 13.x |
| eslint-plugin-import | 2.x |
| eslint-plugin-mocha | 5.x |
| mocha | 6.x |
| mocha-lcov-reporter | 1.x |
| nodemon | 1.x |
| nyc | 14.x |

### API Routes

| Endpoint | Description | HTTP method |
| ----------- | ----------- | ----------- |
| /api/v1/user/auth/signup | Create a user account | POST
| /api/v1/user/auth/signin | Login a user | POST
| /api/v1/car/ | Create a car ad | POST
| /api/v1/car/ | View all cars | GET
| /api/v1/car/?status=available&minValue=500000&maxValue=100000000 | View unsold cars within price range | GET
| /api/v1/car/?status=available | View all unsold cars | GET
| /api/v1/car/:id | View specific car ad | GET
| /api/v1/car/:id/price | Update price of car | PATCH
| /api/v1/car/:id/status | Mark a car as sold | PATCH
| /api/v1/car/:id | Delete a car record | DELETE
| /api/v1/order | Create a purchase order | POST
| /api/v1/order/:id/price | Update the price of a purchase order | PATCH

## Developer Stack

### User Interface

The User Interface for this project was built with **HTML5, CSS3 and JavaScript.** [Google Fonts](https://fonts.google.com/) provided the clean and amazing fonts.

### API

The API consumption was built with **node.js, express and JWT (JSON web token for Authentication)**

## Author

[Oluwatomisin Lalude](https://www.github.com/OluwatomisinLalude)

## License

MIT License
