import inquirer from 'inquirer';
import {createViewFile} from './View.js';

const createComponentPrompt = {
  type: 'input',
  name: 'name',
  message: 'Component name?',
};

function createComponent() {
  inquirer.prompt([createComponentPrompt]).then(answers => {
    createComponentWithName(answers.name);
  });
}

function createComponentWithName(name) {
  const global = './src/components';
  createViewFile(
    './config/templates/component.txt',
    `${global}/${name}.tsx`,
    name,
  );
}

export {createComponent, createComponentWithName};
