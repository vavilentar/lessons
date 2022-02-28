"use strict";

//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №31
//События и их обработчики.

//Обработчик события

//1) В HTML-коде
<button onlclick="alert('Click!')" id="btn"></button> //Такое не используется, и не стоит это применять.

//2) Использовать свойство DOM-дерева, только для примера, его использовать тоже не рекомендуется.
const btv = document.querySelector('button');

btn.onlclick = function() {
	alert('Click!');
};

//3) Грамотный обработчик событий, можно привязывать несколько действий

btn.addEventListener('click', () => { //Нажатие
	alert('Click');
});

btn.addEventListener('click', () => { //Сработает после первого нажатия сразу после 
	alert('Second click');
});

btn.addEventListener('mouseenter', (e) => { //Мышь над кнопкой
	console.log('Hover');
	console.log(e.target); //Получаем информацию об элементе
	e.targer.remove(); //Удаляем элемент на который навели курсор
});

//Удаление элемента

const deleteElement = (e) => { 
	e.target.remove();
};

btn.addEventListener('click', deleteElement); //После того, как пользователь совершит click по элементу, элемент будет удален

let i = 0;
const deleteElement = (e) => { 
	e.target.remove();
	i++;
	if (i == 1){
		btn.addEventListener('click', deleteElement);
	}
};

//Всплытие событий
//Всплытие событий это когда обработчик событий срабатывает сначала на самом вложенном элементе, затем на родителе, если он есть, и так выше и выше по иерархии

<div class="overlay">
	<button id="btn">Нажми меня!</button>
</div>

const overlay = document.querySelector('.overlay');

const deleteElement = (e) => {
	console.log(e.targer);
	console.log(e.type); //Тип события
}

overlay.addEventListener('click', deleteElement);

//Отмена стандартного поведения браузера

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
	event.preventDefault(); //Отмена стандартного поведения браузера, ставим в самое начало
	console.log(event.target); //Переход по ссылке отменен, просто пишем target события в консоль
});

