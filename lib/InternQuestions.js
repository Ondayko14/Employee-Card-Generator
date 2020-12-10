const inquirer = require('inquirer');

function InternQuestions(data) {
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'What is the name of this interns school?'
    });
};

module.exports = InternQuestions;