var username = "";
var rightAnswers = [];
var wrongAnswers = [];

document.getElementById("enteredName").addEventListener("click", function () {
    username = document.getElementById("username").value;
    document.getElementById("getUsername").className = "hidden";
    document.getElementById("demo").innerHTML = "Bienvenida " + username;
    document.getElementById("wantToPlay").className = "";

});

function startGame() {
    username = document.getElementById("username").value;
    document.getElementById("wantToPlay").className = "hidden";
    document.getElementById("questionTittle").innerHTML = "Genial " + username + ", comencemos";
    document.getElementById("question1").className = "";
    
}

function endGame(){
    document.getElementById("goodBye").innerHTML="<h1 class='despedida'>JUGAREMOS PARA LA PROXIMA!</h1>";//*
    document.getElementById("wantToPlay").className= "hidden";
}


function answer1_1() {
    rightAnswers.push("Lima");

    hideAndShow("question1", "question2");
}

function answer1_2() {
    wrongAnswers.push("Santiago");
    
    hideAndShow("question1", "question2");
}

function answer1_3() {
    wrongAnswers.push("Guadalajara");
    
    hideAndShow("question1", "question2");
}

function answer2_1() {
    wrongAnswers.push("PHP");
    
    hideAndShow("question2", "question3");
}

function answer2_2() {
    wrongAnswers.push("Python");
    
    hideAndShow("question2", "question3");
}

function answer2_3() {
    rightAnswers.push("javaScript");
    
    hideAndShow("question2", "question3"); 
}

function answer3_1() {
    wrongAnswers.push("7");
    
    showResults()
}

function answer3_2() {
    rightAnswers.push("5");
    
    showResults()
}

function answer3_3() {
    wrongAnswers.push("4");
    
    showResults()
}

function showResults() {
    hideAndHide("question3", "questionTittle");

    document.getElementById("showResults0").className = "";
    document.getElementById("resultsRight").innerHTML = rightAnswers;
    document.getElementById("resultsWrong").innerHTML = wrongAnswers;
}

function hideAndShow(hideElementName, showElementName) {
    document.getElementById(hideElementName).className = "hidden";
    document.getElementById(showElementName).className = "";
}

function hideAndHide(hideElementName, showElementName) {
    document.getElementById(hideElementName).className = "hidden";
    document.getElementById(showElementName).className = "hidden";
}



