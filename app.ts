let totScore = 0;

function fsubmit(answer) {


let correctAnswer = false;
let score=0;

switch (answer) {
  case 1 : let correctAnswerx= (<HTMLInputElement>document.getElementById("a3"))
if (correctAnswerx.checked === true) {correctAnswer = true; }
break;

  case 2 : correctAnswerx= (<HTMLInputElement>document.getElementById("b2"))
if (correctAnswerx.checked === true) {correctAnswer = true; }
break;

  case 3 : correctAnswerx= (<HTMLInputElement>document.getElementById("c1"))
if (correctAnswerx.checked === true) {correctAnswer = true; }

  break;

  case 4 : correctAnswerx= (<HTMLInputElement>document.getElementById("d4"))
  if (correctAnswerx.checked === true) {correctAnswer = true; }

break;

case 5 : correctAnswerx= (<HTMLInputElement>document.getElementById("e2"))
if (correctAnswerx.checked === true) {correctAnswer = true; }

break;
}

if (correctAnswer === true){
  score++;
  totScore++;
}

  if (score > 0) {
    alert("Correctomundo! Your total score is now " + totScore);
  }
  else {
    alert ("Nope! Your score is now " + totScore);
  }
 }
