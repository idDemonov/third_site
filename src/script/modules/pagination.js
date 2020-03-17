let previous = document.querySelector(".pagination__button--previous");
let active = document.querySelector(".pagination__button--active");
let first = document.querySelector(".pagination__button--first");
let main = document.querySelector(".pagination__button--main");
let after = document.querySelector(".pagination__button--after");
let end = document.querySelector(".pagination__button--end");
let next = document.querySelector(".pagination__button--next");
let quantity = document.querySelector(".pagination__quantity");
let pointR = document.querySelector('button[data-point="right"]');
let pointL = document.querySelector('button[data-point="left"]');

pointL.style.display = 'none';
document.querySelector(".pagination")
	.addEventListener("click", event => {
		// if (event.target !== 'BUTTON') return;

		if (event.target.dataset.action == "next") nextPage();
		if (event.target.dataset.action == "previous") previousPage();
		if (event.target.dataset.action == "start") {
			if(first.classList.contains('pagination__button--active')) return;
			else {
				
			}
		}
		// else if (event.target.dataset.action == "end") end()


});

const nextPage = () => {
	if(active.classList.contains('pagination__button--active')) {
		previous.style.display = 'block';
		active.classList.remove('pagination__button--active')
		main.classList.add('pagination__button--active')
	}
	else if (after.innerHTML <= end.innerHTML - 1) {
		after.innerHTML = ++after.innerHTML
		main.innerHTML = ++main.innerHTML
		if(main.innerHTML > 3) pointL.style.display = 'block';
		if(after.innerHTML == 14) pointR.style.display = 'none';
		if(after.innerHTML == 15) end.style.display = 'none';

	}
	else if (+main.innerHTML == 14) {
		next.style.display = 'none';
		main.classList.remove('pagination__button--active')
		after.classList.add('pagination__button--active')

	}
}


const previousPage = () => {
	if(after.classList.contains('pagination__button--active')) {
		next.style.display = 'block';
		after.classList.remove('pagination__button--active')
		main.classList.add('pagination__button--active')
	}
	else if (main.innerHTML > +first.innerHTML + 1) {
		after.innerHTML = --after.innerHTML
		main.innerHTML = --main.innerHTML
		if(main.innerHTML < 3) pointL.style.display = 'none';
		if(after.innerHTML == 13) pointR.style.display = 'block';
		if(after.innerHTML == 14) end.style.display = 'block';

	}
	else if (+main.innerHTML == 2) {
		previous.style.display = 'none';
		main.classList.remove('pagination__button--active')
		first.classList.add('pagination__button--active')

	}
}

