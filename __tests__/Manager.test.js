const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('see if the Manager object is being made', () =>{
    const manager = new Manager(12);

    expect(manager.officeNumber).toEqual(12);
    expect(manager.getRole()).toBe('Manager');
});