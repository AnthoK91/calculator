let numberArray = [];
let firstSavedNumber = "";
let secondSavedNumber = "";
let operator = "";
let result = "";



//Clear pops the last array number
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  numberArray.pop()
screen.innerHTML = numberArray.join('');
});

//Delete the array
const deleteArray = document.querySelector('#delete');
deleteArray.addEventListener('click', () => {
  numberArray = [];
firstSavedNumber = ""
secondSavedNumber = ""
screen.innerHTML = "";
})


const number = document.querySelectorAll('.normalButtons');
const screen = document.querySelector('.screen');
const firstNumberScreen = document.querySelector('.firstNumber');
const firstNumber = number.forEach((normalButtons) => {

  //Check for equals
    const equals = function () {
      if (secondSavedNumber === "") {
        numberArray.pop();
        secondSavedNumber = Number(numberArray.join(''));
        numberArray = [];
        operate(firstSavedNumber, operator, secondSavedNumber);
        secondSavedNumber = "";
      } else {
        numberArray.pop();
      }
    }
    // and for each one we add a 'click' listener
    normalButtons.addEventListener('click', () => {
    numberArray.push(normalButtons.innerHTML);

    if (/[+-/x]/.test(numberArray[numberArray.length - 1])) {
      if (firstSavedNumber != "") {
        operator = numberArray.pop();
      } else if (/[+-/x]/.test(numberArray[numberArray.length - 2])) {
        numberArray.pop();
      }
    }

    if (numberArray[numberArray.length - 1] === "=") {
      equals();
    }

    
    //check if an operator is used. If it is, don't show it and instead save the first number to a new array called 'FirstSavedNumber'. 
    // Then reset the numberArray and save the other results to secondSavedNumber
    if (/[^0-9]/.test(numberArray[numberArray.length - 1]) && numberArray[numberArray.length - 1] != "=") {
      if (firstSavedNumber === "") {
        operator = numberArray.pop();
        firstSavedNumber = Number(numberArray.join(''));
        screen.innerHTML = firstSavedNumber;
      numberArray = [];
      } 
    } else {
      screen.innerHTML = numberArray.join('');  
    }
  });
});

const operate = function (number1, operator, number2) {
  if (operator === "+") {
    result = number1 + number2;
    screen.innerHTML = result;
    firstSavedNumber = result;
    return result;
  } else if (operator === "-") {
    result = number1 - number2;
    screen.innerHTML = result;
    firstSavedNumber = result;
    return result;
  } else if (operator === "x") {
    result = number1 * number2;
    screen.innerHTML = result;
    firstSavedNumber = result;
    return result;
  } else if (operator === "/") {
    result = number1 / number2;
    screen.innerHTML = result;
    firstSavedNumber = result;
    return result;
    }
  }
