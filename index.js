// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
var questions = 
[
   {
    type: "input",
    message: "Project title?",
    name: "title",
   },
   {
    type: "input",
    message: "Project description?",
    name: "description",
   },
   {
    type: "input",
    message: "Table of Contents description?",
    name: "Table of Contents",
   },
   {
    type: "input",
    message: "How did you install it?",
    name: "installation",
   },
   {
    type: "input",
    message: "What is your project usage?",
    name: "usage",
   },
   {
    type: "checkbox",
    message: "license?",
    name: "stack",
    choices: ["MIT", "ISC", "GPL"],
   },
   {
    type: "input",
    message: "Who is contributing to project?",
    name: "contributing",
   },
   {
    type: "input",
    name: "tests",
    message: "Did we do tests?",
   },
   {
    type: "input",
    message: "Have questions?",
    name: "questions",
   },
   {
    type: "input",
    message: "You have an email?",
    name: "email",
   },
   {
    type: "input",
    message: "What is your Github Link?",
    name: "github",
   }
];
// TODO: Create a function to write writeME file
  function init() {
    inquirer.prompt(questions)
    .then(function (ResponseFromInquirer) {
    console.log(ResponseFromInquirer)
    fs.writeFileSync("README.md", generateMarkdown(ResponseFromInquirer));
    (err) =>
    err ? console.log(err) : console.log("Successful");
 });
};
// Function call to initialize app
init();
