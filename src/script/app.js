"use strict";
//                    ================ Слайдер ================
import { nouislider } from "./vendors/nouislider";





//                    ================ Валидация форм ================
import Bouncer from "./vendors/bouncer";
var validate = new Bouncer("form");







//                    ================ Слайдер, для прокрутки картинок ================
import { tns } from "./vendors/tiny-slider";

const sliders = document.querySelectorAll('.room-slider')
if (sliders) {
  sliders.forEach((slider) => {
    tns({
      container: slider,
      items: 1,
      controls: true,
      controlsPosition: 'bottom',
      slideBy: 'page',
      "mouseDrag": true,
      navAsThumbnails: true,
      autoplay: false,
      "speed": 400,
      controlsText: ['', '']
    });
  })
}
//      Настройка перехода по ссылке, тупой выриант, сделал на время, чтобы просто работало
document.querySelectorAll('.tns-outer')
  .forEach((elem) => {
    elem.addEventListener('click', event => {
      if (event.target.classList.contains('tns-controls')) location.href = 'room.html'
    })
  })



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
    // Кнопки у input.Отстойно реализовано, знаю
    prim.element.querySelectorAll(".calendar__button")[0]
      .addEventListener('click', (e) => {
        e.stopPropagation()
        if (prim.datepickers[0].picker.active) {
          prim.datepickers[0].picker.hide()
        } else {
          prim.datepickers[0].picker.show()
        }
        if (prim.datepickers[1].picker.active) {
          prim.datepickers[1].picker.hide()
        }
      })
    prim.element.querySelectorAll(".calendar__button")[1]
      .addEventListener('click', (e) => {
        e.stopPropagation()
        if (prim.datepickers[1].picker.active) {
          prim.datepickers[1].picker.hide()
        } else {
          prim.datepickers[1].picker.show()
        }
        if (prim.datepickers[0].picker.active) {
          prim.datepickers[0].picker.hide()
        }
      })
  });

  document.querySelectorAll(".datepicker-dropdown")
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
document.querySelectorAll('.datepicker-controls')
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
  container.querySelectorAll('.day')
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