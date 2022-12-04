let operation = "";
let firstNum = "";
let secondNum = "";
let ans = "";

const buttons = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear").addEventListener("click", () => {
  operation = "";
  firstNum = "";
  secondNum = "";
  ans = "";
  input.innerHTML = "";
});

const equals = document
  .querySelector(".equals")
  .addEventListener("click", () => {
    secondNum = input.innerHTML;
    ans = operate(parseInt(firstNum), parseInt(secondNum), operation);
    input.innerHTML = ans;
    firstNum = ans;
    ans = "";
    secondNum = "";
    console.log(ans);
  });

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
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return null;
      break;
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    //   if (operation == "") {
    //     firstNum = input.innerHTML;
    //     operation = operator.innerHTML;
    //     input.innerHTML = "";
    //   } else if (firstNum != "" && secondNum != "") {
    //     firstNum = operate(
    //       parseInt(firstNum),
    //       parseInt(secondNum),
    //       operator.innerHTML
    //     );
    //     input.innerHTML = firstNum;
    //   } else if (firstNum != "" && operation != "") {
    //     secondNum = input.innerHTML;
    //     input.innerHTML = "";
    //     console.log("Second Num: " + secondNum);
    //     console.log("Operation: " + operation);
    //   }

    if (firstNum != "") {
      input.innerHTML = "";
    } else {
      firstNum = input.innerHTML;
      input.innerHTML = "";
    }
    operation = operator.innerHTML;
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.innerHTML += button.value;
  });
});
