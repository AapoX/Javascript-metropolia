console.log("I'm printing to console");

function askName() {
  var name = prompt("What is your name?");
  if (name != null) {
    document.getElementById("greeting").innerHTML = "Hei " + name;
  }
}

function askInt() {
  var num1 = Number(prompt("Give me a number"));
  var num2 = Number(prompt("Give me another number"));
  var num3 = Number(prompt("Give me a third number"));

  var sum = num1 + num2 + num3;
  var product = num1 * num2 * num3;
  var average = sum / 3;

  document.getElementById("sum").innerHTML = "Sum: " + sum;
  document.getElementById("product").innerHTML = "Product: " + product;
  document.getElementById("average").innerHTML = "Average: " + average;
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
    name + ", Sinä kuullut " + house + "iin!";
}

function checkLeapYear() {
  var year = prompt("Enter a year");
  var message;

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    message = year + " is a leap year.";
  } else {
    message = year + " is not a leap year.";
  }

  document.getElementById("leapYear").innerHTML = message;
}

function calculateSqrt() {
  var confirmation = confirm("Should I calculate the square root?");
  var message;

  if (confirmation) {
    var number = prompt("Enter a number");
    if (number < 0) {
      message = "The square root of a negative number is not defined.";
    } else {
      var sqrt = Math.sqrt(number);
      message = "The square root of " + number + " is " + sqrt + ".";
    }
  } else {
    message = "The square root is not calculated.";
  }

  document.getElementById("sqrtResult").innerHTML = message;
}

function rollDice() {
  var numRolls = prompt("Enter the number of dice rolls");
  var total = 0;

  for (var i = 0; i < numRolls; i++) {
    var roll = Math.floor(Math.random() * 6) + 1;
    total += roll;
  }

  document.getElementById("diceResult").innerHTML =
    "The sum of the dice rolls is " + total + ".";
}

function listLeapYears() {
  var startYear = prompt("Enter the start year");
  var endYear = prompt("Enter the end year");
  var leapYears = "";

  for (var year = startYear; year <= endYear; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      leapYears += "<li>" + year + "</li>";
    }
  }

  document.getElementById("leapYears").innerHTML = leapYears;
}

function checkPrime() {
  var number = prompt("Enter a number");
  var isPrime = true;

  if (number < 2) {
    isPrime = false;
  } else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  var message = isPrime
    ? number + " is a prime number."
    : number + " is not a prime number.";
  document.getElementById("primeResult").innerHTML = message;
}

function calculateProbability() {
  var numDice = prompt("Enter the number of dice");
  var targetSum = prompt("Enter the target sum");
  var numTrials = 10000;
  var successfulTrials = 0;

  for (var i = 0; i < numTrials; i++) {
    var sum = 0;
    for (var j = 0; j < numDice; j++) {
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
