// Add an array of background images
const backgrounds = [
    "url('https://www.w3schools.com/w3images/forest.jpg')",
    "url('https://www.w3schools.com/w3images/lights.jpg')",
    "url('https://www.w3schools.com/w3images/mountains.jpg')",
    "url('https://www.w3schools.com/w3images/snow.jpg')",
    "url('https://www.w3schools.com/w3images/underwater.jpg')"
];

// Function to change the background to a random one
function changeBackground() {
    // Pick a random background from the array
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    // Apply the new background to the game container
    document.getElementById("game").style.backgroundImage = randomBackground;
}

// Event listener for the button
document.getElementById("changeBackgroundBtn").addEventListener("click", changeBackground);

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
    currentQuestion = { num1, num2, answer: num1 + num2 };
    document.getElementById("question").innerText = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById("score").innerText = score;
        generateQuestion();
    }
    document.getElementById("answer").value = "";
}

function endGame() {
    alert(`Game Over! Your score: ${score}`);
}

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});
