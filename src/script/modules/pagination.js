class Pagination {
	constructor(quantity) {
		this.maxNumberPage = quantity;

		this.pagination = document.querySelector('.pagination');
		this.createPaginationNumPage(this.maxNumberPage, this.pagination.querySelector('.pagination__page'));
		this.addAllEvent();

		this.activPage = this.pagination.querySelector('button[data-number-page="1"]');
		this.nextPage = this.activPage;
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
		this.hideButtons(currentPage);
		if(currentPage <= +this.maxNumberPage) {
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
		for(let i = 1; i <= value; i++) {
			const button = document.createElement('button');
			const text = document.createTextNode(i); 
			
			button.appendChild(text);
			button.dataset.numberPage = i;
			button.className = (i != 1) ? 'pagination__button' : 'pagination__button pagination__button--active';
			buttons.append(button)
		}
	}

	// Скрытие лишних кнопок
	hideButtons() {
		// Всегда показывать первую и последнюю
		// Показывать 2 страницы на перёд и две страницы назад
		// активные страницы, а также первая и последняя должны разделяться троеточием 
	}
}

new Pagination(15);