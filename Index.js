const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer');
const generateHTML = require("./utils/generateHTML");

const teamMembers = [];
const idArray = [];
function engineerQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's name."
            }
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's id?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                )
                if (pass) {
                    if (idArray.includes(answer)) {
                        return "This id number is already taken, please choose a different one."
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return "Numbers only please."
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's e-mail?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                )
                if (!pass) {
                    return `An e-mail address is required to have an "@" and an "."`;
                }
                else {
                    return true;
                }

            }
        },
        {
            type: "input",
            name: "engineerGit",
            message: "What is the engineer's GitHub?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's GitHub."
            }
        }
    ])
    .then ( answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit);
        teamMembers.push(engineer);
        idArray.push(answers.engineerID);        
        return buildTeam();
    })
}

function buildTeam(){
    return inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What type of team member do you want to add?",
            choices: ["Engineer", "Intern", "I don't want to add anyone else"]
        
        }
    ])
    .then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                engineerQuestions()
                break;
            case "Intern":
                internQuestions()
                break;
            default: 
                return createTeam()            
        }
    })
}

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFile(outputPath, generateHTML(teamMembers), err => {
        
    });
    // console.log(teamMembers);
}

engineerQuestions();

