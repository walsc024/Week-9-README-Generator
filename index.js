const inquirer = require('inquirer')
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
})
}

// function call to initialize program
init();
