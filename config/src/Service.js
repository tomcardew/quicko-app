import fs from 'fs';
import inquirer from 'inquirer';

const createServicePrompt = {
  type: 'input',
  name: 'name',
  message: 'Service name?',
};

const createServiceOnModulePrompt = {
  type: 'list',
  name: 'action',
  message: 'What kind of element you want to create?',
  choices: ['view', 'module', 'component'],
};

// function create() {
//   inquirer.prompt([createServicePrompt]).then(answers => {
//     switch (answers.action) {
//       case 'view':
//         createView();
//         break;
//       case 'module':
//         createModule();
//       case 'component':
//         createComponent();
//       default:
//         break;
//     }
//   });
// }

function getServices() {}

function createServiceOnNetworkingFile(name) {}
