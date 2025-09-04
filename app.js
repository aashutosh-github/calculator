const numbersContainer = document.querySelector(".numbersContainer");
const resultScreen = document.querySelector(".displayScreen");
const resetButton = document.querySelector(".resetButton");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//initialising the initial state of the
//calculator
let numbers = {
  firstNumber: null,
  operator: null,
  secondNumber: null,
};

//adding event listener to all the buttons
//using event delegation
numbersContainer.addEventListener("click", (event) => {
  let clickedButton = event.target.innerHTML;
  if (numbers.firstNumber === null && clickedButton === "=") {
    alert(`Please enter some numbers and operators first!`);
  }

  if (numbers.firstNumber === null) {
    numbers.firstNumber = clickedButton;
  } else if (numbers.operator === null) {
    numbers.operator = clickedButton;
  } else if (numbers.secondNumber === null) {
    numbers.secondNumber = clickedButton;
  }

  if (numbers.secondNumber && clickedButton === "=") {
    let sNum = parseFloat(numbers.secondNumber);
    let fNum = parseFloat(numbers.firstNumber);
    console.log([fNum, sNum]);
    let result;
    switch (numbers.operator) {
      case "+":
        resultScreen.innerHTML = add(fNum, sNum);
        break;
      case "-":
        resultScreen.innerHTML = subtract(fNum, sNum);
        break;
      case "x":
        resultScreen.innerHTML = multiply(fNum, sNum);
        break;
      case "/":
        resultScreen.innerHTML = divide(fNum, sNum);
        break;
      default:
        console.log(
          `Exiting the switch statement with no operation performed!`
        );
    }
  }
});

//adding event listener to the clear button
resetButton.addEventListener("click", () => {
  resultScreen.innerHTML = "";
  numbers.firstNumber = null;
  numbers.secondNumber = null;
  numbers.operator = null;
});
