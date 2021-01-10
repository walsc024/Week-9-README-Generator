// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.Description}
 
  ### Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contribution)
* [Tests](#Test)
* [Questions](#Questions)

  ## Installation 
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## License 
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
