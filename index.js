const inquirer = require('inquirer');
const GenerateHTML = require('./lib/GenerateHTML');
const fs = require('fs');
const { validate } = require('@babel/types');
const { generate } = require('rxjs');
const writeFile = require('./lib/WriteToPage');
const info = [];

//Start The Application
const init = (info) => {
//setup an array to store multiple employees
    if(!info.storage) {
        info.storage = []
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("No name inserted, Please try again!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this employees ID number?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Innacurate number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees Email Address?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please Try Again");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the role of this employee?",
            choices: ['Engineer', 'Manager', 'Intern'],
            default: 'intern'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is this Engineers github link?',
            when: ({role}) => {
                if(role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of this Interns current School?',
            when: ({role}) => {
                if(role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the office number of this Manager?",
            when: ({role}) => {
                if(role === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ]).then(employeeData => {
        //saves the data into the array
        info.storage.push(employeeData);
        if(employeeData.anotherEmployee) {
            return init(info);
        } else {
            return info;
        }
    })
};

init(info)
.then((data) => {
    //where the html is made
    return GenerateHTML(data);
})
.then(write => {
    //writes over the existing index.html inside of the distribution folder
    writeFile(write);
});

