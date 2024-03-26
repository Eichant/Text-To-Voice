const User = require('./users');

class AuthService {
    constructor() {
        this.users = {};
    }

    registerUser(username, email, password) {
        if (!this.users[username]) {
            this.users[username] = {
                email: email,
                password: password
            };
            return true;
        } else {
            return false;
        }
    }

    login(username) {
        return !!this.users[username];
    }
}

module.exports = AuthService;
