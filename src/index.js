const myModule = require('./main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

//Webpack сборщик модулей
//Gulp планировщик, и через него можно запускать Webpack