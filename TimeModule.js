var timer = document.getElementById("timer");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var id;
var value = "30:00";
startTimer(30, 00);

function startTimer(m, s) {
  if (m < 5) {
    timer.classList.add("flash1");
  }
  if (m < 2) {
    timer.classList.remove("flash1");
    timer.classList.add("flash2");
  }

  if (m <= 0 && s <= 0) {
    clearTimeout(id);
    window.location.href = "GameOver.html";
  }

  if (m < 10) {
    var testminute = "0" + m;
  } else {
    var testminute = m;
  }
  if (s < 10) {
    var testseconds = "0" + s;
  } else {
    var testseconds = s;
  }
  timer.textContent = testminute + ":" + testseconds;
  if (s == 0) {
    if (m == 0) {
      return;
    } else if (m != 0) {
      m = m - 1;
      s = 60;
    }
  }

  s = s - 1;
  id = setTimeout(function () {
    startTimer(m, s);
  }, 1000);
}

function pauseTimer() {
  value = timer.textContent;
  //pause.classList.add("Activated");
  //pause.innerHTML = "Paused";
  clearTimeout(id);
  alert("You have paused the game\nHit ok to resume.");
  resumeTimer();
}

function resumeTimer() {
  var t = value.split(":");
  //pause.classList.remove("Activated");
  //pause.innerHTML = "Pause";
  startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

function spaceKey(e) {
  if (e.key === " ") {
    if (pause.innerHTML === "Paused") {
      resumeTimer();
    } else {
      pauseTimer();
    }
  }
}
document.addEventListener("keydown", spaceKey, false);

pause.addEventListener("click", pauseTimer, false);

resume.addEventListener("click", resumeTimer, false);
