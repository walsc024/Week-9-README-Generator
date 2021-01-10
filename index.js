const inquirer = require('inquirer')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of this application?"
},
{
    type: "input",
    name: "Description",
    message: "Describe this application?"
}, 
{
    type: "input",
    name: "Installation",
    message: "Installation instructions of this application?"
}, 
{
    type: "input",
    name: "Usage",
    message: "Usage of this application?"
},  
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE', 'None'],
  },
{
    type: "input",
    name: "Contribution",
    message: "Contribution guidelines of this application?"
}, 
{
    type: "input",
    name: "Test",
    message: "Test instructions of this application?"
}, 


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
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
