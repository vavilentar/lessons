import {one, two} from './main.js'; //Импорт переменных

console.log(`${one} and ${two}`); //Собрать сборщиком

import {one as first} from './main.js'; //Импорт с переименованием
console.log(first);

import * as data from './main'; //Импорт всего
console.log(`${data.one} and ${data.two}`);

import sayHi from './main'; //Default импорт
sayHi();

//Подключение к странице
//<script type='module' src="./js/main.js"></script>
//<script type='module' src="./js/script.js"></script>