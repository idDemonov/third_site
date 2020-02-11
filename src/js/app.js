'use strict'
import {showCheckboxList} from './showCheckboxList.js';


showCheckboxList();
creatLike ();









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