const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (data) {
        super(data.name, data.id, data.email);
        this.github = data.github;
        this.role = 'Engineer';
    }
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;