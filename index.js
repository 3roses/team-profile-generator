
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const allData = { manager: {}, engineers: [], interns: [] };

const managerQuestions = () => {
    inquirer.prompt([
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
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        allData.manager = manager;

        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
        }else{
            renderHtml (allData)
        }
    })
}

const engineerQuestions = () =>{
    inquirer.prompt([
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
        const eng = new Engineer(response.name, response.id, response.email, response.gitHub)
        allData.engineers.push(eng);

        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
        }else{
            renderHtml (allData)
        }
    })
}

const internQuestions = () => {
    inquirer.prompt([
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
        const intern = new Intern(response.name, response.id, response.email, response.school)
        allData.interns.push(intern);

        if (response.employeeType === 'Engineer'){
            engineerQuestions()
        }else if (response.employeeType === 'Intern'){
            internQuestions()
        }else{
            renderHtml (allData)
        }
    })
}




function writeHTMLToFile (htmlStr) {
    fs.writeFile('dist/index.html', htmlStr, (err) => {
		err ? console.log(err) : console.log('Your team cards have been created!');
	})
}


function renderHtml (allData) {
    const manager = allData.manager;
    const allEngineers = allData.engineers;
    const allInterns = allData.interns;
    
    var htmlStr = `
        ${manager.getHtml()}
        ${allEngineers.map(engineer => engineer.getHtml())}
        ${allInterns.map(intern => intern.getHtml())}
        </div>

        </body>
        </html>
        `
    writeHTMLToFile(htmlStr)
}

const init = () => {
    managerQuestions()
}

init()