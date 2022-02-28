"use strict";

//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №34
//События на мобильный устройствах

//touchstart - срабатывает при прикосновении
//touchmove - при каждом смещении срабатывает touchmove
//touchend - убираем палец
//touchenter - ведем пальцем и наскакивает на элемент
//touchlift - палец ушел с элемента
//touchcancel - выход за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('start');
	});
});

//Три главных свойства при работе с сенсорными устройствами
//touches - список всех пальцев, которые в данный момент нажимают на экран, создает TouchList
//targetTouches - тоже самое, но конкретного элемента
//changedTouches - список пальце которые участвуют в текущем событии