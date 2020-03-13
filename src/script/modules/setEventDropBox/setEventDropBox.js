// Фукнция подсчитывает людей и записывает в инпут
import {calcGuestsWriteInput} from './calcGuestsWriteInput.js';
// Фукнция подсчитывает комнаты и записывает в инпут
import {calcRoomsWriteInput} from './calcRoomsWriteInput.js';

// setEventDropBox(document.querySelectorAll('.dropdown-choose--rooms'), 'room');
setEventDropBox(document.querySelectorAll('.dropdown-choose'));


// Функции навешивает события связанные с выпадающим списком комнат и гостей
function setEventDropBox(elements) {
	for(let block of elements) {
	
		block.onclick = (event) => {
			let target = event.target;
		
			target = (target.tagName == 'IMG') ? target.parentElement : target;
			if (target.tagName != 'BUTTON' && target.tagName != 'INPUT') return; 

			const buttonClear = event.currentTarget.querySelector('.dropdown-selection__clear');
			const input = event.currentTarget.querySelector('.dropdown-choose__input');
			const box = event.currentTarget.querySelector('.dropdown-choose__box')

			if(target.className == 'dropdown-choose__input') {
				target.classList.add('dropdown-choose__input--expanded');
				box.classList.add('dropdown-choose__box--expended');
			}
			else if(target.className == 'dropdown-choose__button') {
				input.classList.toggle('dropdown-choose__input--expanded');
				box.classList.toggle('dropdown-choose__box--expended');
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
				if(target.dataset.type == 'guest') calcGuestsWriteInput(input, lowdown, buttonClear);
				else if(target.dataset.type == 'room') calcRoomsWriteInput(input, lowdown);
				
			}

			if(target.className == 'dropdown-selection__clear dropdown-selection__clear--activ') {
				for (let input of event.currentTarget.querySelectorAll('.dropdown-item-control__quantity')) {
					buttonClear.classList.remove('dropdown-selection__clear--activ');
					input.value = 0
				}
				input.value = 'Сколько гостей'
			}
		}
	}
}