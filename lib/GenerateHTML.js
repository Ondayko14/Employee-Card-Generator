const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function GenerateHTML (data) {
    const employeeType = data.role;
    const employee = new Employee (data.name, data.id, data.email);
    //console.log(employee);
//     return `<div class="card text-dark bg-info mb-3 col" style="max-width: 18rem;">
//     <div class="card-header">Jared</div>
//     <div class="card-body">
//       <h5 class="card-title">Manager</h5>
//       <p class="card-text"><a href="">ID: 1</a></p>
//       <p class="card-text"><a href="">Email: Jared@soobway.com</a></p>
//       <p class="card-text"><a href="">Office number: 31</a></p>
//     </div>
// </div>`
};

module.exports = GenerateHTML;