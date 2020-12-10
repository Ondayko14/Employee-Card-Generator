const inquirer = require('inquirer');

function EngineerQuestions(data){
    inquirer.prompt({
        type: 'input',
        name: 'github',
        message: 'What is this Engineers github link?'
    });
};

module.exports = EngineerQuestions;