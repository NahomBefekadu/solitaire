const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

document.documentElement.setAttribute("data-theme", "light");
function enableMute() {
  var audio = document.getElementById("audio");
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
