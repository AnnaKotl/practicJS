// 1
// alert( 'Я - JavaScript!' );

// 2
// 'use strict';
// суворий режим

// 3
// let admin;
// let name;
// name = 'Іван';
// admin = name;
// alert(admin);

// 4
let planetEarth; // ourPlanetName
let currentUser; // currentUserName

// 5
// let name = "Ілля";
// alert( `привіт ${1}` );
// alert( `привіт ${"name"}` );
// alert( `привіт ${name}` );

// let name = "Ілля";
// // вираз — число 1
// alert( `привіт ${1}` ); // привіт 1
// // вираз є рядком "name"
// alert( `привіт ${"name"}` ); // привіт name
// // вираз є змінною, яка вбудовується
// alert( `привіт ${name}` ); // привіт Ілля

// 6
// nameUser = prompt("Whats ur name?");
// alert(`Hello, ${nameUser}!`);

// result = confirm("Are u redy?");
// alert("Let's go!");

// 7
// let a = 1, b = 1;
// alert( ++a ); // 2, префіксна форма повертає нове значення
// alert( b++ ); // 1, постфіксна форма повертає старе значення
// alert( a ); // 2, збільшується один раз
// alert( b ); // 2, збільшується один раз

// 8
// let a = 2;
// let x = 1 + (a *= 2); //a = 4 (помножиться на 2), x = 5 (обчислюється як 1 + 4)

//9
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaM
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

//10
// let a = prompt("Перше число?", 1);
// let b = prompt("Друге число?", 2);
// alert(+a + +b);
// ||
// let a = +prompt("Перше число?", 1);
// let b = +prompt("Друге число?", 2);
// alert(a + b);

//11
// 5 > 4 = true
// "ананас" > "яблуко" = false
// "2" > "12" = true
// undefined == null = true
// undefined === null = false
// null == "\n0\n" = false
// null === +"\n0\n" = false

//12
// let nameScript = "ECMAScript";
// let message = prompt("Яка офіційна назва JavaScript", "");
// if (message == nameScript) {
//     alert("Правильно!");
// } alert(`Не занєте? ${nameScript} !`);

// let value = prompt('Яка "офіційна" назва JavaScript?', '');
// if (value == 'ECMAScript') {
//     alert('Правильно!');
//     } else {
//     alert('Ви не знаєте? ECMAScript!');
// }

//13
// let message = prompt("Введіть число:");
// if (message > 0) {
//         alert(1);
//     } else if (message < 0) {
//         alert(-1);
//     } else if (message == 0) {
//         alert(0);
// };

// let value = prompt('Введіть число', 0);
// if (value > 0) {
//     alert( 1 );
//     } else if (value < 0) {
//     alert( -1 );
//     } else {
//     alert( 0 );
// }

//14
// let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }
// let result = (a + b < 4) ? 'Нижче' : 'Вище';

//15
// let message;
// if (login == 'Працівник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// let login = '';
// let message = prompt(`Login: ${login}`);
// (login == 'Працівник') ? alert('Привіт') :
//     (login == 'Директор') ? alert('Вітаю') :
//         (login == '') ? alert('Немає логіну') :
//             '';

// let message = (login == 'Працівник') ? 'Привіт' :
//   (login == 'Директор') ? 'Вітаю' :
//   (login == '') ? 'Немає логіну' :
//   '';

//16
// alert(alert(1) || 2 || alert(3)); //спочатку 1, потім 2.
// alert(alert(1) && alert(2));  //спочатку 1, а потім undefined.
// alert(null || 2 && 3 || 4); //null || 3 || 4 //виведе 3.

//17
// Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.

// // let age = 50;
// let age = 91;
// let age = 15;
// // let age = 0;
// if (age >= 14 && age <= 90) {
//     alert(`Hello! Your age is ${age}!`);
// } else alert(`Buy! Your age is ${age}!`);

//18
//Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
//Створіть два варіанти: перший з оператором НЕ !, другий — без нього.

// if (age < 14 || age > 90) {
//     alert(`Hello! Your age is ${age}!`);
// } else alert(`Buy! Your age is ${age}!`);

// if (!(age >= 14 && age <= 90)) {
//     alert(`Hello! Your age is ${age}!`);
// } else alert(`Buy! Your age is ${age}!`);

//19
// if (-1 || 0) alert( 'перший' ); //-1 виконається
// if (-1 && 0) alert( 'другий' ); //не виконається
// if (null || -1 && 1) alert( 'третій' ); //1 виконається

//20
// let userName = prompt('Хто там?', '');

// if (userName === 'Admin') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Господар') {
//     alert( 'Ласкаво просимо!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Скасовано' );
//   } else {
//     alert( 'Неправильний пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Скасовано' );
// } else {
//   alert( 'Я вас не знаю' );
// }

//21