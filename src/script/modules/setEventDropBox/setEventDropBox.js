// Фукнция подсчитывает людей и записывает в инпут
import {calcGuestsWriteInput} from './calcGuestsWriteInput.js';
// Фукнция подсчитывает комнаты и записывает в инпут
import {calcRoomsWriteInput} from './calcRoomsWriteInput.js';

setEventDropBox(document.querySelectorAll('.dropdown-choose--rooms'), 'room');
setEventDropBox(document.querySelectorAll('.dropdown-choose'), 'guest');


// Функции навешивает события связанные с выпадающим списком комнат и гостей
function setEventDropBox(elements, type) {
	for(let block of elements) {
	
		block.onclick = (event) => {
			let target = event.target;
			target = (target.tagName == 'IMG') ? target.parentElement : target;
			if (target.tagName != 'BUTTON' && target.tagName != 'INPUT') return; 


			if(target.className == 'dropdown-choose__input') {
				target.classList.add('dropdown-choose__input--expanded');
				target.parentElement.nextElementSibling.classList.add('dropdown-choose__box--expended');
			}
			else if(target.className == 'dropdown-choose__button') {
				target.previousElementSibling.classList.toggle('dropdown-choose__input--expanded');
				target.parentElement.nextElementSibling.classList.toggle('dropdown-choose__box--expended');
			}


			if(target.className == 'dropdown-item-control__button') {
				if(target.dataset.action == 'button-reduce') {
					target.nextElementSibling.value = (target.nextElementSibling.value > target.nextElementSibling.min) ? 
					--target.nextElementSibling.value : target.nextElementSibling.value; 
				}
				else if(target.dataset.action == 'button-add') {
					target.previousElementSibling.value = (target.previousElementSibling.value < target.previousElementSibling.max) ? 
					++target.previousElementSibling.value : target.previousElementSibling.value; 
				}
				const [input, ...lowdown] = block.getElementsByTagName('input');
				if(type == 'guest') calcGuestsWriteInput(input, lowdown);
				else if(type == 'room') calcRoomsWriteInput(input, lowdown);
				
			}
		}
	}
}