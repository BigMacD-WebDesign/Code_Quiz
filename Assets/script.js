var buttonEl = document.querySelector("#start");
var timeElement = document.querySelector("#timer");
var startContainer = document.getElementById("game-content")
var questionDisplay = document.getElementById("questions");
var choice1 = document.getElementById("question1");
var choice2 = document.getElementById("question2");
var choice3 = document.getElementById("question3");
var choice4 = document.getElementById("question4");
var results = document.querySelector("#results");
var wins = 0;
var losses = 0;
var questions = [
    {
        question: "What is the base structure for web design?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "HTML"
    },
    {
        question: "What is the most complicated development language?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "JavaScript"
    },
    {
        question: "What is the base structure for web design?", 
        choices: ["HTML", "CSS", "JavaScript", "jQuery"],
        answers: "HTML"
    }
]
var questionCurrent = 0;




startContainer.style.display = "none";

buttonEl.addEventListener("click", function () {
    startContainer.style.display = "block";
    buttonEl.style.display = "none";
    displayQuestion();
});

function displayQuestion() {
    questionDisplay.textContent = questions[questionCurrent].question;
    choice1.innerHTML = questions[questionCurrent].choices[0];
    choice2.innerHTML = questions[questionCurrent].choices[1];
    choice3.innerHTML = questions[questionCurrent].choices[2];
    choice4.innerHTML = questions[questionCurrent].choices[3];
        choice1.setAttribute("value", questions[questionCurrent].choices[0]);
        choice2.setAttribute("value", questions[questionCurrent].choices[1]);
        choice3.setAttribute("value", questions[questionCurrent].choices[2]);
        choice4.setAttribute("value", questions[questionCurrent].choices[3]);
        choice1.onclick = userChoice;
        choice2.onclick = userChoice;
        choice3.onclick = userChoice;
        choice4.onclick = userChoice;
    
};

function userChoice () {
    var currentChoice = this.value 
    console.log(currentChoice);
    if (currentChoice === questions[questionCurrent].answers){
        wins++;
    } else {
        losses++;
    }
    if (questionCurrent < questions.length -1){
        questionCurrent++;
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults () {
    //hide game content div container. Add 1 more div container to dipslay results. Create a button to store high score in local storage.
    console.log(losses, wins);
}
