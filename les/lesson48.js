//КОНСПЕКТ НА ОСНОВАНИИ ЛЕКЦИИ №48
//Используем классы в реальной работе

class MenuCard {
	constructor(src, alt, title, descr, price, parentSelector) {
		this.src = src;
		this.alr = alt;
		this.title = title;
		this.descr = descr;
		this.price = price;
		this.parent = document.querySelector(parentSelector); //Куда вставлять элемент
		this.transfer = 27;
		this.changToUAH(); //Можно вызвать конверт валют прямо в конструкторе
	}

	changToUAH() {
		this.price = this.price * this.transfer;
	}

	render() {
		const element = document.createElement('div');
		element.innerHTML = `
		<div class="menu__item">
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.descr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		</div>
		`;
		this.parent.append(element);
	}
}

	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render(); 

	