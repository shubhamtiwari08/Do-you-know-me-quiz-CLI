var readlinesync = require("readline-sync")
var score = 0

var Highscores = [
    {
        name: "shubham",
        score: 5
    },
    {
        name: "rudra",
        score: 4
    }
]


function Welcome() {
    var userName = readlinesync.question("what is your name? ")
    console.log("welcome " + userName + ",Do you know shubham?")
    console.log("____________________")
}


function play(question, answer) {
    var userAnswer = readlinesync.question(question)
    if (userAnswer === answer) {
        console.log("yes! you are right !")
        score = score + 1

    } else {
        console.log("you are wrong !")
        score = score - 1
    }
    console.log("your score is " + score)
    console.log("____________")
}

var questions = [
    {
        question: "what is my second name ?",
        answer: "tiwari"
    },
    {
        question: "where do i live ?",
        answer: "bangalore"
    },
    {
        question: "what was my college name ?",
        answer: "indian academy"
    },
    {
        question: "which is my favourite vegetable?",
        answer: "bhindi"
    },
    {
        question: "if i had a pet, what would it be?",
        answer: "cat"
    }
]

function game() {
    for (i = 0; i < questions.length; i++) {
        var Currentquestion = questions[i];
        play(Currentquestion.question, Currentquestion.answer)
    }
}

function showscores() {
    console.log("yay ! you scored : " + score)
    console.log("highscores are by:" + Highscores[0].name + "(" +
        Highscores[0].score + ")", Highscores[1].name + "(" +
        Highscores[1].score + ")")
    console.log("send me a screenshot if you have beaten the highest score!, i will update the score.")
}

Welcome()
game()
showscores()
