function addNumbers(...nums) {
  return nums.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
}

function subtractNums(...nums) {
  return nums.reduce((acc, curr) => parseFloat(acc) - parseFloat(curr));
}

function multiplyNums(...nums) {
  return nums.reduce((acc, curr) => parseFloat(acc) * parseFloat(curr));
}

function divideNums(...nums) {
return nums.reduce((acc, curr) => {
  if (parseFloat(curr) != 0) {
    return parseFloat(acc) / parseFloat(curr);
  } else {
    return "Can't do that, Baby"
  }
})
}
  

let num1 = "";
let operator = "";
let num2 = "";
let isOperatorClicked = false;
let result = "";

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
const equalBtn = document.querySelector("#btnEqual");

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

// operatorButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     isOperatorClicked = true;
//     operator = button.dataset.id;
//     displayResult.textContent = "";
//     count++;
//       if(count > 1) {

//         num1 = result;
//         let secoundOperation = operate(operator, num1, num2);
//         displayResult.textContent = secoundOperation;
//       }
//   });
// });

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (isOperatorClicked && num2) {
      result = operate(operator, num1, num2);
      displayResult.textContent = result;
      num1 = result;
      num2 = ""
    }
      operator = button.dataset.id;
      isOperatorClicked = true;
  });
});

clear.addEventListener("click", () => {
  displayResult.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorClicked = false;
  count = 0;
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

equalBtn.addEventListener("click", function () {
  if (num1 && num2 && operator) {
    result = operate(operator, num1, num2);
    displayResult.textContent = result;
    num1 = result;
    num2 = "";
    isOperatorClicked = false;
    operator = "";
  }
})