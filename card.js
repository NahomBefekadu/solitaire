var spade = document.getElementById("spade");
var diamond = document.getElementById("diamond");
var club = document.getElementById("club");
var heart = document.getElementById("heart");
var moves = document.getElementById("winning");

document.addEventListener(
  "dragend",
  function (event) {
    if (spade.hasChildNodes()) {
      var wn1 = spade.children.length;
    }
    if (diamond.hasChildNodes()) {
      var wn2 = diamond.children.length;
    }
    if (club.hasChildNodes()) {
      var wn3 = club.children.length;
    }
    if (heart.hasChildNodes()) {
      var wn4 = heart.children.length;
    }
    var wn5 = wn1 + wn2 + wn3 + wn4;
    // reset the transparency
    console.log("Drag event has ended");
    console.log("Drag at", wn5);
    if (wn5 === 56) {
      //
      alert("Congratulations you won!\nYour score is " + numMove * 150);
      window.location.href = "win.html";
    }
  },
  false
);

document.addEventListener(
  "dblclick",
  function (event) {
    if (spade.hasChildNodes()) {
      var wn11 = spade.children.length;
    }
    if (diamond.hasChildNodes()) {
      var wn22 = diamond.children.length;
    }
    if (club.hasChildNodes()) {
      var wn33 = club.children.length;
    }
    if (heart.hasChildNodes()) {
      var wn44 = heart.children.length;
    }
    var wn55 = wn11 + wn22 + wn33 + wn44;
    // reset the transparency
    console.log("double click event has ended");
    console.log("double click at", wn55);
    if (wn55 === 56) {
      //
      alert("Congratulations you won!\nYour score is " + numMove * 150);
      window.location.href = "win.html";
    }
  },
  false
);
