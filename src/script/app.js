'use strict'


// Выпадающий список
showCheckboxList();
function showCheckboxList () {
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



// Работа с лайками
const likes = document.querySelectorAll('.like__box');
for(let like of likes) {
	like.addEventListener("click", liked);
}
function liked() {
	if(this.previousElementSibling.checked == false) {
		this.nextElementSibling.innerText = ++this.nextElementSibling.innerText;
	}
	else this.nextElementSibling.innerText = --this.nextElementSibling.innerText;
}




// События связанные с выпадающим списком комнат
const calcRoomsDrop = document.querySelectorAll('.rooms-dropdown');
for(let block of calcRoomsDrop) {
	
	block.onclick = (event) => {
		let target = event.target; 
		if (target.tagName != 'BUTTON' && target.tagName != 'INPUT') return; 

		if(target.className == 'cart-control__button cart-control__button--reduce') {
			target.nextElementSibling.value = (target.nextElementSibling.value > target.nextElementSibling.min) ? 
			--target.nextElementSibling.value : target.nextElementSibling.value; 
			let input = block.getElementsByTagName('input').local;
			let lowdown = block.querySelectorAll(".cart-control__quantity");
			calcRoomsWriteInput(input, lowdown);
		}
		if(target.className == 'cart-control__button cart-control__button--add') {
			target.previousElementSibling.value = (target.previousElementSibling.value < target.previousElementSibling.max) ? 
			++target.previousElementSibling.value : target.previousElementSibling.value; 
			let input = block.getElementsByTagName('input').local;
			let lowdown = block.querySelectorAll(".cart-control__quantity");
			calcRoomsWriteInput(input, lowdown);
		}
		if(target.className == 'rooms-dropdown__input') {
			target.classList.add('rooms-dropdown__input--expanded');
			target.parentElement.nextElementSibling.classList.add('rooms-dropdown__box--expended');
		}
		if(target.className == 'rooms-dropdown__button') {
			target.previousElementSibling.classList.toggle('rooms-dropdown__input--expanded');
			target.parentElement.nextElementSibling.classList.toggle('rooms-dropdown__box--expended');
		}
	}
}
// Фукнция подсчитывает комнаты и записывает в инпут
function calcRoomsWriteInput(input, lowdown) {
	let rooms = {
		bedroom: 0,
		bed: 0,
		bathroom: 0,
	}
	for (let type of lowdown) {
		rooms[type.dataset.typeRoom] = type.value;
	}
	let word1 = (rooms.bedroom > 1) ? 'спальни' : 'спальня';
	let word2 = (rooms.bed > 1) ? 'кровати' : 'кровать';
	let word3 = (rooms.bathroom > 1) ? 'ванные комнаты' : (rooms.bathroom > 0) ? 'ванная комната' : 'ванных комнат';
	
	rooms.bathroom = (rooms.bathroom == 0) ? 'без' : rooms.bathroom;
	input.value = `${rooms.bedroom} ${word1}, ${rooms.bed} ${word2}, ${rooms.bathroom} ${word3}`
}