function NumArrayReverse() {
  var numArray = [];
  for (var i = 0; i < 5; i++) {
    numArray[i] = prompt("Enter number " + (i + 1));
  }

  var reversedNumbers = "Numbers in reverse order:<br>";
  for (var i = numArray.length - 1; i >= 0; i--) {
    reversedNumbers += numArray[i] + "<br>";
  }

  document.getElementById("NumArray").innerHTML = reversedNumbers;
}

function NumOfParticipants() {
  var numParticipants = prompt("Enter number of participants");
  var participants = [];

  for (var i = 0; i < numParticipants; i++) {
    participants[i] = prompt("Enter name of participant " + (i + 1));
  }

  participants.sort();

  var orderedList = "<ol>";
  for (var i = 0; i < participants.length; i++) {
    orderedList += "<li>" + participants[i] + "</li>";
  }
  orderedList += "</ol>";

  document.getElementById("Participants").innerHTML = orderedList;
}

function DogNames() {
  var dogNames = [];
  for (var i = 0; i < 5; i++) {
    dogNames[i] = prompt("Enter dog name " + (i + 1));
  }

  dogNames.sort().reverse();

  var unorderedList = "<ul>";
  for (var i = 0; i < dogNames.length; i++) {
    unorderedList += "<li>" + dogNames[i] + "</li>";
  }
  unorderedList += "</ul>";

  document.getElementById("Dogs").innerHTML = unorderedList;
}

function NumArray2() {
  var numArray = [];
  var i = 1;
  while (i != 0) {
    i = parseInt(prompt("Enter number: " + (numArray.length + 1)));
    if (i != 0) {
      numArray.push(i);
    }
  }

  numArray.sort(function (a, b) {
    return b - a;
  });

  var orderedNumbers = "Numbers from largest to smallest:<br>";
  for (var i = 0; i < numArray.length; i++) {
    orderedNumbers += numArray[i] + "<br>";
  }

  document.getElementById("Numbers").innerHTML = orderedNumbers;
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function DiceRandom() {
  var num = 0;
  var rolls = [];
  while (num != 6) {
    num = rollDice();
    rolls.push(num);
  }


  var unorderedList = "<ul>";
  for (var i = 0; i < rolls.length; i++) {
    unorderedList += "<li>" + rolls[i] + "</li>";
  }
  unorderedList += "</ul>";

  document.getElementById("Dice").innerHTML = unorderedList;
}

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function DiceRandomScale() {
  var sides = parseInt(prompt("Enter the number of sides on the dice"));
  var num = 0;
  var rolls = [];
  while (num != sides) {
    num = rollDice(sides);
    rolls.push(num);
  }

  var unorderedList = "<ul>";
  for (var i = 0; i < rolls.length; i++) {
    unorderedList += "<li>" + rolls[i] + "</li>";
  }
  unorderedList += "</ul>";

  document.getElementById("DiceScale").innerHTML = unorderedList;
}


function concat(strings) {
  var result = "";
  for (var i = 0; i < strings.length; i++) {
    result += strings[i];
  }
  return result;
}

function displayConcatenatedStrings() {
  var strings = ["Johnny", "DeeDee", "Joey", "Marky"];
  var concatenatedStrings = concat(strings);
  document.getElementById("ConcatenatedStrings").innerHTML = concatenatedStrings;
}
function even(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

function displayEvenNumbers() {
  var numbers = [2, 7, 4];
  var evenNumbers = even(numbers);
  console.log("Original array: ", numbers);
  console.log("Array of even numbers: ", evenNumbers);
}

function squareRoot(numbers) {
  var roots = [];
  for (var i = 0; i < numbers.length; i++) {
    roots.push(Math.sqrt(numbers[i]));
  }
  return roots;
}