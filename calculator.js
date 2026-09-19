"use strict";

const firstScreen = document.querySelector("#firstScreen");
const secondScreen = document.querySelector("#secondScreen");

let numberOne;
let numberTwo;
let symbol;

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

function addOperate(sym) {
  const current = secondScreen.value;
  const lastChar = current[current.length - 1];

  if (["-", "+", "*", "/"].includes(lastChar)) {
    secondScreen.value = current.slice(0, -1) + sym;
    symbol = sym;
    return;
  }
  if (current.length === 0) return;
  if (firstScreen.value.length > 0) {
    operate();
    if (secondScreen.value === "") return;
  }
  secondScreen.value += sym;
  symbol = sym;
}

function addDecimal(dec) {
  if (secondScreen.value.includes(".")) {
    return;
  }
  if (secondScreen.value.length === 0) {
    return;
  }
  secondScreen.value += dec;
}

function clearScreen() {
  firstScreen.value = "";
  secondScreen.value = "";
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
}

function deleteInput() {
  let del = secondScreen.value.slice(0, -1);
  if (secondScreen.value.length === 1) {
    secondScreen.value = firstScreen.value;
    return (firstScreen.value = "");
  }
  return (secondScreen.value = del);
}

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

function add(add1, add2) {
  firstScreen.value = "";
  let total = add1 + add2;
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = Number(total.toFixed(4)));
}

function subtract(sub1, sub2) {
  firstScreen.value = "";
  let total = sub1 - sub2;
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = Number(total.toFixed(4)));
}

function multiply(mul1, mul2) {
  firstScreen.value = "";
  let total = mul1 * mul2;
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  return (secondScreen.value = Number(total.toFixed(4)));
}

function divide(div1, div2) {
  firstScreen.value = "";
  let total = div1 / div2;
  let numberOne = "";
  let numberTwo = "";
  let symbol = "";
  if (div1 === 0) {
    return (secondScreen.value = "");
  }
  return (secondScreen.value = Number(total.toFixed(4)));
}

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
