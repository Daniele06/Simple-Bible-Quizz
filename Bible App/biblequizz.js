// Bible Quizz
function bibleQuizz() {

    // Answers
    var correctAnswer = "Correct !";
    var wrongAnswer = "Wrong Answer :(";
    var goodAnswers = "0";


    var question1 = prompt("In the beginning was the Word, and the Word was with God, and the Word was God.", "What verse is it ?");

    // Display answer variable according to response
    if (question1 == "John 3:16") {
        alert(correctAnswer);
        goodAnswers++;
    } else {
        alert(wrongAnswer);
    }


    var question2 = prompt("Is it the book of revelation or revelations ?", "Type your answer here:");

    // Display answer variable according to response
    if (question2 == "Revelation") {
        alert(correctAnswer);
        goodAnswers++;
    } else {
        alert(wrongAnswer);
    }


    
    var question3 = prompt("What garden were Adam and Eve in?", "Type your answer here:");

    // Display answer variable according to response
    if (question3 == "Eden") {
        alert(correctAnswer);
        goodAnswers++;
    } else {
        alert(wrongAnswer);
    }

    // Results
    alert("You got " + goodAnswers + " out of 3 answers right !");
}