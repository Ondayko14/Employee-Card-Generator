const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }


}

module.exports = Manager;