//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №41
//Создаем таймер обратного отчета на сайте

//Верстка таймера HTML

/* <div class="promotion__timer">
<div class="title">Осталось до конца акции:</div>
<div class="timer">
    <div class="timer__block">
	   <span id="days">12</span>
	   дней
    </div>
    <div class="timer__block">
	   <span id="hours">20</span>
	   часов
    </div>
    <div class="timer__block">
	   <span id="minutes">56</span>
	   минут
    </div>
    <div class="timer__block">
	   <span id="seconds">20</span>
	   секунд
    </div>
</div>
</div> */

//Timer

const deadline = '2022-02-17';

//Функция расчета оставшегося времени
function getTimeRemaining(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date()),
		 days = Math.floor(t / (1000 * 60 * 60 * 24)),
		 hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		 minutes = Math.floor((t / 1000 / 60 ) % 60),
		 seconds = Math.floor((t / 1000) % 60);

		 return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		 };
}

//Подставление 0
function getZero (num) {
	if (num >= 0 && num <10) {
		return `0${num}`;
	} else {
		return num;
	}
}
//Подставление даты и времени на страницу
function setClock(selector, endtime) {
	const timer = document.querySelector(selector),
		 days = document.querySelector('#days'),
		 hours = document.querySelector('#hours'),
		 minutes = document.querySelector('#minutes'),
		 seconds = document.querySelector('#seconds'),
		 timeInterval = setInterval(updateClock, 1000);

	updateClock(); //Убрать "мигание" страницы

	function updateClock() {
		const t = getTimeRemaining(endtime);

		days.innerHTML = getZero(t.days);
		hours.innerHTML = getZero(t.hours);
		minutes.innerHTML = getZero(t.minutes);
		seconds.innerHTML = getZero(t.seconds);

		if(t.total <= 0) {
			clearInterval(timeInterval);
		}
	}
}

//Запуск таймера
setClock('.timer', deadline);