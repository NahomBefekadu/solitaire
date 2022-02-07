const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

document.documentElement.setAttribute("data-theme", "dark");
function enableMute() {
  var audio = document.getElementById("audio");
  var emoj = document.getElementById("audEmoj");
  if (!audio.muted) {
    emoj.innerHTML = "🔇";
  } else {
    emoj.innerHTML = "🔊";
  }
  audio.muted = !audio.muted;
}
function lightChange() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
}

function muteKey(e) {
  if (e.key === "m") {
    enableMute();
  }
}
document.addEventListener("keydown", muteKey, false);
