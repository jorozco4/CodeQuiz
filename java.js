let timerEl = document.getElementById ("timer")
let quizGenerator = document.getElementById ('quiz')
let viewResults = document.getElementById ("result")
let optionA = document.getElementById ("a")
let optionA = document.getElementById ("b")
let optionA = document.getElementById ("c")
let optionA = document.getElementById ("d")

function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left ";
      if (timeLeft === 0) {
        clearInterval(timeInterval);
       
      }
    }, 1000);



let solveSolutions [
{
    question: "In what year was javascript invented?"
    a:"1990"
    b:"1995"
    c:"2000"
    d: "2021"
     answer: "b"
},

{
  question: "is javascript and java the same programming language?"
    a: true
    b: false
     answer: "false"
}
    ]
