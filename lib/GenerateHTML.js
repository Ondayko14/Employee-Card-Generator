const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const employeeStorage = require('../index');

function GenerateHTML (data) {
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
//     console.log(employee);
//     return `<div class="card text-dark bg-info mb-3 col" style="max-width: 18rem;">
//     <div class="card-header">Jared</div>
//     <div class="card-body">
//       <h5 class="card-title">Manager</h5>
//       <p class="card-text"><a href="">ID: 1</a></p>
//       <p class="card-text"><a href="">Email: Jared@soobway.com</a></p>
//       <p class="card-text"><a href="">Office number: 31</a></p>
//     </div>
// </div>`
    }
 };

module.exports = GenerateHTML;