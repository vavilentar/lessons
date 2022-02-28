//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №45
//Функции-конструкторы

function User (name, id) {
	this.name = name;
	this.id = id
	this.human = true;
	this.hello = function() {
		console.log(`Hello, ${this.name}!`);
	};
}

User.prototype.exit = function(name) {
	console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('ivan', 28);
const alex = new User ('alex', 20);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

console.log(ivan);
console.log(alex);

