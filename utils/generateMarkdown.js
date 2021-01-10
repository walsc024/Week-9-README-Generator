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
`;
}

module.exports = generateMarkdown;
