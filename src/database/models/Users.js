export const UserDb = [
  {
    id: 1,
    userName: 'JohnDoe',
    email: 'johndoe@mail.com',
    password: 'password',
    phoneNumber: '08012345678',
  },
];
export class Users {
  static insertUser(user) {
    return UserDb.push(user);
  }

  // static login(user) {
  //     return existingUsers.push(user);
  // }
}
