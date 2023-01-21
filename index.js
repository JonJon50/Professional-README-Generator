// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [];

function readmePrompt() {
    console.log("Starting readme prompt")
    inquirer.prompt([
        {
            type: "input",
            name: "licenseName",
            message: "what is the name of your license",
        }
    ]).then((anwsers) => {
        console.log(anwsers)
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
