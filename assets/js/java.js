let timerEl = document.getElementById("timer");
let quizGenerator = document.getElementById("quiz");
let viewResults = document.getElementById("result");
let quizSubmit = document.getElementById("submit");

function generate() {}
function results() {}

let quizTitle = "This is my quiz";
document.getElementById("quizTitle").innerHTML = quizTitle;
// function myFunction() {
//   var x = document.createElement("start-button");
//   x.setAttribute("type", "number");
//   x.setAttribute("value", "12345");
//   document.body.appendChild(x);
// }

// function countdown() {
//     var timeLeft = 10;
//     var timeInterval = setInterval(function () {
//       timeLeft--;
//       timerEl.textContent = timeLeft + " seconds left ";
//       if (timeLeft === 0) {
//         clearInterval(timeInterval);

//       }
//     }, 1000);

//     document.querySelector('button1').addEventListener('click', function() {
//       var userAdjective = prompt("Please provide an Adjective");
//       alert (userAdjective);

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
    alert("Correct Answer");
  } else {
    alert("Wrong Answer");
  }
}

document.getElementById("question1-question").innerHTML = questionOne.question;
document.getElementById("question1-A").innerHTML = questionOne.a;
document.getElementById("question1-B").innerHTML = questionOne.b;
document.getElementById("question1-C").innerHTML = questionOne.c;
document.getElementById("question1-D").innerHTML = questionOne.d;

// let solveSolutions = [
//   {
//     question: "In what year was javascript invented?",
//     a: "1990",
//     b: "1995",
//     c: "2000",
//     d: "2021",
//     answer: "b",
//   },

//   {
//     question: "is javascript and java the same programming language?",
//     a: true,
//     b: false,
//     answer: "false",
//   },

//   {
//     question:
//       "Javascript can use the document.getElementById to acces an HTML element?",
//     a: true,
//     b: false,
//     answer: "true",
//   },
// ];

//gets the elements from the above questions.
function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  let test = get(results);
}
