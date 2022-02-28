'use strict';

//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №30

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.addEventListener('DOMContentLoaded', () => { //Вместо document можно увидеть window
	//Весь код помещать сюда
});

const adv = document.querySelectorAll('.promo__adv img'), //Указываем, что внутри класса .promo__adv у нас картинки Img, и мы их получаем в псевдомассив
      poster = document.querySelector('.promo__bg'), //
      genre = poster.querySelector('.promo__genre'), // Получение элемента внутри другого элемента
      movieList = document.querySelector('.promo__interactive-list'); //Достукиваемся до списка фильмов на странице

//Напишем forEach цикл для удаления каждого элемента псевдомассива

const deleteAdv = (arr) => {
    arr.forEach( item => {
        item.remove();
    });
};

deleteAdv(adv);

//Изменения текста на странице, в данном случае меняем жанр фильма на странце

const makeChanges = () => {
    genre.textContent = 'Драма'; //Изменили текст

    poster.style.backgroundImage = 'url("img/bg.jpg")'; //В данном случае важно, чтобы ковычки не повторялись/ поменяли фон
};

makeChanges();

//Меняем список фильмов на странцие имея массив данных состоящий из названий

const addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value; //В value содержится то, что ввел пользователь на форме
    const favorite = checkbox.checked; //Проверка, стоит ли галочка

    if (newFilm) { //Условие проверки пустых введеных данных

        if (newFilm.length > 21) { //Условие проверки длины введеных данных и при необходимости обрезка
            newFilm = `${newFilm.substring(0,22)}...`;
        };

        if (favorite) {
            console.log('Добавляем любимый фильм');
        };

        movieDB.movies.push(newFilm); //Добавить строку, которые сабмитит пользователь в базу данных
        sortArr(movieDB.movies); //Сортировка по алфавиту
        createMovieList(movieDB.movies, movieList);
    };

    event.target.reset();
});

const sortArr = (arr) => {
    arr.sort(); //Сортируем список фильмов
};

function createMovieList(films, parent) { //Обернули этот функционал в функцию, чтобы потом использовать в дальнейшем
    parent.innerHTML = ''; //Очистили HTML структуру на странице
    sortArr(films);
    
    films.forEach((film, i) =>{
    parent.innerHTML += 
    `<li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div></li>`;
});

createMovieList(movieDB.movies, movieList);

//Делаем функциональную кнопку удаления элемента

document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', () =>{
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        //Вызываем функцию внутри себя же самой - рекурсия
        createMovieList(films, parent); //Теперь когда мы удаляем элемент, список будет перестраиваться заново
    });
});

};