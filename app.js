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
    document.getElementById("question1").className = "hidden";
    document.getElementById("question2").className = "";
}

function answer1_2() {
    wrongAnswers.push("Santiago");
    document.getElementById("question1").className = "hidden";
    document.getElementById("question2").className = "";
}

function answer1_3() {
    wrongAnswers.push("Guadalajara");
    document.getElementById("question1").className = "hidden";
    document.getElementById("question2").className = "";
}

function answer2_1() {
    wrongAnswers.push("PHP");
    document.getElementById("question2").className = "hidden";
    document.getElementById("question3").className = "";
}

function answer2_2() {
    wrongAnswers.push("Python");
    document.getElementById("question2").className = "hidden";
    document.getElementById("question3").className = "";
}

function answer2_3() {
    rightAnswers.push("javaScript");
    document.getElementById("question2").className = "hidden";
    document.getElementById("question3").className = "";
   
}

function answer3_1() {
    wrongAnswers.push("7");
    document.getElementById("question3").className = "hidden";
    document.getElementById("questionTittle").className = "hidden";
    
    showResults()
}

function answer3_2() {
    rightAnswers.push("5");
    document.getElementById("question3").className = "hidden";
    document.getElementById("questionTittle").className = "hidden";
    
    showResults()
}

function answer3_3() {
    wrongAnswers.push("4");
    document.getElementById("question3").className = "hidden";
    //document.getElementById("question3").className = "";
    document.getElementById("questionTittle").className = "hidden";
    
    showResults()
}

function showResults() {
    
    document.getElementById("showResults0").className = "";
    document.getElementById("resultsRight").innerHTML = rightAnswers;
    document.getElementById("resultsWrong").innerHTML = wrongAnswers;
}





