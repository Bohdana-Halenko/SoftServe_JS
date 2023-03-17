//Task1
function compact(arr) {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr2.includes(arr[i])) {
        continue;
      }
      arr2.push(arr[i]);
    }
    return arr2;
  }


//Task2
function createArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }


//Task3
function printNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    for (let j = 1; j <= i - a + 1; j++) {
      console.log(i);
    }
  }
}


//Task4
function randArray(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      result.push(randomNumber);
    }
    return result;
  }


//Task5
function separateArrayByType(arr) {
    let numberArray = [];
    let stringArray = [];
    let arrayArray = [];
    
    arr.forEach(function(elem) {
      if (typeof elem === 'number') {
        numberArray.push(elem);
      } else if (typeof elem === 'string') {
        stringArray.push(elem);
      } else if (Array.isArray(elem)) {
        arrayArray.push(elem);
      }
    });
    
    return {
      numberArray: numberArray,
      stringArray: stringArray,
      arrayArray: arrayArray
    };
  }
  const arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
  const separatedArrays = separateArrayByType(arr);

  console.log(separatedArrays.numberArray);
  console.log(separatedArrays.stringArray);
  console.log(separatedArrays.arrayArray);


//Task6
function calc(a, b, op) {
    let result;
    switch(op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
        break;
    }
    return result;
  }


//Task7
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }