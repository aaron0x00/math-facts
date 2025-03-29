let score = 0;
let timeLeft = 30;
let timer;
let currentQuestion;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;
    generateQuestion();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let operator = Math.random() > 0.5 ? '*' : '/'; // Randomly choose between multiplication and division
    let answer;

    if (operator === '*') {
        answer = num1 * num2;
        document.getElementById("question").innerText = `${num1} × ${num2} = ?`;
    } else {
        answer = num1 / num2;
        document.getElementById("question").innerText = `${num1} ÷ ${num2} = ?`;
    }

    currentQuestion = { num1, num2, operator, answer };
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById("answer").value);
    let feedback = document.getElementById("feedback");

    if (Math.abs(userAnswer - currentQuestion.answer) < 0.01) {
        score++;
        feedback.innerText = "Correct!";
        feedback.classList.remove("wrong");
        feedback.classList.add("correct");
        generateQuestion();
    } else {
        feedback.innerText = "Wrong!";
        feedback.classList.remove("correct");
        feedback.classList.add("wrong");
    }

    document.getElementById("score").innerText = score;
    document.getElementById("answer").value = "";
}

function endGame() {
    alert(`Game Over! Your score: ${score}`);
}

function changeBackground() {
    const backgrounds = [
        'https://www.w3schools.com/w3images/forest.jpg',
        'https://www.w3schools.com/w3images/ocean.jpg',
        'https://www.w3schools.com/w3images/mountains.jpg',
        'https://www.w3schools.com/w3images/snow.jpg',
    ];
    let randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.getElementById("game").style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}

document.getElementById("changeBackgroundBtn").addEventListener("click", changeBackground);

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});
