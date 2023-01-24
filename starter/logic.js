// ingredients and buckets

var questionsTag = document.getElementById("questions")
var questionTitle = document.getElementById("questions-title")
var questionChoices = document.getElementById("questions-choises")
var startButton = document.getElementById("start")
var finalScore = document.getElementById("final-score")
var userInitials = document.getElementById("initials")

// Create a code quiz that contains the following requirements: Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.

// // Create a code quiz that contains the following requirements:

//   * Questions contain buttons for each answer. the DOM manipulation... appending Child to the questions ID html element... createElement('div') - like the to do list activity
//   * When answer is clicked, the next question appears - if else, or a for / while loop?
//   * If the answer clicked was incorrect then subtract time from the clock - set timer has been started
// * The quiz should end when all questions are answered or the timer reaches 0. - for or while loop 
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score - prompt? local storage - JSON.stringify and JSON.parse
  
// * A start button that when clicked a timer starts and the first question appears. addEventListener
startButton.addEventListener("click", function (evt) {
evt .preventDefault()
startScreen.setAttribute("class", "hide") displayQuestion ()
} )
function displayQuestion() {
function timerLogic() {
var time = 100
var countdown = setInterval (function () {
if (time === 0) H
clearInterval (countdown)
time.textContent = time
time_-
},1000)
}

function timerLogic() {
  var time = 100
  var countdown = setInterval (function () {
  if(time === 0) {
  clearInterval (countdown)
  }
  time.textContent = time
  time-
  },1000)
  }
timerLogic()

////



var questionsTag = document. getElementById('questions')
var questionTitle = document .getElementById('questions-title')
var questionChoices = document.getElementById('questions-choices')
var timer = document.getElementById(`timer`)

questions. forEach (function (question)

var startButton = document. getElementById('start' )
startButton.addEventListener('click', function (evt) {
evt.preventDefault ()
strartScreen.

startButton. addEventlistener('click', function (evt) {
  evt.preventDefault ()
  startScreen. setAttribute ('class', 'hide') displayQuestion ()
  })

  function displayQuestion (questionIndex){
      // unhide question section
  // render the first question in the array
  // render choices
  // if choiceClick and answer are equal
  // display feedback - unhide feedback and show.
  // displayquestion(next@ustionInde
  // if choiceClick and answer are not equal
  // display feedback - unhide feedback and show.
  }

  displayQuestion()
// do timer logic

function displayQuestion (questionIndex) {
// unhide question section
// render the first question in the array
// render choices
/ if choiceClick and answer are equal
- display feedback - unhide feedback and show.
displayquestion(nextQustionIndex)
// if choiceClick and answer are not equal
display feedback - unhide feedback and show.
- displayquestion (nextQustionIndex)
}
function timerLogic() (
// set initial value - 100
// create an interval
var countdown = setInterval(function() {

})

function timerLogic() (
  // set initial value - 100
  // create an interval
  var time = 100
  var countdown = setInterval (function () {
  if (time)
  clearInterval (time)
  timer.textContent = time
  time--
  (1000)
)


if ((timerLargeSubraction = 'big' )) {
  timer = timer - 10
  timerLargeSubraction = 'none'
  time-1909)





//   # Module 6 Challenge Web APIs: Code Quiz

// Notes
// link the IDs with var button = button.querySelector
// event.localStorage
// addEventListener

// .clear

// click start button
// timer starts
// createElement
// variables for each question to count up the scores
// if or while 
// preventDefault

// have objects for the questions in questions.js with keys and values

// hide object... 
// append child
// .textContent

// local storage for the high score page
// stringify the stuff
// parse it 






// ## Your Task

// As you proceed in your journey to becoming a front-end web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

// To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework has taught you all the skills you need to succeed in this challenge.


// ## User Story

// ```
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// Create a code quiz that contains the following requirements: Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.

// // Create a code quiz that contains the following requirements:
// * A start button that when clicked a timer starts and the first question appears.
//   * Questions contain buttons for each answer. - like the to do list activity
//   * When answer is clicked, the next question appears - if else
//   * If the answer clicked was incorrect then subtract time from the clock - set timer has been started
// * The quiz should end when all questions are answered or the timer reaches 0. - for or while loop 
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score - prompt? local storage - JSON.stringify and JSON.parse
  
// ## Mock-Up

// The following animation demonstrates the application functionality:

// ![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](./assets/08-web-apis-challenge-demo.gif)

// ## Grading Requirements

// This challenge is graded based on the following criteria: 

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the above acceptance criteria.

// ### Deployment: 32%

// * Application deployed at live URL.

// * Application loads with no errors.

// * Application GitHub URL submitted.

// * GitHub repository that contains application code.

// ### Application Quality: 15%

// * Application user experience is intuitive and easy to navigate.

// * Application user interface style is clean and polished.

// * Application resembles the mock-up functionality provided in the challenge instructions.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality README file with description, screenshot, and link to deployed application.


// ## Review

// You are required to submit BOTH of the following for review:

// * The URL of the functional, deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// ---
// © 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.