var firstRow = document.getElementById("first-row");
var secondRow = document.getElementById("second-row");
var thirdRow = document.getElementById("third-row");
var blocks = document.getElementsByTagName("td");
var button = document.getElementById("reset-button");
var message = document.getElementById("message");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

var counter = 1;
var oCounter = [];
var xCounter = [];

var winningCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function draw () {
  if ((counter % 2) !== 0) {
    this.innerHTML = "o";
    oCounter.push(parseInt(this.id, 10));
    message.innerHTML = "Player 2's turn";
  }
  else {
    this.innerHTML = "x";
    xCounter.push(parseInt(this.id, 10));
    message.innerHTML = "Player 1's turn";
  }

  counter++;
  victoryCheck();
}

function reset () {
  [].forEach.call(blocks, function (element) {
    element.innerHTML = "";
  });

  message.innerHTML = "Click on any boxes to start playing";

  counter = 1;
  oCounter = [];
  xCounter = [];
}

function victoryCheck () {
  for (var a = 0; a < winningCombo.length; a++) {
    var oWinningCounter = 0;
    for (var b = 0; b < 3; b++) {
      if (winningCombo[a][b] in oCounter) {
        oWinningCounter++;
        if (oWinningCounter === 3) {
          message.innerHTML = "Player 1 wins!";
        }
      }
    }
  }

  for (var c = 0; c < winningCombo.length; c++) {
    var xWinningCounter = 0;
    for (var d = 0; d < 3; d++) {
      if (winningCombo[c][d] in xCounter) {
        xWinningCounter++;
        if (xWinningCounter === 3) {
          message.innerHTML = "Player 2 wins!";
        }
      }
    }
  }
}

[].forEach.call(blocks, function (element) {
  element.addEventListener("click", draw);
});

button.addEventListener("click", reset);
