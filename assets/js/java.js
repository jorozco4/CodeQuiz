let timerEl = document.querySelector(".timer");
let quizGenerator = document.getElementById("quizTitle");
let viewResults = document.getElementById("result");
let quizSubmit = document.getElementById("submit");
let setTimer = document.getElementById("countdown");
///TRY AND CREATE AN ARRAY HERE

let secondsLeft = 20;
let downloadTimer = setInterval(function () {
  if (secondsLeft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "TIME IS UP";
  } else {
    document.getElementById("countdown").innerHTML =
      secondsLeft + " seconds remaining";
  }
  secondsLeft -= 1;

  timerEl.textContent = "";
  clearInterval(clearInterval);
  s;
  displayMessage();
}, 1000);

function displayMessage() {
  let wordCount = 0;

  let msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

//This sections holds the answers inside the array

let questionOne = {
  question: "In what year was javascript invented?",
  a: "1990",
  b: "1995",
  c: "2000",
  d: "2021",
  answer: "1995",
};

//Create a function that takes in two parm. Parm1 is the selected option. And Parm2 is the correct answer. If parm1 is not equal to para2. Alery is wrong.

function answerQuestion(optionSelected, correctAnswer) {
  if (optionSelected == correctAnswer) {
    return true;
  } else {
    return false;
  }
}

document.getElementById("question1-question").innerHTML = questionOne.question;
document.getElementById("question1-A").innerHTML = questionOne.a;
document.getElementById("question1-B").innerHTML = questionOne.b;
document.getElementById("question1-C").innerHTML = questionOne.c;
document.getElementById("question1-D").innerHTML = questionOne.d;

let questionTwo = {
  question: "is javascript and java the same programming language?",
  a: true,
  b: false,
  answer: "false",
};

document.getElementById("question2-question").innerHTML = questionTwo.question;
document.getElementById("question2-A").innerHTML = questionTwo.a;
document.getElementById("question2-B").innerHTML = questionTwo.b;

let questionThree = {
  question:
    "Javascript can use the document.getElementById to acces an HTML element?",
  a: true,
  b: false,
  answer: "true",
};

document.getElementById("question3-question").innerHTML =
  questionThree.question;
document.getElementById("question3-A").innerHTML = questionThree.a;
document.getElementById("question3-B").innerHTML = questionThree.b;

let questionFour = {
  question: "What does DOM stand for?",
  a: "Document Object Mission",
  b: "Document Object Model",
  c: "Dominos Or Max Pizza",
  d: "Donuts or MacnChz",
  answer: "Document Object Model",
};

//Create a function that takes in two parm. Parm1 is the selected option. And Parm2 is the correct answer. If parm1 is not equal to para2. Alery is wrong.

document.getElementById("question4-question").innerHTML = questionFour.question;
document.getElementById("question4-A").innerHTML = questionFour.a;
document.getElementById("question4-B").innerHTML = questionFour.b;
document.getElementById("question4-C").innerHTML = questionFour.c;
document.getElementById("question4-D").innerHTML = questionFour.d;

$(document).ready(function () {
  $("#question1-A").click(function () {
    if (answerQuestion("1990", "1995")) {
      $("#q1-correct").show();
      $("#q1-wrong").hide();
    } else {
      $("#q1-correct").hide();
      $("#q1-wrong").show();
    }
  });

  $("#question1-B").click(function () {
    if (answerQuestion("1995", "1995")) {
      $("#q1-correct").show();
      $("#test").hide();
      $("#q1-wrong").hide();
    } else {
      $("#q1-correct").hide();
      $("#q1-wrong").show();
    }
  });

  $("#question1-C").click(function () {
    if (answerQuestion("1990", "1995")) {
      $("#q1-correct").show();
      $("#q1-wrong").hide();
    } else {
      $("#q1-correct").hide();
      $("#q1-wrong").show();
    }
  });

  $("#question1-D").click(function () {
    $("#q1-correct").hide();
    $("#q1-wrong").show();
  });
});

//gets the elements from the above questions.
// function get(x) {
//   return document.getElementById(x);
// }

// function renderQuestion() {
//   let test = get(results);
// }
