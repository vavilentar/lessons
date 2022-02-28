//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №39
//Скрипты и время их выполнения. setTimeout и setInterval

const timerId = setTimeout(function() {
	console.log('Hello1');
}, 2000);

//Второй способ объявления

const timerId = setTimeout(function(text) {
	console.log(text);
}, 2000, 'Hello2');

//Передача готовой функции

const timerId = setTimeout(logger, 2000);

function logger () {
	console.log('Hello3');
}

//Без объявления переменной

setTimeout(logger,2000);

//Остановка таймера

clearInterval(timerId);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
	//const timerId = setTimeout(logger, 2000);
	const timerId = setInterval(logger, 2000); //Срабатывает каждые две секунды
});