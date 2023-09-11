import fs from 'fs';
import path from 'path';

function writeFileSyncRecursive(filename, content = '') {
  fs.mkdirSync(path.dirname(filename), {recursive: true});
  fs.writeFileSync(filename, content);
}

function writeFolderRecursive(filename) {
  fs.mkdirSync(filename, {recursive: true});
}

function getScreens() {
  let screens = [];
  const modules = getModules();
  for (var i in modules) {
    const list = fs.readdirSync('./src/app/modules/' + modules[i] + '/screens');
    screens = screens.concat(list);
  }
  return screens;
}

function getScreensOnModule(module) {
  return fs.readdirSync('./src/app/modules/' + module + '/screens');
}

function getModules() {
  return fs.readdirSync('./src/app/modules');
}

function regenerateModuleIndex(module) {
  const path = `./src/app/modules/${module}/index.ts`;
  const screens = getScreensOnModule(module);
  let content = '';
  screens.forEach(screen => {
    content =
      content +
      `import ${screen}Controller from './screens/${screen}/Controllers/${screen}Controller';\n`;
  });
  content = content + '\n';
  screens.forEach(screen => {
    content =
      content +
      `import ${screen}ViewModel from './screens/${screen}/ViewModels/${screen}ViewModel';\n`;
  });
  content = content + '\nexport {\n';
  screens.forEach(screen => {
    content = content + `${screen}Controller,\n${screen}ViewModel,\n`;
  });
  content = content + '}';
  writeFileSyncRecursive(path, content);
}

export {
  writeFileSyncRecursive,
  writeFolderRecursive,
  getScreens,
  getScreensOnModule,
  getModules,
  regenerateModuleIndex,
};
