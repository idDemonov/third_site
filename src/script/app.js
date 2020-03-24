'use strict'
// Слайдер
import {nouislider} from './vendors/nouislider'

// Валидация форм
import Bouncer from './vendors/bouncer'
var validate = new Bouncer('form');

// Выпадающий список checkbox
import {showCheckboxList} from './modules/showCheckboxList'

// Отменить коппирование двойным кликом
import {undoUnMouseDown} from './modules/undoUnMouseDown'

// Посчитать лайки
import {liked} from './modules/liked'

// Работа с пагинацией
import {pagination} from './modules/pagination'

// Функции навешивает события связанные с выпадающим списком комнат и гостей
import {setEventDropBox} from './modules/setEventDropBox/setEventDropBox'

// Календарь
// import './vendors/calendar-full'
// var validate = new Bouncer('form');