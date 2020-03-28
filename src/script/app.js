'use strict'
// Слайдер
import {
	nouislider
} from './vendors/nouislider'

// Валидация форм
import Bouncer from './vendors/bouncer'
var validate = new Bouncer('form');

// Выпадающий список checkbox
// import {showCheckboxList} from './modules/showCheckboxList'
import {
	showCheckboxList
} from './modules/showCheckboxList'

// Отменить коппирование двойным кликом
import {
	undoUnMouseDown
} from './modules/undoUnMouseDown'

// Посчитать лайки
import {
	liked
} from './modules/liked'

// Работа с пагинацией
import {
	pagination
} from './modules/pagination'

// Функции навешивает события связанные с выпадающим списком комнат и гостей
import {
	setEventDropBox
} from './modules/setEventDropBox/setEventDropBox'

// Календарь
import {
	Datepickers
} from './vendors/datepicker-full'
const elem = document.getElementById('datepicker');
const datepicker = new DateRangePicker(elem, {
	orientation: 'bottom left',
	buttonClass: 'button-pick',
	weekStart: 1,
	todayHighlight: true,
	clearBtn: true,
	todayBtn: true,
	prevArrow: '',
	nextArrow: '',
});
// const corectElemLeft = document.querySelectorAll('.datepicker')
// const calendar = document.querySelector('.calendar')
// const input = document.querySelector('.datepicker-input')
// calendar.addEventListener('click', () => {
// 	if (corectElemLeft[1].style.left) {
// 		corectElemLeft[1].style.left = corectElemLeft[0].style.left
// 	}
// })
