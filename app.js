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
  firstNumber: 0,
  operator: 0,
  secondNumber: 0,
};

let sNum = parseFloat(numbers.secondNumber);
let fNum = parseFloat(numbers.firstNumber);

//adding event listener to all the buttons
//using event delegation
numbersContainer.addEventListener("click", (event) => {
  let clickedButton = event.target.innerHTML;
  if (numbers.firstNumber === 0 && isNaN(clickedButton)) {
    alert(`Please enter some numbers first!`);
  }

  if (!isNaN(clickedButton) && numbers.operator === 0) {
    fNum = fNum * 10 + parseFloat(clickedButton);
    numbers.firstNumber = fNum;
  } else if (numbers.operator === 0) {
    numbers.operator = clickedButton;
  } else if (!isNaN(clickedButton)) {
    sNum = sNum * 10 + parseFloat(clickedButton);
    numbers.secondNumber = sNum;
  } else if (numbers.secondNumber && clickedButton === "=") {
    checkResult(clickedButton);
  }
});

function checkResult(clickedButton) {
  if (numbers.secondNumber && clickedButton === "=") {
    let sNum = parseFloat(numbers.secondNumber);
    let fNum = parseFloat(numbers.firstNumber);
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
}

//adding event listener to the clear button
resetButton.addEventListener("click", () => {
  resultScreen.innerHTML = "";
  for (let key in numbers) {
    numbers[key] = 0;
  }
  [sNum, fNum] = [0, 0];
});
