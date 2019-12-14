showCheckboxList();
creatLike ();






function showCheckboxList () {
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

function creatLike () { // Функция заглушка, сделал просто для наглядности изменения лайка, переделать!!!
	let likeClick = document.querySelectorAll(".like__box"); // Клик
	let likeNum = document.querySelectorAll(".like__text"); // Повесить изменение значения

	for (let i = 0; i < likeClick.length; i++) {
		likeClick[i].onclick = () => {
			let valueLike = likeNum[i].innerHTML;
			valueLike = +valueLike;
			if (valueLike == 11 || valueLike == 2) {
				valueLike = valueLike + 1;
				likeNum[i].innerHTML = (valueLike);
			} else if (valueLike == 12 || valueLike == 3) {
				valueLike = valueLike - 1;
				likeNum[i].innerHTML = (valueLike);
			}
		}
	}
}