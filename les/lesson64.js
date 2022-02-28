'use strict';

//64. Как сохранить данные без БД. Работа с localStorage

localStorage.setItem('number', 5); //Добавить "ключ" в ls

localStorage.removeItem('number'); //Удаляем "ключ" из ls

console.log(localStorage.get('number')); //Получить значение "ключа" из ls 

localStorage.clear(); //Очищаем ls

const checkbox = document.querySelector('#check'),
	 form = document.querySelector('form'),
	 change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
}

if (localStorage.get('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () =>{
	localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
	if (localStorage.get('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

const persone ={
	name: 'Alex',
	age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));