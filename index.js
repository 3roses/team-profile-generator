
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');




const userQuestions = () => {
    response = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is this team member's email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this team member's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this team member's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is this team member's gitHub?"
        }
    ])
}


let htmFile = (teamMembers) => (
    ``
)