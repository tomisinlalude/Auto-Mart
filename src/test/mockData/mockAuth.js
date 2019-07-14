/* eslint-disable linebreak-style */
export const userCredentials = {
  id: 1,
  token: 'Gtuiplmaio',
  email: 'johndoe@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongName = {
  email: 'johndoe@mail.com',
  first_name: 'John9',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongEmail = {
  email: 'johndoemail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongAddress = {
  email: 'johndoe@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos mdklsiehuiwhuisbhznmzma,ojqwoiwuwghsbnnmmskisweyg',
};

export const userCredentialsWithWrongPhoneNumber = {
  email: 'johndoe@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos',
};

export const userCredentialsWithWrongPassword = {
  email: 'johndoe@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'pass',
  confirm_password: 'password',
  address: 'Birrel Avenue, Yaba, Lagos',
  isAdmin: false,
};

export const userCredentialsWithNonMatchingPasswords = {
  email: 'johndoe@mail.com',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password',
  confirm_password: 'pass',
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
  first_name: 'John',
  last_name: 'Doe',
  email: 'johngdoe@mail.com',
  password: 'password',
};
