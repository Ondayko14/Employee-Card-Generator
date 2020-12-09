const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('see if the Engineer object is being made', () =>{
    const engineer = new Engineer('checkit@github.com');

    expect(engineer.getGithub()).toBe('checkit@github.com');
    expect(engineer.getRole()).toBe('Engineer');
});