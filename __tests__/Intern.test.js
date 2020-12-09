const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('see if the Intern object is being made', () =>{
    const intern = new Intern('Vanderbilt');

    expect(intern.getSchool()).toBe('Vanderbilt');
    expect(intern.getRole()).toBe('Intern');
});