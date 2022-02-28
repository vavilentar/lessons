//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №44
//Модификации модального окна

modalTrigger.forEach(btn => {
	btn.addEventListener('click', openModal);
 });

 function openModal(){
	modal.classList.add('show');
	modal.classList.remove('hide');
	// Либо вариант с toggle - но тогда назначить класс в верстке
	document.body.style.overflow = 'hidden';
 };

 function openModal(){
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
	clearInterval(modalTimerID); //Если пользователь сам открыл окно, то по таймеру оно больше не откроется само по себе
}

//Модификации модального окна

const modalTimerID = setTimeout(openModal, 3000); //Вызов функции открытия модального окна через N секунд

//Модальное окно в конце страницы
	//Прокрутка справа и контент который видем складываем - сравнимаем с полным сайтом.

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener ('scroll', showModalByScroll);
