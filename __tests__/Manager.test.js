const Manager = require('../lib/Manager');

test('see if the Engineer object is being made', () =>{
    const manager = new Manager('Tom');

    expect(manager.name).toBe('Tom');
});