const Employee = require('./Employee');

class Intern extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.school = data.school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;
    };
};

module.exports = Intern;