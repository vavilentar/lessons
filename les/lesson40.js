//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №40
//Работа с датами

const now = new Date(); //Создаем новую дату и помещаем в переменную now, если не заполнить () то берется текущая дата

console.log(now); //2022-02-15T07:12:57.421Z

//const now = new Date('2020-05-01'); Передаем аргументы, дата в качестве строки, без времени

//const now = new Date(2020, 5, 1, 20); 

//Получение компонентов даты

console.log(now.getFullYear()); //Получение года
//getMonth - месяц
//getDate - день

//getDay - день недели, начинается с воскресенья (0)

//Другой часовой пояс UTC +0
//console.log(getUTCHours());

//Чтобы установить дату и время используется приставка set вместо get

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
};

let end = new Date();

console.log(end - start);