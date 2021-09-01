// initialization - variables for the inquirer npm (downloaded and node_modules are gitignore)
const inquirer = require('inquirer');
// variable for the fs (file system) to write to README file (comes with node.js already so no extra installation)
const fs = require('fs')

// list of questions for the user to provide a response (using the inquirer npm to pass the questions)
const questions = [
 {
  name: 'projectTitle',
  message: 'Please type a project title...',
  type: 'input'
 },
 {
  name: 'projectDescription',
  message: 'Please type a project description...',
  type: 'input'
 },
 {
  name: 'projectInstallation',
  message: 'Please type information on regarding project installation (including any dependencies)...',
  type: 'input',
  default: 'npm i'
 },
 {
  name: 'projectUsage',
  message: 'What is the usage of this project?',
  type: 'input'
 },
 {
  name: 'projectLicense',
  message: 'Please provide a license for the project.',
  type: 'list',
  choices: ["Academic", "Apache", "MIT", "Mozilla", "Open", "None"]
 },
 {
  name: 'projectContribution',
  message: 'Who are the contributors on this project?',
  type: 'input'
 },
 {
  name: 'projectTests',
  message: 'Are there project tests included?',
  type: 'input',
  default: 'npm test'
 },
 {
  name: 'projectQuestions',
  message: 'Please provide any project questions',
  type: 'input'
 },
 {
  name: 'userName',
  message: 'Please provide your github username',
  type: 'input'
 },
 {
  name: 'userEmail',
  message: 'Please provide your email',
  type: 'input'
 },
]



