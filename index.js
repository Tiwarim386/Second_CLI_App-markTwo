

const chalk = require('chalk')
var readLineSync = require("readline-sync")

var username = readLineSync.question("Hello Frend Chaai Peelo ! What's your Name? \n")
console.log(chalk.blue("Welcome To the Quiz! Le " + username+ " : Swagat Nahi karoge humara? \n" ))
console.log(chalk.bgBlue.underline("RULES OF THE GAME: (Aaiye iss khel ke niyam sunlete hai \n"));
console.log("1)To finish the quiz you need to answer all the questions.");
console.log("2)For every correct answer you will get 1 point and for every wrong answer 0.5 will be deducted from your score. (Pooja what is this behavior? \n");

console.log(chalk.bold("************************\n"));
console.log(chalk.magentaBright("Lets get Started. Jaldi karein subah panvel Nikalna hai \n"))

var score=0;

function play(question, answer,remark) {
  var userAnswer = readLineSync.question(chalk.cyan(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
  console.log(chalk.green("YAY! You're right!! Yeh sahi tha guru- Munna Bhaiya \n") + chalk.gray(remark) + "\n");
  console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
  score = score + 1
  }
else{
  console.log(chalk.red("BOO! You're wrong!! Hum aapse better expect kiye thy The correct Answer is ") + chalk.green(answer) + " \n" + chalk.gray(remark) + "\n")
  console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
  score=score-0.5;
  }
}

function showLeaderBoard(){
  if(score > 3){
    console.log(chalk.italic.cyan("Congrats you have beaten one of the leaderboards score.... Please send me screenshot to update you score in leaderboard..\n"));
  }
  console.log(chalk.underline.bgBlue("LeaderBoard"));
  console.log("***********************************");
  console.log("1.Player 1 -> 5 \n2.Player 2 -> 4.5 \n3.Player 3 -> 4 \n4.Player 4 -> 3.5 \n5.Player 5 -> 3");
}


var questionOne = {
  question:"What is Salman Khan's Favourite Subject ? \n ",
  answer:"Physics",
  remark:"Dil mein aata hu samajh mein nahi "
  }

var questionTwo = { 
  question:"Which Bollywood actress has struggled the most? \n",
  answer:"Ananya",
  remark:"Have you been in a Dharma Film before? Mai itni sundar hu mai kya karu! "
}

var questionThree= {
  question:"Which was the most popular name in 2020 ?\n",
  answer: "Binod",
  remark: " I am Binod. You are Binod. WE ARE BINOD. "
}
var questionFour = { 
  question:"Rasode mein kaun tha?  Come ON! You NEED to get this Right \n",
  answer:"Rashi",
  remark:"Tauba Tauba saara mood kharab Kardiya "
}

var questionFive= {
  question:"Which soup could actually be the tastiest but no one will know now? \n",
  answer: "Batsoup",
  remark: "Bulati hai magar jaane ka nahi"
}
var questionList = [questionOne, questionTwo, questionThree,questionFour,questionFive]

for(var i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i]
  play(currentQuestion.question, currentQuestion.answer,currentQuestion.remark)
}

console.log(chalk.cyan("Your Final Score is: " + score + "\n"))
showLeaderBoard();
console.log(chalk.magentaBright("Thanks for playing the quiz "+ username + "Alvida Phir milenge is khel mein Tab tak ke liye alvida shubhraatri Do gaz doori mask hai zaroori jab tak dawaai nahi tab tak dhilaai nahi \n"))