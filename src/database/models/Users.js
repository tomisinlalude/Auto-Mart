const allUsers = [];
export default class Users {

    static insertUser(user) {
        return allUsers.push(user);
    }
} 