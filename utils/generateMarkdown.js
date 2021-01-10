// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.Description}
 

  ## Installation Instructions
  ${data.Installation}

  ## Usage of Application
  ${data.Usage}

  ## Licence 
  ${data.Licence}

  ## Contribution 
  ${data.Contribution}

  ## Test Instructions
  ${data.Test}
`;
}

module.exports = generateMarkdown;
