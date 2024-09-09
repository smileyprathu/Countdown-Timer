// script.js

let countdown;
let timeLeft;
const initialTime = 10 * 60; // Set initial time in seconds (10 minutes)
let isRunning = false;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const restartButton = document.getElementById("restartButton");

// Function to update the timer display
function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:00`;
    timerDisplay.textContent = displayTime;
}

// Function to start the countdown
function startCountdown() {
    if (isRunning) return; // Prevent multiple clicks
    isRunning = true;
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay(timeLeft);
        } else {
            clearInterval(countdown);
            isRunning = false;
        }
    }, 1000);
}

// Function to stop the countdown
function stopCountdown() {
    clearInterval(countdown);
    isRunning = false;
}

// Function to reset the countdown to the initial time
function resetCountdown() {
    stopCountdown();
    timeLeft = initialTime;
    updateDisplay(timeLeft);
}

// Function to restart the countdown from the current time left
function restartCountdown() {
    if (!isRunning && timeLeft > 0) {
        startCountdown();
    }
}

// Initialize timer
timeLeft = initialTime;
updateDisplay(timeLeft);

// Event listeners for the buttons
startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
resetButton.addEventListener("click", resetCountdown);
restartButton.addEventListener("click", restartCountdown);
