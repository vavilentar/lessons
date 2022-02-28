//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №43
//Создаем модальное окно

// https://keycode.info/ - узнать код клавиши

//Модальное окно

	//Прописать data - <button data-modal class="btn btn_dark">Связаться с нами</button> - вызов модального окна
	//<div data-close class="modal__close">&times;</div> - закрытие окна
	
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		 modal = document.querySelector('.modal'),
		 modalCloseBtn = document.querySelector('[data-close]');

 	modalTrigger.forEach(btn => {
		btn.addEventListener('click', function() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		// Либо вариант с toggle - но тогда назначить класс в верстке
		document.body.style.overflow = 'hidden';
		});
 	});

 	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		// Либо вариант с toggle - но тогда назначить класс в верстке
		document.body.style.overflow = '';
	}

	//Закрытие по нажатию подложки 

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.add('hide');
			modal.classList.remove('show');
			document.body.style.overflow = '';
		}
	});

	//Закрытие по клавише

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});