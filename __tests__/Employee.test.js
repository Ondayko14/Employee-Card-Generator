const { expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

test('See if the Employee object is created', () => {
    const employee = new Employee('Fred', 12, 'b.ondayko@gmail.com');

    expect(employee.getName()).toBe('Fred');
    expect(employee.getId()).toEqual(12);
    expect(employee.getEmail()).toBe('b.ondayko@gmail.com');
});