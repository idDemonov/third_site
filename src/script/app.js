'use strict'

// Выпадающий список checkbox
import './modules/showCheckboxList'


// Отменить коппирование двойным кликом
import './modules/undoUnMouseDown'

// Посчитать лайки
import './modules/liked'
// Работа с пагинацией
import './modules/pagination'

// Функции навешивает события связанные с выпадающим списком комнат и гостей
import './modules/setEventDropBox/setEventDropBox'




// Скрытие элемента при нажатии вне области
// let hamburger = document.querySelector('.rooms-dropdown__form');
// let menu = document.querySelector('.rooms-dropdown__box');

// const toggleMenu = () => {
//   menu.classList.toggle('rooms-dropdown__box--expended');
// }

// hamburger.addEventListener('click', e => {
//   e.stopPropagation();

//   toggleMenu();
// });

// document.addEventListener('click', e => {
//   let target = e.target;
//   let its_menu = target == menu || menu.contains(target);
//   let its_hamburger = target == hamburger;
//   let menu_is_active = menu.classList.contains('rooms-dropdown__box--expended');
  
//   if (!its_menu && !its_hamburger && menu_is_active) {
//     toggleMenu();
//   }
// })