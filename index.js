const inquirer = require('inquirer')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of this application?"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((userAnswers) => {
console.log(userAnswers)
var newReadMeLocation = path.join(process.cwd(), "NewREADME.md"); 
var formattedData = generateMarkdown(userAnswers)
writeToFile(newReadMeLocation, formattedData)
})
}

// function call to initialize program
init();
