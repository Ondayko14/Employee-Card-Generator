const inquirer = require("inquirer");

function ManagerQuestions (data) {
    inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of this manager?'
    });
};

module.exports = ManagerQuestions;