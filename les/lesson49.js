//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №49
//Rest оператор и параметры по умолчанию (ES6)

const log = function(a, b, ...rest) {
	console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble (number, basis = 2) { //Параметр по умолчанию basis = 2
	console.log(number * basis);
}

calcOrDouble(3); // Ответ - 6, так как присвоилось значение по умолчанию - 2

