import fs from 'fs';
import inquirer from 'inquirer';
import {
  getModules,
  getScreens,
  regenerateModuleIndex,
  writeFileSyncRecursive,
} from './Utils.js';

const createViewPrompt = {
  type: 'input',
  name: 'name',
  message: 'View name?',
};

function createView() {
  inquirer.prompt([createViewPrompt]).then(answers => {
    createViewWithName(answers.name);
  });
}

const createViewWithNamePrompt = {
  type: 'list',
  name: 'module',
  message: 'Select a module',
  choices: [],
};

function createViewWithName(name) {
  createViewWithNamePrompt.choices = getModules();
  inquirer.prompt([createViewWithNamePrompt]).then(answers => {
    const module = answers.module;
    const global = `./src/app/modules/${module}/screens/${name}`;
    createViewFile(
      './config/templates/controller.txt',
      `${global}/Controllers/${name}Controller.tsx`,
      name,
    );
    createViewFile(
      './config/templates/viewmodel.txt',
      `${global}/ViewModels/${name}ViewModel.ts`,
      name,
    );
    createViewFile(
      './config/templates/view.txt',
      `${global}/Views/${name}View.tsx`,
      name,
    );
    regenerateModuleIndex(module);
    regenerateScreensCatalog();
  });
}

function createViewFile(source, to, viewName) {
  let text = fs.readFileSync(source, {encoding: 'utf8', flag: 'r'});
  text = text.replaceAll('${name}', viewName);
  writeFileSyncRecursive(to, text);
}

function regenerateScreensCatalog() {
  const path = './src/constants/Screens.ts';
  const screens = getScreens();
  let content = 'enum ScreenNames {\n';
  screens.forEach((value, index) => {
    content = content + `\t${value},\n`;
  });
  content = content + '}\n\nexport default ScreenNames;';
  writeFileSyncRecursive(path, content);
}

export {
  createView,
  createViewWithName,
  regenerateScreensCatalog,
  createViewFile,
};
