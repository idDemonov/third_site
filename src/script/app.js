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




// Выпадающий список rooms, выпадение при нажатие инпут
const rooms = document.querySelectorAll('.rooms-dropdown__input');
const dropBox = document.querySelectorAll('.rooms-dropdown__box');
const dropInput = document.querySelectorAll('.rooms-dropdown__input');

for (let i = 0; i < rooms.length; i++) {
	rooms[i].onclick = () => {
		dropInput[i].classList.add('rooms-dropdown__input--expanded');
		dropBox[i].classList.add('rooms-dropdown__box--expended');
	}
}



// Выпадающий список rooms, закрытие и выпадение на кнопку
const dropBoxButton = document.querySelectorAll('.rooms-dropdown__button');

for (let i = 0; i < dropBoxButton.length; i++) {
	dropBoxButton[i].onclick = () => {
		dropInput[i].classList.toggle('rooms-dropdown__input--expanded');
		dropBox[i].classList.toggle('rooms-dropdown__box--expended');
	}
}

// Добавление, убавление кроватей
const buttonReduce = document.querySelectorAll('.cart-control__button--reduce');
const buttonAdd = document.querySelectorAll('.cart-control__button--add');
const valueBedroom = document.querySelectorAll('.cart-control__quantity');
reduceRoom();
addRoom();


function reduceRoom() {
	for (let i = 0; i < buttonReduce.length; i++) {
		buttonReduce[i].onclick = () => {
			valueBedroom[i].value = (valueBedroom[i].value > valueBedroom[i].min) ?
			--valueBedroom[i].value : valueBedroom[i].value;
			setInputDropRoomValue(valueBedroom[i]);
			}
		}
	}

function addRoom() {
	for (let i = 0; i < buttonAdd.length; i++) {
		buttonAdd[i].onclick = () => {
			valueBedroom[i].value = (valueBedroom[i].value < valueBedroom[i].max) ? 
			++valueBedroom[i].value : valueBedroom[i].value;
			setInputDropRoomValue(valueBedroom[i]);
		}
	}

}
// dataset.typeRoom="default"
function setInputDropRoomValue(value) {
	for(let elem of dropInput) {
		if (elem.dataset.typeRoom == "default" && value.dataset.typeRoom == "default") {
			switch (value.name) {
				case "bedroom":
					elem.value = 
					break;
				case "bed":
					break;
				case "bathroom":
					break;
			}
		}
	}
}