"use strict";

//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №37
//ClassList и делегирование событий

const btns = document.querySelectorAll('button');

console.log(btns[1].classList.length); //Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
console.log(btns[1].classList.item(0)); //Позволяет получить класс который распологается под определенным индексом
console.log(btns[1].classList.add('red', 'someNewClass')); // add( String [,String] ) - Добавляет элементу указанные классы
console.log(btns[1].classList.remove('blue')); // remove( String [,String] ) - Удаляет у элемента указанные классы
console.log(btns[1].classList.toggle('blue')); // toggle ( String [, Boolean]) - Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
console.log(btns[1].classList.contains('blue')); //contains ( String ) - Проверяет, есть ли данный класс у элемента (вернёт true или false)

if (btns[1].classList.contains('red')) {
	console.log('red')
}

btns[0].addEventListener('click', () => {
	if (!btns[1].classList.contains('red')) {
		btns[1].classList.add('red');
	} else {
		btns[1].classList.remove('red');
	}
});

//Делегирование событий
/* 
Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – делегирование.

Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.

Из него можно получить целевой элемент event.target, понять на каком именно потомке произошло событие и обработать его. */

wrapper.addEventListener('click', (event) => {
	console.dir(event.target);
	if (event.target && event.target.tagName == "BUTTON") {
		console.log('hello');
	}
});

const btn = document.createElement('button');
btn.classList.add('red');

wrapper.append(btn);

//Продвинутое делегирование:

wrapper.addEventListener('click', (event) => {
	console.dir(event.target);
	if (event.target && event.target.matches("button.red")) {
		console.log('hello');
	}
});

