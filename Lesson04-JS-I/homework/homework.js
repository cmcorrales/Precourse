//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "cat";

//create a number variable, it an be any number
const newNum = 7;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 1;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x-y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y;
}

function areEqual(x, y) {
  if (x===y) {
    return true;
  }
  else {
    return false;
  }
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  else {
    return false;
  }
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

function square(num) {
  return num ** 2;
}

function cube(num) {
  return num ** 3;
}

function raiseToPower(num, exponent) {
  return num ** exponent;
}

function roundNumber(num) {
  Math.round(num);
}

function roundUp(num) {
  Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + "!";
}

function combineNames(firstName, lastName) {
  return 'firstName'+' '+'lastName';
}

function getGreeting(name) {
  return 'Hello ' + name;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return 1/2 * base * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
