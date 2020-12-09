const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('see if the Engineer object is being made', () =>{
    const engineer = new Engineer('Keenan');

    expect(engineer.name).toBe('Keenan');
});