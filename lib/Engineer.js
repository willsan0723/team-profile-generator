const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, git) {
    super(name, id, email);

    this.git = git;
    }
    getGit() {
        return this.git;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;