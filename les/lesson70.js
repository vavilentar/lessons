//70. Прием модуль, как и зачем его использовать

const number = 1; //Глобальная область видимости

(function(){
	let number = 2;
	console.log(number);
	console.log(number + 3);
}()); //Анонимная, самовызывающаяся функция

console.log(number);

//Объектный интерфейс

const user = (function(){
	const privat = function () {
		console.log('im privat');
	};

	return {
		sayHello: privat
	};
}());

user.sayHello();