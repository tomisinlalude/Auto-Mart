/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

export const carCredentials = {
  carId: 2,
  owner: 'John Doe',
  state: 'Used',
  status: 'Available',
  make: 'Dodge Viper Acura NSX',
  model: '2017',
  manufacturer: 'Chrysler Corporation',
  price: 15000000,
  bodyType: 'Car',
  imageUrl: '../ui/images/adlist1.png',
  createdOn: Date.now(),
};

export const carWithUnsupportedImage = {
  carId: 2,
  owner: 'John Doe',
  state: 'Used',
  status: 'Available',
  make: 'Dodge Viper Acura NSX',
  model: '2017',
  manufacturer: 'Chrysler Corporation',
  price: 15000000,
  bodyType: 'Car',
  file: '.pdf',
  createdOn: Date.now(),
};

export const carWithImageSizeTooLarge = {
  carId: 2,
  owner: 'John Doe',
  state: 'Used',
  status: 'Available',
  make: 'Dodge Viper Acura NSX',
  model: '2017',
  manufacturer: 'Chrysler Corporation',
  price: 15000000,
  bodyType: 'Car',
  file: '/butterfly.jpg',
  createdOn: Date.now(),
};
