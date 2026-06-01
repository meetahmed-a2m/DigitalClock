let is24 = false;
let dark = false;
let running = true;

let interval = null;

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const startStopBtn = document.getElementById("startStopBtn");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = "";

  if (!is24) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }

  timeEl.textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") +
    ampm;

  dateEl.textContent = now.toDateString();
}

// START CLOCK
function startClock() {
  if (interval) clearInterval(interval);
  interval = setInterval(updateClock, 1000);
  updateClock();
}

// STOP CLOCK
function stopClock() {
  clearInterval(interval);
}

// TOGGLE 12/24
function toggleFormat() {
  is24 = !is24;
  updateClock();
}

// DARK MODE
function toggleDark() {
  dark = !dark;
  document.body.classList.toggle("dark");
}

// START / STOP
function toggleClock() {
  running = !running;

  if (running) {
    startClock();
    startStopBtn.innerText = "Stop";
  } else {
    stopClock();
    startStopBtn.innerText = "Start";
  }
}

// INIT
startClock();