// Task1
// let a;
// let b;
// let c;
// if (a < b && b < c) {
//     console.log("Висловлювання істинне");
//   } else {
//     console.log("Висловлювання хибне");
//   }


//Task2
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x - y + "test";
console.log(res4); // NaN
console.log(typeof res4); // ""number""


//Task3
let isAdult = prompt("Ви досягли повнолітнього віку? Введіть 'так' або 'ні'");

if (isAdult.toLowerCase() === 'так' || isAdult.toLowerCase() === 'yes') {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще надто молоді");
}


//Task4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let maxCount = 0;
let mostFrequent;
for (let i = 0; i < arr.length; i++) {
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    mostFrequent = arr[i];
  }
}

let newArr = arr.filter((elem) => elem !== mostFrequent);
console.log("data:", mostFrequent);
console.log("arr:", newArr);


//Task5
let a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
let b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
let c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data");
} else {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
    console.log(`Площа трикутника: ${area}`);
    if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        console.log("Трикутник прямокутний");
    } else {
        console.log("Трикутник не прямокутний");
    }
}


//Task5
// 6.1
// const now = new Date();
// const currentHour = now.getHours();

// if (currentHour >= 23 || currentHour < 5) {
//   console.log('Доброї ночі');
// } else if (currentHour >= 5 && currentHour < 11) {
//   console.log('Доброго ранку');
// } else if (currentHour >= 11 && currentHour < 17) {
//   console.log('Доброго дня');
// } else {
//   console.log('Доброго вечора');
// }

// 6.2
const now = new Date();
const currentHour = now.getHours();

switch (true) {
  case (currentHour >= 23 || currentHour < 5):
    console.log('Доброї ночі');
    break;
  case (currentHour >= 5 && currentHour < 11):
    console.log('Доброго ранку');
    break;
  case (currentHour >= 11 && currentHour < 17):
    console.log('Доброго дня');
    break;
  default:
    console.log('Доброго вечора');
    break;
}