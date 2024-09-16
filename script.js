function addNumbers(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

function subtractNums(...nums) {
  return nums.reduce((acc, curr) => acc - curr);
}

function multiplyNums(...nums) {
  return nums.reduce((acc, curr) => acc * curr);
}

function divideNums(...nums) {
  return nums.reduce((acc, curr) => acc / curr);
}

let num1 = "";
let operator = "";
let num2 = "";
let isOperatorClicked = false;

function operate(operator, ...nums) {
  switch (operator) {
    case "+":
      return addNumbers(...nums);
    case "-":
      return subtractNums(...nums);
    case "*":
      return multiplyNums(...nums);
    case "/":
      return divideNums(...nums);
    default:
      return "Invalid Operator";
  }
}

const displayResult = document.querySelector("#result");
const btns = document.querySelectorAll("button");
const clear = document.querySelector("#btnAc");
const delOne = document.querySelector("#btnDel");
const operatorButton = document.querySelectorAll("#operator");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isOperatorClicked) {
      num1 += button.value;
      displayResult.textContent = num1;
    } else {
      num2 += button.value;
      displayResult.textContent = num2;
    }
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    isOperatorClicked = true;
    operator = button.value;
    displayResult.textContent = "";
  });
});

clear.addEventListener("click", () => {
  displayResult.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorClicked = false;
});

delOne.addEventListener("click", () => {
  if (operator) {
    num2 = num2.slice(0, -1);
    displayResult.textContent = num2 || "";
  } else {
    num1 = num1.slice(0, -1);
    displayResult.textContent = num1 || "";
  }
});

const dotButton = document.querySelector("#btnDot");

dotButton.addEventListener("click", () => {
  if (!isOperatorClicked) {
    if (!num1.includes(".")) {
      num1 += num1 === "" ? "0." : ".";
      displayResult.textContent = num1;
    }
  } else {
    if (!num2.includes(".")) {
      num2 += num2 === "" ? "0." : ".";
      displayResult.textContent = num2;
    }
  }
});
