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

// Повторять цикл, пока ввод неверен
	// let number;
	// number = 0;
	// for (; number < 100; ) {
	// 	number = prompt('Введите число больше 100');
	// }

// Вывести простые числа
	// let num;
	// num = prompt('Введите число');

	// number:
	// for (let prime = 2; prime <= num; prime++) { // Для всех prime...

	// 	for (let j = 2; j < prime; j++) { // проверить, делится ли число..
	// 		if (prime % j == 0) continue number; // не подходит, берём следующее
	// 	}
	// 	alert( prime ); // простое число
	// }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
	// let num1 = prompt('Введите число 1');
	// let num2 = prompt('Введите число 2');
	// function min (num1,num2) {
	// 	if (num1 > num2) {
	// 		alert (`Число ${num2} меньше`)
	// 	} else if (num1 == num2) {
	// 		alert ("Числа равны")
	// 	} else if (num1 < num2) {
	// 		alert (`Число ${num1} меньше`)
	// 	} else {
	// 		alert ("Ошибка")
	// 	}
	// }
	// min(num1,num2);

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
	// let num1 = prompt('Введите число 1');
	// let num2 = prompt('Введите число 2');
	// function pow (num1,num2) {
	// 	let result = num1 ** num2;
	// 	alert(`Степень числа ${num1} и ${num2} равна ${sumNum}`)
	// }
	// pow(num1,num2);

	// if (n < 1) {
	// 	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
	// } else {
	// 	alert( pow(x, n) );
	// }

// Перепишите функцию, используя оператор '?' или '||'
	// let age = prompt('Введите ваш возраст');

	// function checkAge(age) {
	// 	(age > 18) ? return true; : return confirm('Родители разрешили?');
	// }
	// checkAge(age);


	// let age = prompt('Введите ваш возраст');

	// function checkAge(age) {
	// 	return (age > 18) || confirm('Родители разрешили?');
	// }
	// checkAge(age);

