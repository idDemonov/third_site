// Фукнция подсчитывает людей и записывает в инпут
import {calcGuestsWriteInput} from './calcGuestsWriteInput.js';
// Фукнция подсчитывает комнаты и записывает в инпут
import {calcRoomsWriteInput} from './calcRoomsWriteInput.js';

setEventDropBox(document.querySelectorAll('.rooms-dropdown'), 'room');
setEventDropBox(document.querySelectorAll('.guests-dropdown'), 'guest');


// Функции навешивает события связанные с выпадающим списком комнат и гостей
function setEventDropBox(elements, type) {
	for(let block of elements) {
	
		block.onclick = (event) => {
			let target = event.target;
			target = (target.tagName == 'IMG') ? target.parentElement : target;
			if (target.tagName != 'BUTTON' && target.tagName != 'INPUT') return; 

			if(type == 'guest') {
				if(target.className == 'guests-dropdown__input') {
					target.classList.add('guests-dropdown__input--expanded');
					target.parentElement.nextElementSibling.classList.add('guests-dropdown__box--expended');
				}
				else if(target.className == 'guests-dropdown__button') {
					target.previousElementSibling.classList.toggle('guests-dropdown__input--expanded');
					target.parentElement.nextElementSibling.classList.toggle('guests-dropdown__box--expended');
				}
			}
			else if(type == 'room') {
				if(target.className == 'rooms-dropdown__input') {
					target.classList.add('rooms-dropdown__input--expanded');
					target.parentElement.nextElementSibling.classList.add('rooms-dropdown__box--expended');
				}
				else if(target.className == 'rooms-dropdown__button') {
					target.previousElementSibling.classList.toggle('rooms-dropdown__input--expanded');
					target.parentElement.nextElementSibling.classList.toggle('rooms-dropdown__box--expended');
				}
			}
	
			if(target.className == 'cart-control__button cart-control__button--reduce') {
				target.nextElementSibling.value = (target.nextElementSibling.value > target.nextElementSibling.min) ? 
				--target.nextElementSibling.value : target.nextElementSibling.value; 
				const [input, ...lowdown] = block.getElementsByTagName('input');
				if(type == 'guest') calcGuestsWriteInput(input, lowdown);
				else if(type == 'room') calcRoomsWriteInput(input, lowdown);
				
			}
			if(target.className == 'cart-control__button cart-control__button--add') {
				target.previousElementSibling.value = (target.previousElementSibling.value < target.previousElementSibling.max) ? 
				++target.previousElementSibling.value : target.previousElementSibling.value; 
				const [input, ...lowdown] = block.getElementsByTagName('input');
				if(type == 'guest') calcGuestsWriteInput(input, lowdown);
				else if(type == 'room') calcRoomsWriteInput(input, lowdown);
			}
		}
	}
}