class Pagination {
	constructor(quantity) {
		this.maxNumberPage = quantity;

		this.pagination = document.querySelector('.pagination');
		this.numberIcons = this.pagination.querySelector('.pagination__quantity');
		this.createPaginationNumPage(this.maxNumberPage, this.pagination.querySelector('.pagination__page'));
		this.addAllEvent();
		

		this.activPage = this.pagination.querySelector('button[data-number-page="1"]');
		this.nextPage = this.activPage;

		this.hideButtons(this.activPage.dataset.numberPage)

		this.createMultipoint(2)
		this.createMultipoint(this.maxNumberPage)

		this.hideMultipoint(this.activPage)
		
	}


	// <-- -->
	togglePage(direction) {
		let count = (direction == 'next') ? +this.nextPage.dataset.numberPage + 1 : +this.nextPage.dataset.numberPage - 1;

		count = (count < 1) ? 1 : count;
		count = (count > this.maxNumberPage) ? 15 : count;

		this.nextPage = this.pagination.querySelector(`button[data-number-page="${count}"]`);
		this.reassignmentActiv(count, this.nextPage)
	}

	// Смена активной кнопки
	reassignmentActiv(currentPage, newActivPage) {
		this.hideButtons(currentPage)
		this.hideMultipoint(newActivPage)
		this.editText(newActivPage);

		if (currentPage <= +this.maxNumberPage) {
			this.activPage.classList.remove('pagination__button--active')
			this.activPage = newActivPage;
			this.activPage.classList.add('pagination__button--active')

			this.nextPage = this.pagination.querySelector(`button[data-number-page="${currentPage}"]`);
		}

	}

	// Навесить события
	addAllEvent() {
		this.pagination.addEventListener("click", event => {
			const action = event.target.dataset.action;
			const number = event.target.dataset.numberPage;
			
			if (action == "next") {
				this.togglePage(action);
			} else if (action == "previous") {
				this.togglePage(action);
			} else if (number) {
				this.reassignmentActiv(number, event.target)
			}
		});
	}

	// Создание кнопок-узлов страниц 
	createPaginationNumPage(value, buttons) {
		for (let i = 1; i <= value; i++) {
			const button = document.createElement('button');
			const text = document.createTextNode(i);

			button.appendChild(text);
			button.dataset.numberPage = i;
			button.className = (i != 1) ? 'pagination__button' : 'pagination__button pagination__button--active';
			buttons.append(button)
		}
	}

	// Скрытие лишних кнопок
	hideButtons(activButton) {
		activButton = activButton || 1;
		// Массив кнопок, которые не надо скрывать
		const arr = [
			1, // Первая
			+activButton - 2, // До предыдущей
			+activButton - 1, // Предыдущая
			+activButton, // Активная
			+activButton + 1, // Следующая
			+activButton + 2, // После следующей
			this.maxNumberPage, // Последняя
		];

		for (let i = 1; i <= this.maxNumberPage; i++) {			
			const button = this.pagination.querySelector(`button[data-number-page="${i}"]`);
			button.style.display = 'none';

			if(arr.includes(i)) {
				button.style.display = 'block';
			}
		}
	}

	createMultipoint(number) {
		const place = this.pagination.querySelector(`button[data-number-page="${number}"]`);
		const button = document.createElement('button');
		const text = document.createTextNode('...');
		button.appendChild(text);
		button.className = 'pagination__point';
		button.style.display = 'block';
		place.before(button)
	}

	hideMultipoint(activPage) {
		const number = activPage.dataset.numberPage;
		const [start, end] = this.pagination.querySelectorAll('.pagination__point');

		if(number <= 4) {
			start.style.display = 'none';
		} else if(number >= 4) {
			start.style.display = 'block';
		}

		if(number >= 12) {
			end.style.display = 'none';
		}else if(number <= 12) {
			end.style.display = 'block';
		}
	}
	editText(activPage) {
		const number = activPage.dataset.numberPage;
		const from = number * 12 - 11; 
		const to = from + 12 - 1;
		if(to > 100) this.numberIcons.innerText = `${from} – ${to} из 180 вариантов аренды`
		else this.numberIcons.innerText = `${from} – ${to} из 100+ вариантов аренды`
		
	}
}

new Pagination(15);