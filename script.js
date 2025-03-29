// Background images array
const backgrounds = [
    "url('https://www.w3schools.com/w3images/forest.jpg')",
    "url('https://www.w3schools.com/w3images/lights.jpg')",
    "url('https://www.w3schools.com/w3images/mountains.jpg')",
    "url('https://www.w3schools.com/w3images/snow.jpg')",
    "url('https://www.w3schools.com/w3images/underwater.jpg')"
];

// Function to change the background
function changeBackground() {
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById("game").style.backgroundImage = randomBackground;
}

// Event listener for background change button
document.getElementById("changeBackgroundBtn").addEventListener("click", changeBackground);

let score = 0;
let timeLeft = 30;
let timer;
let currentQuestion;

function startGame() {
    let timerInput = document.getElementById("timerInput");
    if (timerInput.value) {
        timeLeft = parseInt(timerInput.value);
    } else {
        timeLeft = 30;
    }

    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;

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

// Function to generate a random math problem
function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let operations = ["+", "-", "*", "/"];
    let randomOp = operations[Math.floor(Math.random() * operations.length)];

    let answer;
    if (randomOp === "+") {
        answer = num1 + num2;
    } else if (randomOp === "-") {
        answer = num1 - num2;
    } else if (randomOp === "*") {
        answer = num1 * num2;
    } else {
        num1 = num1 * num2; // Ensure the division is whole number
        answer = num1 / num2;
    }

    currentQuestion = { num1, num2, operator: randomOp, answer };
    document.getElementById("question").innerText = `${num1} ${randomOp} ${num2} = ?`;
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById("score").innerText = score;
        generateQuestion();
    }
    document.getElementById("answer").value = "";
}

function endGame() {
    document.getElementById("answer").disabled = true;
    alert(`Game Over! Your score: ${score}`);
}

// Function to print a worksheet
function printWorksheet() {
    let worksheet = "Math Practice Worksheet\n\n";
    for (let i = 0; i < 20; i++) {
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        let operations = ["+", "-", "*", "/"];
        let randomOp = operations[Math.floor(Math.random() * operations.length)];
        worksheet += `${num1} ${randomOp} ${num2} = _______\n`;
    }
    let newWindow = window.open("", "", "width=600,height=800");
    newWindow.document.write(`<pre>${worksheet}</pre>`);
    newWindow.print();
}

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});
