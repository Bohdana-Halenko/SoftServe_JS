//Task1
function sumSliceArray(arr, first, second) {
    if (
      isNaN(first) || isNaN(second) ||
      first >= arr.length || second >= arr.length ||
      first < 0 || second < 0
    ) {
      throw new Error("Невірні вхідні дані");
    }
    return arr[first] + arr[second];
  }
  try {
    const arr = [1, 2, 3, 4, 5];
    const result = sumSliceArray(arr, 2, 4);
    console.log(result); 
  
    const wrongResult = sumSliceArray(arr, 2, "4");
    console.log(wrongResult);
  } catch (error) {
    console.error(error.message);
  }


//Task2
function checkAge() {
  const name = prompt("Please enter your name:");
  let age;
  let status;

  try {
    age = parseInt(prompt("Please enter your age:"));
    if (isNaN(age)) {
      throw new TypeError("Age must be a number");
    }

    if (age < 18 || age > 70) {
      throw new RangeError("Age must be between 18 and 70");
    }

    status = prompt(
      "Please enter your status (admin, moderator, user):"
    ).toLowerCase();

    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Invalid status entered");
    }

    alert(`Welcome, ${name}! You can watch the movie.`);
  } catch (error) {
    if (error instanceof TypeError) {
      alert(`The field is empty! Please enter your age\n${error}`);
    } else if (error instanceof RangeError) {
      alert(`${error}\n${error.message}`);
    } else if (error instanceof EvalError) {
      alert(`Invalid status entered\n${error.message}`);
    } else {
      alert(`Something went wrong.\n${error}`);
    }
  }
}


//Task3
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('The parameters must be numbers!');
  }
  return width * height;
}

try {
  const width = '10';
  const height = 5;
  const area = calcRectangleArea(width, height);
  console.log(`The area of the rectangle is ${area}`);
} catch (error) {
  console.error(error.message);
}


//Task4
class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}

function showMonthName(month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }
  
  return months[month - 1];
}

try {
  console.log(showMonthName(5)); 
  console.log(showMonthName(14)); 
} catch (e) {
  if (e instanceof MonthException) {
    console.log(`${e.name} ${e.message}`);
  } else {
    throw e;
  }
}


//Task5
class UserException extends Error {
  constructor(message) {
    super(message);
    this.name = "UserException";
  }
}

function showUser(id) {
  if (id < 0) {
    throw new UserException("ID must not be negative: " + id);
  }
  return { id: id };
}

function showUsers(ids) {
  const result = [];
  for (let i = 0; i < ids.length; i++) {
    try {
      result.push(showUser(ids[i]));
    } catch (error) {
      console.error(error.message);
    }
  }
  return result;
}

console.log(showUsers([7, -12, 44, 22]));