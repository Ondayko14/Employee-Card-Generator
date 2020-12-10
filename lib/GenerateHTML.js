const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function GenerateHTML (data) {
    //stores the individual employees with their corresponding values
    let htmlString = [];
    for(let i = 0; i < data.storage.length; i++) {
        let employeeType = ""
        const employeeRole = data.storage[i].role;
        if(employeeRole === 'Engineer') {
            employeeType = new Engineer (data.storage[i]);
        } else if (employeeRole === 'Manager') {
            employeeType = new Manager (data.storage[i]);
        } else {
            employeeType = new Intern (data.storage[i]);
        }
        //Apply HTML to employees from the htmlString Array above
        if(employeeType.role === 'Manager') {
            htmlString[i] = `
            <div class="card text-dark bg-info m-3" style="width: 18rem; height: 14rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text">ID:${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text">Office number:${employeeType.officeNumber}</p>
                </div>
            </div>`;
        } else if (employeeType.role === 'Intern') {
            htmlString[i] =`
            <div class="card text-dark bg-info m-3" style="width: 18rem; height: 14rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text">ID:${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text">School:${employeeType.school}</p>
                </div>
            </div>`;
        } else {
            htmlString[i] = `
            <div class="card text-dark bg-info m-3" style="width: 18rem; height: 14rem;">
                <div class="card-header">${employeeType.name}</div>
                <div class="card-body">
                    <h5 class="card-title">${employeeType.role}</h5>
                    <p class="card-text">ID:${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text"><a href="${employeeType.github}" target="_blank">Github:${employeeType.github}</a></p>
                </div>
            </div>`;
        };
    };
    //what is being sent to the WriteFile function
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Card Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            <link href="./style.css" rel="stylesheet">
        </head>
        <body>
            <header class="bg-success d-flex justify-content-center align-items-center flex-wrap">
                <h1 class="text-white">My Team!</h1>
            </header>
            <section class="d-flex justify-content-center align-items-start flex-wrap">
                ${htmlString.join('')}
            </section>
        </body>
    </html>`;
 };


module.exports = GenerateHTML;