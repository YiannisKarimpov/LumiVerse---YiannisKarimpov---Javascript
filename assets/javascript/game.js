



let lives = [3];

let LumiPoints = [50];

let gameState = {
    lives: 3,
    lumiPoints: 50
}

function updateHUD() {
    document.getElementById("lives").textContent = gameState.lives;
    document.getElementById("points").textContent = gameState.points;
}

document.getElementById("start-quiz").onclick = function () {
    alert ("Lets LumiQuiz!");
};

let allQuestions = [50];



