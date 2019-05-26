const newUsers = [];
const existingUsers = [];
export default class Users {

    static insertUser(user) {
        return newUsers.push(user);
    }

    static login(user) {
        return existingUsers.push(user);
    }
}