//Конспект лекции 55. Promise (ES6)

'use strict';

console.log('Запрос данных...');

//Callback hell
setTimeout(() => {
	console.log('Подготовка данных...');
	const product = {
		name: 'TV',
		price: 2000
	};

	setTimeout(() => {
		product.status = 'order';
		console.log(product);
	}, 2000);
}, 2000);

//Использование Promise/Resolve - выполняется при успехе

'use strict';

console.log('Запрос данных...');

const  req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 2000
		};
	
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	}).then(data => {
		data.modify = true;
		return data;
	}).then((data) => {
		console.log(data);
	});
});

//Использование Promise/Reject - если не успех, то пропускает все resolve и выполняется reject

'use strict';

console.log('Запрос данных...');

const  req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 2000
		};
	
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			reject();
		}, 2000);
	}).then(data => {
		data.modify = true;
		return data;
	}).then((data) => {
		console.log(data);
	}).catch(() => {
		console.error('Произошла ошибка');
	});
});

//Использование Promise/Finally - выполняется при любом исходе, в самом конце после всех resolve и reject

'use strict';

console.log('Запрос данных...');

const  req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 2000
		};
	
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	}).then(data => {
		data.modify = true;
		return data;
	}).then((data) => {
		console.log(data);
	}).catch(() => {
		console.error('Произошла ошибка');
	}).finally(() => {
		console.log('Finally');
	});
});

//All - проверка выполнения всех Promise 

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

Promise.all([test(1000), test(2000)]).then(() => {
	console.log('All'); //Выполняется только после обоих Promise
});

//Race выполняется после самого первого Promise

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All'); //Выполняется только после обоих Promise
});