// Parse the minutes from the query string
const urlParams = new URLSearchParams(window.location.search);
const minutes = parseInt(urlParams.get('minutes'), 10) || 0;

let timer;
let timeRemaining = minutes * 60;
let isRunning = false;

// DOM Elements
const timeElement = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Update the timer display
function updateDisplay() {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  timeElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Start the timer
startBtn.addEventListener('click', () => {
  if (isRunning) return;
  isRunning = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  timer = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert('倒计时结束！');
    }
  }, 1000);
});

// Stop the timer
stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  timeRemaining = minutes * 60;
  updateDisplay();
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});

// Initialize the timer display
updateDisplay();
