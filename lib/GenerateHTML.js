const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const employeeStorage = require('../index');

function GenerateHTML (data) {
    let htmlString = [];
    for(let i = 0; i < data.storage.length; i++) {
        // console.log(employeeStorage);
        let employeeType = ""
        const employeeRole = data.storage[i].role;
        if(employeeRole === 'Engineer') {
            employeeType = new Engineer (data.storage[i]);
            console.log(employeeType);
        } else if (employeeRole === 'Manager') {
            employeeType = new Manager (data.storage[i]);
            console.log(employeeType);
        } else {
            employeeType = new Intern (data.storage[i]);
            console.log(employeeType);
        }
        if(employeeType.role === 'Manager') {
            htmlString.push(`
            <div class="card text-dark bg-info mb-3 col" style="max-width: 18rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text"><a href="">ID:${employeeType.id}</a></p>
                    <p class="card-text"><a href="">Email: ${employeeType.email}</a></p>
                    <p class="card-text"><a href="">Office number:${employeeType.officeNumber} 31</a></p>
                </div>
            </div>`);
        } else if (employeeType.role === 'Intern') {
            htmlString.push(`
            <div class="card text-dark bg-info mb-3 col" style="max-width: 18rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text"><a href="">ID:${employeeType.id}</a></p>
                    <p class="card-text"><a href="">Email: ${employeeType.email}</a></p>
                    <p class="card-text"><a href="">School:${employeeType.school} 31</a></p>
                </div>
            </div>`);
        } else {
            htmlString.push( `
            <div class="card text-dark bg-info mb-3 col" style="max-width: 18rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text"><a href="">ID:${employeeType.id}</a></p>
                    <p class="card-text"><a href="">Email: ${employeeType.email}</a></p>
                    <p class="card-text"><a href="">Github:${employeeType.github} 31</a></p>
                </div>
            </div>`);
        };
    };
    return htmlString;
 };

module.exports = GenerateHTML;