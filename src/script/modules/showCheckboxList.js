// Выпадающий список checkbox
function showCheckboxList() {
	const checkClick = document.querySelectorAll(".checkbox-list__button"); // Клик
	const checkIcon = document.querySelectorAll(".checkbox-list__icon"); // Повесить поворот иконки
	const checkDrop = document.querySelectorAll(".checkbox-dropdown"); // Повесить раскрытие

	for (let i = 0; i < checkClick.length; i++) {
		checkClick[i].onclick = () => {
			checkDrop[i].classList.toggle('checkbox-dropdown--expanded');
			checkIcon[i].classList.toggle('checkbox-list__icon--activ');
		}
	}
}
showCheckboxList();