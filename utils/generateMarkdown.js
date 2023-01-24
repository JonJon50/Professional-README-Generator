// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("license = ", license);
  return `![alt](https://img.shields.io/badge/License-${license}-blue)`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (` `)
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (` `)
}


// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  return `# ${data.title}
        
  ## License
${renderLicenseBadge(data.stack)}
          
## Table of Content
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Tests](#Tests)
- [Questions](#Questions)
- [Email](#Email)
- [Github](#Github)

## Description
${data.description}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Tests
${data.tests}

## Questions 
${data.questions}

Please contact me using the following links:

## Email
[Email: ${data.email}](mailto:${data.email})

## Github
[GitHub](https://github.com/${data.github})    
`;
  
} 

module.exports = generateMarkdown;


        



