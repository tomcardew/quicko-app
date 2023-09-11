import inquirer from 'inquirer';
import {writeFolderRecursive} from './Utils.js';

const createModulePrompt = {
  type: 'input',
  name: 'name',
  message: 'Module name?',
};

function createModule() {
  inquirer.prompt([createModulePrompt]).then(answers => {
    writeFolderRecursive(`./src/app/modules/${answers.name}/screens`);
  });
}

export {createModule};
