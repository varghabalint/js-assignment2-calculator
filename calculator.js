"use strict"; // I am using to deffine some errors

/* 
TASKS

1. add , subtract , multiply and divide
2. Create the functions: add() , subtract(), multiply() and divide()
3. Create the function operate(num1, num2) , then call add(), sybtract(), multiply() or divide()
4. Html includes buttons for each digit and "Equals"/"clear" button.
5. Create two screens to display the values
6. Numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9
7. Symbols: +, -, *, /, ., =, clear btn and delete btn
8. Keyboard support
9. The calculator should not evaluate more than a single pair of numbers at a time

*/

// HTML Elements

const firstScreen = document.querySelector("#firstScreen");
const secondScreen = document.querySelector("#secondScreen");

// Variables

let numberOne;
let numberTwo;
let symbol;

/* 

Function addNumber(num) => Write a number at the screen 

1. Add a number at the input.value
2. Declare the variable numberOne
3. Save the first number and the operate at the Second screen

*/

function addNumber(num) {
  secondScreen.value += num;
  if (
    secondScreen.value.includes("-") ||
    secondScreen.value.includes("+") ||
    secondScreen.value.includes("*") ||
    secondScreen.value.includes("/")
  ) {
    let numLength = secondScreen.value.length;
    numberOne = secondScreen.value.slice(0, numLength - 2);
    firstScreen.value = secondScreen.value.slice(0, numLength - 1);
    secondScreen.value = "";
    secondScreen.value += num;
  }
}

/* 

Function addOperate(sym) => Write the operator at the screen

1. Add an operator at the input value
2. Declare the variable symbol

*/

function addOperate(sym) {
  if (
    secondScreen.value.includes("-") ||
    secondScreen.value.includes("+") ||
    secondScreen.value.includes("*") ||
    secondScreen.value.includes("/")
  ) {
    return;
  } else if (firstScreen.value.length > 0) {
    return;
  } else if (secondScreen.value.length === 0) {
    return;
  }
  secondScreen.value += sym;
  symbol = sym;
}

/* 

Function addDecimals(dec) => Insert a decimal

1. Insert a decimal
2. Check if it has already a decimal
3. Check if the input is empty to do not allow insert first a decimal

*/

function addDecimal(dec) {
  if (secondScreen.value.includes(".")) {
    return;
  }
  if (secondScreen.value.length === 0) {
    return;
  }
  secondScreen.value += dec;
}

/*  

Function clearScreen() => Delete all the inputs value from the screens

*/

function clearScreen() {
  firstScreen.value = "";
  secondScreen.value = "";
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
}

/*  

Function deleteInput() => Delete the last value from the input

1. Deletes the last digit or symbol
2. Check if you have delete everything from the main screen to change it with the secondary screen

*/

function deleteInput() {
  let del = secondScreen.value.slice(0, -1);
  if (secondScreen.value.length === 1) {
    secondScreen.value = firstScreen.value;
    return (firstScreen.value = "");
  }
  return (secondScreen.value = del);
}

/* 

Function transform() => Transform a number to a deccimal number

1. Checks if the input is empty
2. Check if the input value is 0
3. Check if the input has any symbol
4. Transform method => number / 100

*/

function transform() {
  if (secondScreen.value.length === 0) {
    return;
  } else if (secondScreen.value === 0) {
    return;
  } else if (
    secondScreen.value.includes("+") ||
    secondScreen.value.includes("-") ||
    secondScreen.value.includes("*") ||
    secondScreen.value.includes("/")
  ) {
    return;
  }
  let input = secondScreen.value;
  return (secondScreen.value = input / 100);
}

/* 

Functions :

1. Function add(num1, num2) => return num1 + num2 and reset the variables // Result
2. Function subtract(num1, num2) => return num1 - num2 and reset the variables // Result
3. Function multiply(num1, num2) => return num1 * num2 and reset the variables // Result
4. Function divide(num1, num2) => return num1 / num2 and reset the variables // Result

*/

function add(add1, add2) {
  firstScreen.value = "";
  let total = add1 + add2;
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = total);
}

function subtract(sub1, sub2) {
  firstScreen.value = "";
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = sub1 - sub2);
}

function multiply(mul1, mul2) {
  firstScreen.value = "";
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = mul1 * mul2);
}

function divide(div1, div2) {
  firstScreen.value = "";
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  if (div1 === 0) {
    return (secondScreen.value = "");
  }
  return (secondScreen.value = div1 / div2);
}

/* 

Function operate() => Decide which function will follow to show you the result

1. Takes the variable symbol to decide the function
2. Transform the string "number" to an actauly number
3. Check if the process is correct to continue

*/

function operate() {
  if (firstScreen.value.length === 0) {
    return;
  }
  if (symbol === "+") {
    numberTwo = secondScreen.value;
    add(Number(numberOne), Number(numberTwo));
  } else if (symbol === "-") {
    numberTwo = secondScreen.value;
    subtract(Number(numberOne), Number(numberTwo));
  } else if (symbol === "*") {
    numberTwo = secondScreen.value;
    multiply(Number(numberOne), Number(numberTwo));
  } else if (symbol === "/") {
    numberTwo = secondScreen.value;
    divide(Number(numberOne), Number(numberTwo));
  }
}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (key >= "0" && key <= "9") {
    addNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    addOperate(key);
  } else if (key === "Enter" || key === "=") {
    operate();
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearScreen();
  } else if (key === "Backspace") {
    deleteInput();
  } else if (key === ".") {
    addDecimal(".");
  }
});
