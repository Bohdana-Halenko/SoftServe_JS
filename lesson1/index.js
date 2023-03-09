//Tast2
console.log("Bohdana");


//Task3
// Оголошення двох змінних
let age;
let name;

// Присвоєння значень змінним
age = 20;
name = "Ann";

// Виведення значень змінних в консоль
console.log("Значення змінної age: ", age);
console.log("Значення змінної name: ", name);

// Копіювання значення змінної x в змінну y
name = age;

// Виведення нових значень змінних в консоль
console.log("Нове значення змінної age: ", age);
console.log("Нове значення змінної name: ", name);


//Task4
const obj = {
  myString: "Hello",
  myNumber: 2,
  myBoolean: false,
  myUndefined: undefined,
  myNull: null
};

console.log(obj);


//Task5
let isAdult = confirm("Ви досягли повнолітнього віку?");

console.log(isAdult);


//Task6
const firstName = "Bohdana";
const lastName = "Halenko";
const group = "06.03.2023 JS Fundamental";
const birthYear = 1997;
const isMarried = true;
console.log(typeof birthYear, typeof isMarried, typeof firstName, typeof lastName, typeof group);

const nullVariable = null;
const undefinedVariable = undefined;
console.log(typeof nullVariable, typeof undefinedVariable);


//Task7
const login = prompt("Please enter your login:");
const email = prompt("Please enter your email:");
const password = prompt("Please enter your password:");

const message = `Dear ${login}, your email is ${email}, your password is ${password}.`;
alert(message);


//Task8
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

document.write(`Seconds in an hour: ${secondsInHour}<br>`);
document.write(`Seconds in a day: ${secondsInDay}<br>`);
document.write(`Seconds in a month: ${secondsInMonth}<br>`);