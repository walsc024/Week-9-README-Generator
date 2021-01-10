// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.Description}
 
  ### Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Report](#report)
* [Contributions](#Contribution)
* [Tests](#Test)
* [Questions](#questions)

  ## Installation Instructions
  ${data.Installation}

  ## Usage of Application
  ${data.Usage}

  ## Licence 
  ${data.License}

  ## Contribution 
  ${data.Contribution}

  ## Test Instructions
  ${data.Test}

  ## Questions
  ${data.questions}
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
