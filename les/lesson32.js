"use strict";

//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №32
//Навигация по DOM-элементам, data-атрибуты, преимущество for/of

//Самые главные элементы в DOM

//console.log(document.head);
//console.log(document.documentElement);
console.log(document.body.childNodes); //Позволяет получить список всех нодов, узлов, которые находятся у родителя

//Методы которые позволяют нам путешествовать по DOM-дереву:
console.log(document.body.firstChild); // Самый первый элемент или firstElementChild
console.log(document.body.lastChild); // Самый последний элемент или lastElementChild

//Получаем родителей, соседей и детей:

console.log(document.querySelector('#current').parentNode); //# - селектор ID, parentNode - получаем родителя, если применить .parentNode второй раз, то получим родителя родителя

//DATA атрибут

<li data-current="3">3</li> //Дата-атрибут в HTML

//Получаем атрибут  в коде

console.log(document.querySelector('[data-current="3"]').nextSibling); //nextSibling - Получаем следуюший за data-current  элемент, previousSibling - предыдущий сосед

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Получить конкретно следующий элемент, или previousElementSibling
console.log(document.querySelector('#current').parentElement);

//Конктрукция For/of когда нельзя использовать forEach.
//Перебрать все childNodes и избавиться от всех текстовых:
for (let node of document.body.childNodes) {
	if (node.nodeName == "#text")
	{
		continue; //Пропускаем все ноды у которых значение nodeName является text, оставляя именно элементы
	}
	console.log(node);
};

