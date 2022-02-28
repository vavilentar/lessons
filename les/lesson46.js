//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №46
//Контекст вызова. This

function showThis(){
	console.log(this);
}
showThis();



// 1) Обычная функция: this = window, если стоит use strict - undefined

'use strict';

function showThis(a, b){
	console.log(this);
	function sum() {
		console.log(this); 
		return a + b;
	}
	console.log(sum());
}
showThis(4, 5);

// 2) Контекст у методов объекта - сам объект

'use strict';

const obj = {
	a: 20,
	b: 15,
	sum: function () {
		console.log(this);
	}
};

// 3) this в конструкорах и классах - это новый экземпляр объекта

'use strict';

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log("Hello " + this.name);
	};
}

let ivan = new User('Ivan', 23)

// 4) Ручная привязка this: call, apply, bind

'use strict'

function sayName (surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
	return this*num;
}

const double = count.bind(2);
console.log(double(3));

//Пример

btn.addEventListener('click', function() {
	console.log(this); //Получаем элемент на котором произошло событие
});

//Особенности стрелочной фукнции - у нее нету своего контекста вызова, она всегда будет его брать у своего родителя

btn.addEventListener('click', () => {
	console.log(this); //
});

const obj1 = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this);
		};
	}
};

obj.sayNumber();

const double = (a) => {
	return a * 2;
};

//Сокращенный вариант

const double = (a) => a * 2;

