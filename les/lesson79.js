//Функции-генераторы

function* generator (){
	yield 'S';
	yield 'c';
	yield 'r';
	yield 'i';
	yield 'p';
	yield 't';
};

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

console.log(str.next());

/* 
{ value: 'S', done: false }
{ value: 'c', done: false }
{ value: 'r', done: false }
{ value: 'i', done: false }
{ value: 'p', done: false }
{ value: 't', done: false }
{ value: undefined, done: true } */

console.log(str.next().value) //Выводит значение 

function* count (n) {
	for (let i = 0; i < n; i++) {
		yield i ;
	}
};

for (let k of count(7)) {
	console.log(k)
}

/* const counter = count(7);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value); */