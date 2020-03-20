// let previous = document.querySelector(".pagination__button--previous");
// let active = document.querySelector(".pagination__button--active");
let first = document.querySelector(".pagination__button--first");
// let main = document.querySelector(".pagination__button--main");
// let after = document.querySelector(".pagination__button--after");
// let end = document.querySelector(".pagination__button--end");
// let next = document.querySelector(".pagination__button--next");
// let quantity = document.querySelector(".pagination__quantity");
// let pointR = document.querySelector('button[data-point="right"]');
// let pointL = document.querySelector('button[data-point="left"]');

class Pagination {
	constructor(quantity) {
		this.pagination = document.querySelector('.pagination');
		this.createPaginationNumPage(quantity, this.pagination.querySelector('.pagination__page'));
		this.addAllEvent();

		this.activPage = this.pagination.querySelector('button[data-num-page="1"]');
		this.nextPage = this.activPage;
		this.previousPage = this.nextPage;
		this.endPage = this.pagination.querySelector(`button[data-num-page="${quantity}"]`);
	}

	// -->
	nextPagef() {
		const count = +this.nextPage.dataset.numPage + 1;
		this.nextPage = this.pagination.querySelector(`button[data-num-page="${count}"]`) || this.pagination.querySelector(`button[data-num-page="15"]`)

		// Переназначаю активную и следующую страницу
		this.reassignmentActiv(count, this.nextPage)
		console.log('nextPage - Следующая страница')
	}


	// <--
	previousPagef() {
		console.log('previousPage - Предыдущая страница')
	}

	// Смена активной кнопки
	reassignmentActiv(currentPage, numPage) {
		numPage = numPage || event.target;

		if(currentPage <= +this.endPage.dataset.numPage) {
			this.previousPage = this.activPage;
			this.previousPage.classList.remove('pagination__button--active')

			this.activPage = numPage; 
			this.activPage.classList.add('pagination__button--active')

			this.nextPage = this.pagination.querySelector(`button[data-num-page="${currentPage}"]`) || this.pagination.querySelector(`button[data-num-page="15"]`);
		} 
		
	}

	// Навесить события
	addAllEvent() {
		this.pagination.addEventListener("click", event => {
			if (event.target.dataset.action == "next") this.nextPagef();
			else if (event.target.dataset.action == "start") this.startPagef(event.target);
			else if (event.target.dataset.action == "previous") this.previousPagef(event.target);
			else if (event.target.dataset.action == "end") this.endPagef(event.target);
			else if (event.target.dataset.numPage) this.reassignmentActiv(event.target.dataset.numPage)
		});
	}

	// Создание узлов кнопок страниц 
	createPaginationNumPage(value, buttons) {
		for(let i = 1; i <= value; i++) {
			const button = document.createElement('button');
			const text = document.createTextNode(`${i}`); 
			button.appendChild(text);
			button.dataset.numPage = i;
			button.className = (i == 1) ? 'pagination__button pagination__button--active' : 'pagination__button';
			buttons.append(button)
		}
	}
}

new Pagination(15);