
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');


const managerQuestions = () => {
    manager = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Continue building with an engineer, intern, or finish your team?',
            choices: ['Engineer', 'Intern', 'Team is complete']
        }
    ]).then( response => {
        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
        }else{
            console.log('Goodluck to your team!')
        }
    })
}

const engineerQuestions = () =>{
    engineer = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's gitHub?"
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Continue building with an engineer, intern, or finish your team?',
            choices: ['Engineer', 'Intern', 'Team is complete']
        }
    ]).then( response => {
        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
        }else{
            console.log('Goodluck to your team!')
        }
    })
}

const internQuestions = () => {
    intern = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern attend school?"
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Continue building with an engineer, intern, or finish your team?',
            choices: ['Engineer', 'Intern', 'Team is complete']
        }
    ]).then( response => {
        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
            console.log(response)
        }else{
            console.log('Goodluck to your team!')
        }
    })
}


const init = () =>{
    managerQuestions()
}

init()


let htmFile = ({name, id, email, officeNumber}) => (
    ``
)

