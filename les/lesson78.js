//Библиотека JQuery

//Подлючение к проекту, cdnjs сайт

//В терминале npm i jquery --save
import $ from 'jquery';

const btn = $('#btn'); //Обращение к элементу на странцие
console.log(btn);

$(document).ready(function () { //Дожидаемся загрузки всей страницы
	$('.list-item:first').hover(function () { //Выбор только первого элемента 
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').on('click', function () {
		$('.image:even').fadeToggle('slow'); //Анимация медленного скрытия элемента
	});

	$('.list-item:eq(4)').on('click', function () { //Другой способ создания анимации
		$('.image:odd').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 2000);
	});
}); 