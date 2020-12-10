const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
// const EngineerQuestions = require('./lib/EngineerQuestions');
// const ManagerQuestions = require('./lib/ManagerQuestions');
// const InternQuestions = require('./lib/InternQuestions');
const GenerateHTML = require('./lib/GenerateHTML');
const fs = require('fs');
const { validate } = require('@babel/types');
const { generate } = require('rxjs');
const Engineer = require('./lib/Engineer');
const EngineerQuestions = require('./lib/EngineerQuestions');
const EmployeeStorage = [];


const init = () => {
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
        }
    ]);
};

init().then(employeeData => {
    return GenerateHTML(employeeData);
});