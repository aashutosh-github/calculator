const numbersContainer = document.querySelector(".numbersContainer");
const resultScreen = document.querySelector(".displayScreen");
const resetButton = document.querySelector(".resetButton");

let expressionString = "";

function reset() {
  expressionString = "";
  resultScreen.innerText = "";
}

//adding event listener to all the buttons
//using event delegation
numbersContainer.addEventListener("click", (event) => {
  if (expressionString.length === 0 && event.target.innerText === "=") {
    alert(`Please enter a valid mathematical expression!`);
  } else if (event.target.innerText === "=") {
    resultScreen.innerText = eval(expressionString);
  } else {
    expressionString += event.target.innerText;
    resultScreen.innerText = expressionString;
  }
});

resetButton.addEventListener("click", reset);
