'use strict';
// let year; 
// year = prompt('Введите число', '');

// if (year > 0) {
// 	alert( '1, значение больше нуля' );
// } else if (year < 0) {
// 	alert( '-1, значение меньше нуля' );
// } else if (year == 0) {
// 	alert( '0, значение равно нулю' );
// } else {
// 	alert( 'Пиши правильно');
// }

// let result;
// let a = prompt('Число a');
// let b = prompt('Число b');
// result = (a + b < 4) ? 'Мало' :
// 	(a + b > 4) ? 'Много' :
// 	(a + b == 4) ? 'ДА' :
// 	'Какое необычное число!';


// let login = prompt('Логин?');
// let message;

// // if (login == 'Сотрудник') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }
// message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : 'Нет логина';
// alert( message );

// Напишите условие if для проверки, что значение переменной age находится в диапазоне 14 и 90 включительно.
	// let age;
	// age = prompt('Число');
	// if (age >= 14 && age <= 90) {
	// 	alert( age );
	// } else {
	// 	alert( 'Пиши правильно');
	// }

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
	// let age;
	// age = prompt('Число');
	// if (!(age >= 14 && age <= 90)) {
	// 	alert( age );
	// } else {
	// 	alert( 'Пиши правильно');
	// }

// Проверка логина
	// let login;

	// login = prompt('Введите ваш логин');

	// if (login == "Админ") {
	// 	let password = prompt("Введите ваш пароль")

	// 	if (password == "Я главный") {
	// 		alert( 'Здравствуйте!');
	// 	} else if (password == "" || password == null) {
	// 		alert( 'Отменено');
	// 	} else {
	// 	alert( 'Неверный пароль');
	// 	}

	// } else if (login == "" || login == null) {
	// alert( 'Отменено');
	// } 
	// else {
	// alert('Я вас не знаю');
	// }

// // Выведите чётные числа
// let i = prompt('Введите ваше число');
// for (; i <= 10; i++) {
// 	if (i % 2 == 0 ){
// 		alert( i );
// 	}
// }