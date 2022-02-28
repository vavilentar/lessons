//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №47
//Класс (ES6)

'use strict';

class Rectangle {
	constructor (height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle { //Наследуется от предыдущего класса
	constructor(height, width, text, bgColor) {
		super(height, width); //Вызывает тоже самое, что и у родителя (extends Rectangle), должен быть первой строчкой
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello, world', 'red');

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());

