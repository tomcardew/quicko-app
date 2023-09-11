import fs from 'fs';
import inquirer from 'inquirer';
import {createComponent} from './src/Component.js';
import {createModule} from './src/Module.js';
import {getModules, getScreens} from './src/Utils.js';
import {createView} from './src/View.js';

const createPrompt = {
  type: 'list',
  name: 'action',
  message: 'What kind of element you want to create?',
  choices: ['view', 'module', 'component'],
};

function create() {
  inquirer.prompt([createPrompt]).then(answers => {
    switch (answers.action) {
      case 'view':
        createView();
        break;
      case 'module':
        createModule();
        break;
      case 'component':
        createComponent();
        break;
      default:
        break;
    }
  });
}

function init() {
  const configPath = './config/project.json';
  const data = {
    modules: getModules(),
    screens: getScreens(),
  };
  fs.writeFileSync(configPath, JSON.stringify(data));
}

const runPrompt = {
  type: 'list',
  name: 'action',
  message: 'Select an action',
  choices: ['create'],
};

function run() {
  init();
  inquirer.prompt([runPrompt]).then(answers => {
    switch (answers.action) {
      case 'create':
        create();
        break;
      default:
        break;
    }
  });
}

run();
