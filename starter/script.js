const studyDuration = document.getElementById("studyDuration");
const breakDuration = document.getElementById("breakDuration");
const startButton = document.getElementById("startButton");
const progressBar = document.getElementById("progressBar");
const sessionHistory = document.getElementById("sessionHistory");

let isStudySession = true;

let studySession;

document.addEventListener("DOMContentLoaded", function () {
  studySession = Math.floor(Object.keys(localStorage).length / 3);

  for (let i = 1; i <= studySession; i++) {
    let item = localStorage.getItem(`time${i}`);
    sessionHistory.innerText += `${item}\n`;
  }
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

function startSession() {
  let duration = isStudySession
    ? +studyDuration.value * 60
    : +breakDuration.value * 60;

  let barTimer = duration;

  if (duration === 0) {
    alert(
      isStudySession
        ? "Please enter study duration."
        : "Please enter break duration."
    );

    return;
  }

  if (isStudySession) {
    storeValues();
  }

  alert(
    isStudySession
      ? "Time to study!"
      : "Study session complete! Time for a break!"
  );

  let time = setInterval(function () {
    barTimer--;
    progressBar.style.width = ((duration - barTimer) / duration) * 100 + "%";

    if (barTimer < 0) {
      clearInterval(time);
      progressBar.style.width = "0%";
      isStudySession = !isStudySession;
      startSession();
    }
  }, 1000);
}

startButton.addEventListener("click", startSession);

// localStorage.clear();
