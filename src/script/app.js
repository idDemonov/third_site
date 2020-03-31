"use strict";
// Слайдер
import { nouislider } from "./vendors/nouislider";

// Валидация форм
import Bouncer from "./vendors/bouncer";
var validate = new Bouncer("form");

// Календарь
import { Datepickers } from "./vendors/datepicker-full";
const elem = document.querySelectorAll(".datepicker");
if (elem) {
  elem.forEach(element => {
    new DateRangePicker(element, {
      orientation: "bottom left",
      buttonClass: "button-pick",
      weekStart: 1,
      todayHighlight: true,
      clearBtn: true,
      prevArrow: "",
      nextArrow: "",
      minDate: 12
    });
  });
}

// const corectElemLeft = document.querySelectorAll('.datepicker')
// const calendar = document.querySelector('.calendar')
// const input = document.querySelector('.datepicker-input')
// calendar.addEventListener('click', () => {
// 	if (corectElemLeft[1].style.left) {
// 		corectElemLeft[1].style.left = corectElemLeft[0].style.left
// 	}
// })
