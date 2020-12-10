const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.officeNumber = data.office;
        this.role = 'Manager';
    }


}

module.exports = Manager;