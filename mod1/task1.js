console.log("I'm printing to the console!")

function askName() {
    var name = prompt("What is your name?");
    if (name != null) {
        document.querySelector("#name").innerHTML = 'Hello, ' + name + '!';
    }

}
function threeIntegers() {
    var num1 = parseInt(prompt("Enter first number"));
    var num2 = parseInt(prompt("Enter second number"));
    var num3 = parseInt(prompt("Enter third number"));
    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    var average = sum / 3;
    document.querySelector("#sum").innerHTML = 'Sum: ' + sum;
    document.querySelector("#product").innerHTML = 'Product: ' + product;
    document.querySelector("#average").innerHTML = 'Average: ' + average;
}

function sortingHat() {
    var name = prompt("What is your name?");
    var randnum = Math.floor(Math.random() * 4) + 1;
    var house;
  
    switch (randnum) {
      case 1:
        house = "Gryffindor";
        break;
      case 2:
        house = "Hufflepuff";
        break;
      case 3:
        house = "Ravenclaw";
        break;
      case 4:
        house = "Slytherin";
        break;
    }
    document.getElementById("house").innerHTML =
      name + ", you belong to " + house;
  }
  
function checkLeapYear() {
    var year = parseInt(prompt("Enter a year"));
    var message;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        message = year + " is a leap year.";
    }
    else {
        message = year + " is not a leap year.";
    }
    document.getElementById("leapYear").innerHTML = message;
}

function squareRoot() {
  var confirmation = confirm("Should I calculate the square root?")
  var message

  if (confirmation) {
    var number = parseInt(prompt("Give me a number"))
    if (number < 0) {
      message = "The square root of negative number is not defined";
    } else {
      var sqrt = Math.sqrt(number);
      message ="The square root of " + number + " is " + sqrt + ".";
    }
  } else {
    message = "the square root is not calculated";
  }
  document.getElementById("sqrtResult").innerHTML = message;
}

function rollDice() {
  var numberOfRolls = parseInt(prompt("Enter the number of rolls"));
  var total = 0;

  for (var i = 0; i < numberOfRolls; i++) {
    var roll = Math.floor(Math.random() * 6)+ 1;
    total += roll;
  }

  document.getElementById("diceResult").innerHTML = "The sum of the dice rolls is " + total + ".";
}

function listLeapYears() {
  var startYear = prompt("Enter start Year");
  var endYear = prompt("Enter end Year");
  var leapYears = "";

  for(var i = startYear; i <= endYear; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      leapYears += "<li>" + i + "</li>";
    }
  }

  document.getElementById("leapYears").innerHTML = leapYears;
}

function checkPrime() {
  var number = parseInt(prompt("Give me a number"))
  var isTrue = true;

  if (number < 2) {
    isTrue = false;
  } else {
    for(var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        isTrue = false;
        break;
      }
    }
  }
  var message = isTrue
    ? number + " is a prime number."
    : number + " is not a prime number.";
  document.getElementById("primeResult").innerHTML = message;
}

function calculateProbability() {
  var numDice = prompt("Enter the number of dice");
  var targetSum = prompt("Enter the target sum");
  var numTrials = 10000;
  var successfulTrials = 0;

  for (let i = 0; i < numTrials; i++) {
    var sum = 0;
    for (let j = 0; j < numDice; j++) {
      var roll = Math.floor(Math.random() * 6) + 1;
      sum += roll;
    }
    if (sum == targetSum) {
      successfulTrials++;
    }
  }

  var probability = (successfulTrials / numTrials) * 100;
  document.getElementById("probabilityResult").innerHTML =
    "Probability to get sum " +
    targetSum +
    " with " +
    numDice +
    " dice is " +
    probability.toFixed(2) +
    "%.";
}

