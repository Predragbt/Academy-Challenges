const studyDuration = document.getElementById("studyDuration");
const breakDuration = document.getElementById("breakDuration");
const startButton = document.getElementById("startButton");
const progressBar = document.getElementById("progressBar");
const sessionHistory = document.getElementById("sessionHistory");

let isStudySession = true;

let studySession;

function displayHistory() {
  for (let i = 1; i <= studySession; i++) {
    let item = localStorage.getItem(`time${i}`);
    sessionHistory.innerText += `${item}\n`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  studySession = Math.floor(Object.keys(localStorage).length / 3);

  displayHistory();
});

function storeValues() {
  const currentStudyDuration = studyDuration.value;
  const currentBreakDuration = breakDuration.value;

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();
  let hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  if (hours === 24) {
    hours = `${12}:${minutes}:${seconds} AM`;
  } else if (hours === 12) {
    hours = `${12}:${minutes}:${seconds} PM`;
  } else if (hours > 12) {
    hours = `${hours - 12}:${minutes}:${seconds} PM`;
  } else {
    hours = `${hours}:${minutes}:${seconds} AM`;
  }

  studySession++;

  localStorage.setItem(`studySession${studySession}`, currentStudyDuration);
  localStorage.setItem(`breakSession${studySession}`, currentBreakDuration);
  localStorage.setItem(
    `time${studySession}`,
    `Date: ${month}/${day}/${year}, Time: ${hours}, Study: ${currentStudyDuration} minutes, Break: ${currentBreakDuration} minutes`
  );
}

let timerRunning = false;
let intervalId = null;
let duration = 0;
let barTimer = 0;

function startTimer() {
  intervalId = setInterval(function () {
    barTimer--;
    console.log(barTimer);
    progressBar.style.width = ((duration - barTimer) / duration) * 100 + "%";

    if (!isStudySession && barTimer === 0) {
      storeValues();
    }

    if (barTimer === -1) {
      clearInterval(intervalId);
      progressBar.style.width = "0%";
      isStudySession = !isStudySession;
      startSession();
    }
  }, 1000);
}

function startSession() {
  if (timerRunning) {
    clearInterval(intervalId);
    progressBar.style.width = "0%";
  }

  const studyDurationValue = +studyDuration.value;
  const breakDurationValue = +breakDuration.value;

  if (
    studyDurationValue <= 0 ||
    breakDurationValue <= 0 ||
    !Number.isInteger(studyDurationValue) ||
    !Number.isInteger(breakDurationValue)
  ) {
    alert("Please enter valid minutes for Study and Break Durations.");
    return;
  }

  duration = isStudySession ? studyDurationValue * 60 : breakDurationValue * 60;
  barTimer = duration;

  sessionHistory.innerText = "";
  displayHistory();

  alert(
    isStudySession
      ? "Time to study!"
      : "Study session complete! Time for a break!"
  );

  startTimer();

  timerRunning = true;
}

startButton.addEventListener("click", startSession);

// localStorage.clear();
