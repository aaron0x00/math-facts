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
let timerInput = document.getElementById("timerInput");

function startGame() {
    // Allow the user to set their own timer
    if (timerInput.value) {
        timeLeft = parseInt(timerInput.value);
    } else {
        timeLeft = 30; // Default to 30 seconds if no input
    }

    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;

    // Enable the answer input field when the game starts
    document.getElementById("answer").disabled = false;

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
    // Disable input when the game ends
    document.getElementById("answer").disabled = true;
    alert(`Game Over! Your score: ${score}`);
}

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});
