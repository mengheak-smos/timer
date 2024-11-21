const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

const initialTime = 10; // 10 seconds
let time = initialTime;
let countdownInterval;
let isRunning = false;

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplay.innerHTML = `${minutes}:${seconds}`;
    if (time > 0) {
        time--;
    } else {
        clearInterval(countdownInterval);
        timeDisplay.innerHTML = '时间到!';
        startBtn.disabled = true;
        stopBtn.disabled = true;
        resetBtn.disabled = false;

        // Optional: Audio alert
        const audio = new Audio('path/to/alert.mp3');
        audio.play();
    }
}

function startTimer() {
    if (!isRunning) {
        countdownInterval = setInterval(updateCountdown, 1000);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function stopTimer() {
    clearInterval(countdownInterval);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(countdownInterval);
    time = initialTime;
    isRunning = false;
    timeDisplay.innerHTML = '0:10';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize button states
stopBtn.disabled = true;
resetBtn.disabled = true;
