/* eslint-disable linebreak-style */
export const userCredentials = {
  id: 1,
  token: 'Gtuiplmaio',
  email: 'johndoe@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'password',
  phoneNumber: '08012345678',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongName = {
  email: 'johndoe@mail.com',
  firstName: 'John9',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'password',
  phoneNumber: '08012345678',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongEmail = {
  email: 'johndoemail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'password',
  phoneNumber: '08012367980',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongAddress = {
  email: 'johndoe@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'password',
  phoneNumber: '08012345678',
  address: 'Birrel Avenue, Yaba, Lagos mdklsiehuiwhuisbhznmzma,ojqwoiwuwghsbnnmmskisweyg',
};

export const userCredentialsWithWrongPhoneNumber = {
  email: 'johndoe@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'password',
  phoneNumber: '08012367gt',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongPassword = {
  email: 'johndoe@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'pass',
  confirmPassword: 'password',
  phoneNumber: '08012345678',
  address: 'Birrel Avenue, Yaba, Lagos',
  isAdmin: false,
};

export const userCredentialsWithNonMatchingPasswords = {
  email: 'johndoe@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password',
  confirmPassword: 'pass',
  phoneNumber: '08012345678',
  address: 'Birrel Avenue, Yaba, Lagos',
  isAdmin: false,
};

export const returningUser = {
  token: 'Gol23pBSSa',
  email: 'johndoe@mail.com',
  password: 'password',
};

export const returningUserWithWrongPassword = {
  email: 'johndoe@mail.com',
  password: 'passworrd',
};

export const nonExistingUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johngdoe@mail.com',
  password: 'password',
};
