function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operation) {
  switch (operation) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      break;
  }
  return result;
}

let displayNum = []; // use array.join to display this

let firstNum;
let ans;

const buttons = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const operators = document.querySelectorAll(".operator");
const equals = document
  .querySelector(".equals")
  .addEventListener("click", () => {
    console.log(operate(9, 12, "+"));
  });

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    console.log(operator.innerHTML);
    input.innerHTML += 4; // this works
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.innerHTML += button.value;
  });
});
