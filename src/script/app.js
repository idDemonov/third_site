"use strict";
//                    ================ Слайдер ================
import { nouislider } from "./vendors/nouislider";






//                    ================ Валидация форм ================
import Bouncer from "./vendors/bouncer";
var validate = new Bouncer("form");






//                    ================ Календари ================
import { Datepickers } from "./vendors/datepicker-full";
const calendars = document.querySelectorAll(".datepicker");

if (calendars) {
  calendars.forEach(calendar => {
    let prim = new DateRangePicker(calendar, {
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
  [...document.querySelectorAll(".datepicker-dropdown")]
    .forEach((calen) => hiddenNextDay(calen))
}

//                    ======== UI kit calendar ==========
// Исправления
const calendarUIPage = document.querySelector(".cards__calendar");
if (calendarUIPage) {
  new DateRangePicker(calendarUIPage, {
    orientation: "bottom left",
    buttonClass: "button-pick",
    weekStart: 1,
    todayHighlight: true,
    clearBtn: true,
    prevArrow: "",
    nextArrow: "",
    minDate: 12,
    container: '.cards__calendar'
  });

  // Календарь не нужно скрывать
  const container = calendarUIPage.querySelector('.datepicker');
  container.classList.add('active');
  hiddenNextDay(container);

  // После каждого изменения экрана, расположение календаря изменяется
  window.addEventListener(`resize`, () => {
    container.style.top = '0px';
  }, false);

  // Ненужный оступ для UI kit
  calendarUIPage.querySelector('.datepicker-dropdown')
    .style.paddingTop = '0px';
}

// По умолчанию календарь показывает на 7 дней больше, даже там где это не надо
[...document.querySelectorAll('.datepicker-controls')]
  .forEach((control) => {
    control.addEventListener('click', (event) => {
      if (event.target.classList.contains('next-btn')) {
        hiddenNextDay(event.currentTarget.offsetParent);
      }
      if (event.target.classList.contains('prev-btn')) {
        hiddenNextDay(event.currentTarget.offsetParent);
      }
    })
  })


function hiddenNextDay(container) {
  [...container.querySelectorAll('.day')]
    .forEach((day) => {
      day.style.display = null;
    })

  const nextDay = [...container.querySelectorAll('.next')]
  if (nextDay.length >= 7) {
    nextDay.reverse();
    for (let i = 0; i < 7; i++) {
      nextDay[i].style.display = 'none';
    }
  }
}