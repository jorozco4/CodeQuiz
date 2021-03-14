let timerEl = document.querySelector(".timer");
let quizGenerator = document.getElementById("quizTitle");
let viewResults = document.getElementById("result");
let quizSubmit = document.getElementById("submit");
let setTimer = document.getElementById("countdown");

//This will set out the timer to countdown from 20 seconds
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

//This sections holds the answers

let questionOne = {
  question: "In what year was javascript invented?",
  a: "1990",
  b: "1995",
  c: "2000",
  d: "2021",
  answer: "1995",
};

//This holds whether the answer come out correct or incorrect
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

//This sections holds the answers
let questionTwo = {
  question: "is javascript and java the same programming language?",
  a: true,
  b: false,
  answer: "false",
};

document.getElementById("question2-question").innerHTML = questionTwo.question;
document.getElementById("question2-A").innerHTML = questionTwo.a;
document.getElementById("question2-B").innerHTML = questionTwo.b;

//This sections holds the answers
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

//This sections holds the answers
let questionFour = {
  question: "What does DOM stand for?",
  a: "Document Object Mission",
  b: "Document Object Model",
  c: "Dominos Or Max Pizza",
  d: "Donuts or MacnChz",
  answer: "Document Object Model",
};

document.getElementById("question4-question").innerHTML = questionFour.question;
document.getElementById("question4-A").innerHTML = questionFour.a;
document.getElementById("question4-B").innerHTML = questionFour.b;
document.getElementById("question4-C").innerHTML = questionFour.c;
document.getElementById("question4-D").innerHTML = questionFour.d;

//This adds a comment underneath the questions verifying whether the answer is correct or incorrect
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

  $("#question2-A").click(function () {
    if (answerQuestion("false", "true")) {
      $("#q2-correct").show();
      $("#q2-wrong").hide();
    } else {
      $("#q2-correct").hide();
      $("#q2-wrong").show();
    }
  });

  $("#question2-B").click(function () {
    if (answerQuestion("false", "false")) {
      $("#q2-correct").show();
      $("#q2-wrong").hide();
    } else {
      $("#q2-correct").hide();
      $("#q2-wrong").show();
    }
  });

  $("#question3-A").click(function () {
    if (answerQuestion("false", "true")) {
      $("#q3-correct").show();
      $("#q3-wrong").hide();
    } else {
      $("#q3-correct").hide();
      $("#q3-wrong").show();
    }
  });

  $("#question3-B").click(function () {
    if (answerQuestion("false", "false")) {
      $("#q3-correct").show();
      $("#q3-wrong").hide();
    } else {
      $("#q3-correct").hide();
      $("#q3-wrong").show();
    }
  });

  $("#question4-A").click(function () {
    if (answerQuestion("1990", "1995")) {
      $("#q4-correct").show();
      $("#q4-wrong").hide();
    } else {
      $("#q4-correct").hide();
      $("#q4-wrong").show();
    }
  });

  $("#question4-B").click(function () {
    if (answerQuestion("1995", "1995")) {
      $("#q4-correct").show();
      $("#q4-wrong").hide();
    } else {
      $("#q4-correct").hide();
      $("#q4-wrong").show();
    }
  });

  $("#question4-C").click(function () {
    if (answerQuestion("1990", "1995")) {
      $("#q4-correct").show();
      $("#q4-wrong").hide();
    } else {
      $("#q4-correct").hide();
      $("#q4-wrong").show();
    }
  });

  $("#question4-D").click(function () {
    $("#q4-correct").hide();
    $("#q4-wrong").show();
  });

  $("#start").click(function () {
    $("#q1-section").show();
  });

  $("#question1-next").click(function () {
    $("#q1-section").hide();
    $("#q2-section").show();
  });

  $("#question2-next").click(function () {
    $("#q2-section").hide();
    $("#q3-section").show();
  });
  $("#question3-next").click(function () {
    $("#q3-section").hide();
    $("#q4-section").show();
  });
  $("#finish-quiz").click(function () {
    $("#q4-section").hide();
    $("#grading-section").show();
  });
});
