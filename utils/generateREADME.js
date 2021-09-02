// util for general function to use throughout the entire package for exporting
// https://shields.io/category/license

// function to generate the README based on the users answers - answers are added to each section accordingly
function generateREADME(userAnswers) {
 return `
 
 # Project Title: ${userAnswers.projectTitle}

 ![badge](https://img.shields.io/badge/license-${userAnswers.projectLicense}-orange)

 <hr>

 ## Description

 ${userAnswers.projectDescription}

 ## Table of Contents

 - [Description] (#description)
 - [Installation] (#installation)
 - [Usage] (#usage)
 - [License] (#license)
 - [Contributions] (#contributions)
 - [Tests] (#tests)
 - [Questions] (#questions)
 - [Contact] (#contact)

 ## Installation

 To install dependencies - run these commands:
 \`\`\`
 ${userAnswers.projectInstallation}
 \`\`\`
 
 ## Usage

 ${userAnswers.projectUsage}

 ## License 

 Application is covered by:
 ${userAnswers.projectLicense}

 ## Contributions

 ${userAnswers.projectContribution}

 ## Tests

 ${userAnswers.projectTests}

 ## Questions

 ${userAnswers.projectQuestions}

 ## Contact

 Contact for any questions:
 ${userAnswers.userEmail}
 <br>
 Find on github:
 [${userAnswers.userName}] (https://github.com/${userAnswers.userName})

 <br> 
 This README was generated by [Node.js README Generator] (https://github.com/ssharp0/nodejs-readme-generator)

 `
}

// export the generateREADME (function) so other files (index.js) can access the exported code (function to generate the readme)
module.exports = generateREADME;



