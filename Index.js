const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer');
const generateHTML = require("./utils/generateHTML");

const teamMembers = [];
const idArray = [];

function questions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the manager's name."
            }
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
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
            name: "managerEmail",
            message: "What is the manager's e-mail?",
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
            name: "managerOffice",
            message: "What is the manager's office telephone number?",
            validate: answer => {
                const pass = answer.match(
                    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                )
                if (!pass) {
                    return `Formats accepted: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX`
                }                
                return true;
            }
        }
    ])
    .then ( answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        idArray.push(answers.managerID);        
        return buildTeam();
    })
}

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
            message: "What is the engineer's ID?",
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
                    return `An e-mail address is required to have an "@" and a ".com"`;
                }
                else {
                    return true;
                }

            }
        },
        {
            type: "input",
            name: "engineerGit",
            message: "What is the engineer's GitHub username?",
            validate: answer => {                
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's name."
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

function internQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's name."
            }
        },
        {
            type: "input",
            name: "internID",
            message: "What is the intern's ID?",
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
            name: "internEmail",
            message: "What is the intern's e-mail?",
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
            name: "internSchool",
            message: "Which school does the intern attend?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's school."
            }
        }
    ])
    .then ( answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internID);        
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
        if (err) {
            throw new Error(err);
        }
        else {
            console.log("HTML file generated in /dist folder")
        }
    });
}

questions();

