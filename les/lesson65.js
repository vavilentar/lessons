//65. Регулярные выражения

'use strict';

//new RegExp('pattern', 'flags');
///pattern/f

const ans = prompt('Введите ваше имя');

const reg = /n/ig;
console.log(reg.test(ans)); //true или false

//console.log(ans.search(reg)); //Поиск первого индекса
//console.log(ans.match(reg)); //Массив и количество

//const pass = prompt('Введите ваш пароль');

//console.log(pass.replace(/./g, "*")); //Все элементы которые попадут в строку \ - экранирование

//console.log('12-34-56'.replace(/-/g, ':'));

