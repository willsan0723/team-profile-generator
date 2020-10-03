const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateHTML = require("./utils/generateHTML");

const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Provide a detailed description about your project:"
},
{
    type: "input",
    name: "installation",
    message: "What are your installation instructions? Be as detailed as possible:"
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:"
},
{
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["Apache", "BSD3", "MIT", "ISC"]
},
{   type: "input",
    name: "contributing",
    message: "What guidelines do you have for other developers for contributing to this project?"
},
{
    type: "input",
    name: "tests",
    message: "Write any tests for your application here, then provide examples on how to run them:"
},
{
    type: "input",
    name: "user",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "mail",
    message: "What is your e-mail address?"
}
];

// function to write page
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("./dist/team.html", generateHTML({...inquirerResponses}))
    })
}

// function call to initialize program
init();
