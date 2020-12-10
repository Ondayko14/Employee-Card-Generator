const inquirer = require('inquirer');
const fs = require('fs');
const { validate } = require('@babel/types');

function init() {
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
        }
    ]);
};

init().then((data) => {
    if (data.role === 'Engineer') {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'What is this Engineers github link?'
        });
    } else if(data.role === 'Manager') {
        inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of this manager?'
        });
    } else {
        inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'What is the name of this interns school?'
        });
    }
});