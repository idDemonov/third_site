"use strict";

// Выпадающий список checkbox
// import {showCheckboxList} from './modules/showCheckboxList'
import { showCheckboxList } from "./modules/showCheckboxList";
showCheckboxList();

// Отменить коппирование двойным кликом
import { undoOnMouseDown } from "./modules/undoUnMouseDown";
undoOnMouseDown();

// Посчитать лайки
import { liked } from "./modules/liked";
liked();

// Работа с пагинацией
import { Pagination } from "./modules/pagination";
new Pagination(15);

// Функции навешивает события связанные с выпадающим списком комнат и гостей
import { setEventDropBox } from "./modules/setEventDropBox/setEventDropBox";
setEventDropBox(document.querySelectorAll(".dropdown-choose"));
