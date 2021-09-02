// initialization dependencies - variables for the inquirer npm (downloaded and node_modules are gitignore)
// inquirer was installed: npm i inquirer
const inquirer = require('inquirer');

// variable for the fs (file system) to write to README file (comes with node.js already so no extra installation)
const fs = require('fs')

// variable for the path to get full file path to update the README file in the dist folder
const path = require('path')

// generateREADME dependency to import the function - the generateREADME.js file in the utils folder (function to generate the README based on user answers from the prompts)
const generateREADME = require('./utils/generateREADME')

// list of questions for the user to provide a response (using the inquirer npm to pass the questions)
const questions = [
 // project title
 {
  name: 'projectTitle',
  message: 'Please enter a project title...',
  type: 'input'
 },
 // project description
 {
  name: 'projectDescription',
  message: 'Please enter a project description...',
  type: 'input'
 },
 // project installation
 {
  name: 'projectInstallation',
  message: 'Please enter project dependencies or other installation required...',
  type: 'input',
  default: 'npm i'
 },
 // project usage
 {
  name: 'projectUsage',
  message: 'Please enter a usage for this project...',
  type: 'input'
 },
 // project license - list of licence options below for reference:
 // https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
 {
  name: 'projectLicense',
  message: 'Please choose a license for the project...',
  type: 'list',
  choices: ["Academic", "Apache", "Artistic", "BSD", "MIT", "Mozilla", "Open Software"]
 },
 // project contributions
 {
  name: 'projectContribution',
  message: 'Please enter who the contributors are for this project...',
  type: 'input'
 },
 // project tests
 {
  name: 'projectTests',
  message: 'Please enter project tests, if any...',
  type: 'input',
  default: 'npm test'
 },
 // project questions
 {
  name: 'projectQuestions',
  message: 'Please enter any project questions...',
  type: 'input'
 },
 // user name
 {
  name: 'userName',
  message: 'Please enter your github username...',
  type: 'input'
 },
 // user email
 {
  name: 'userEmail',
  message: 'Please enter your email...',
  type: 'input'
 },
]

// function to write the the response data to the file name (README file in dist as specified in following function)
function writeToREADME(fileName, responseData) {
 // join the file path in the current working directory with the README file name that will be updated, write the responseData to the file, error log
 return fs.writeFile(path.join(process.cwd(), fileName), responseData, err => {
  if (err) {console.log(err) }
 })
}

// function to initiate the README Generation (inquirer to ask user questions, then grab the user responses and pass through the exported function to generate the README content in the README file
function initiateREADMEGeneration() {
 // use the inquirer.prompt and pass through the questions array from the questions to ask the user the questions
 inquirer.prompt(questions)

  // then, get the users answers from the inquirer
  .then((userAnswers) => {
   
   // log the answers for visibility
   console.log('------------------')
   console.log('Thanks! Responses will be generated to README file in the dist folder');
   console.log('------------------')
   console.log(`Project Title: ${userAnswers.projectTitle}`);
   console.log(`Project Description: ${userAnswers.projectDescription}`);
   console.log(`Project Installation: ${userAnswers.projectInstallation}`);
   console.log(`Project Usage: ${userAnswers.projectUsage}`);
   console.log(`Project License: ${userAnswers.projectLicense}`);
   console.log(`Project Contributions: ${userAnswers.projectContribution}`);
   console.log(`Project Tests: ${userAnswers.projectTests}`);
   console.log(`Project Questions: ${userAnswers.projectQuestions}`);
   console.log(`Github Username: ${userAnswers.username}`);
   console.log(`Email: ${userAnswers.userEmail}`);
   console.log('------------------')

   // assigning variable to grab the (exported from utils) function generateREADME to generate readme on the users answers
   const generateREADMEContent = generateREADME(userAnswers)
   // call the function to write to the README file and pass through the file name/location, and call the generate README content to generate the content to the README file
   writeToREADME('./dist/README.md', generateREADMEContent)

   // log to finish process
   console.log('Success! README updated in dist folder!');
  })
}

// function to initiate to ask user if they want to generate a README file or exit
const initiateMenu = () => {
 // inquirer to ask user if they would like to generate README or exit
 inquirer.prompt({
  type: 'list',
  name: 'startAction',
  message: 'Would you like to generate a README? README.md File will be updated in the dist folder based on user input.',
  choices: ['Generate README' , 'No - EXIT']
 })
 // then users answer (startAction) to determine next steps
  .then(({startAction}) => {
   switch (startAction) {
    // if answered Generate README then call the function to initiate the README Generation
    case 'Generate README':
     initiateREADMEGeneration()
     break
     // if answered No - EXIT then exit the process
    case 'No - EXIT':
     console.log('------------------')
     console.log('No README will be generated and this process will be exited.');
     console.log('------------------')
     process.exit()
   }
  })
}

// call the function to initiate the process to generate a README
console.log('Welcome - please answer the question if you would like to generate a README file!');
initiateMenu()


