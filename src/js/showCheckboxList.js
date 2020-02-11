'use strict'
export function showCheckboxList () {
	let checkClick = document.querySelectorAll(".checkbox-list__button"); // Клик
	let checkIcon = document.querySelectorAll(".checkbox-list__icon"); // Повесить поворот иконки
	let checkDrop = document.querySelectorAll(".checkbox-dropdown"); // Повесить раскрытие

	for (let i = 0; i < checkClick.length; i++) {
		checkClick[i].onclick = () => {
			checkDrop[i].classList.toggle('checkbox-dropdown--expanded');
			checkIcon[i].classList.toggle('checkbox-list__icon--activ');
		}
	}
}