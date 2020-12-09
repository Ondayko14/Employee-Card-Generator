const Intern = require('../lib/Intern');

test('see if the Engineer object is being made', () =>{
    const intern = new Intern('Joe');

    expect(intern.name).toBe('Joe');
});