let suits = ["H", "C", "D", "S"];
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
var deckCopy = [];
let topDeck = [];
let topDeck2 = [];
let waste = [];
let joe = 0;
const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

createBoard();

async function createBoard() {
  //

  for (let j = 0; j < 21; j++) {
    await sleepNow(30);
    var newNode = document.createElement("div");
    newNode.className = "topCards";
    document.getElementById("dd").appendChild(newNode);
    //await sleepNow(1);
  }
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    deck.push([suits[i] + ranks[j]]);
  }
}

let ShuffleDeck = function (DCK) {
  let var1, tmp;

  for (let i = DCK.length - 1; i > 0; i--) {
    var1 = Math.floor(Math.random() * (i + 1));
    tmp = DCK[i];
    DCK[i] = DCK[var1];
    DCK[var1] = tmp;
  }
  return DCK;
};

deckCopy = ShuffleDeck(deck);
console.log("deck");
console.log(deck);
topDeck = deckCopy;

for (let i = 0; i < 24; i++) {
  topDeck2.push(topDeck.shift());
}

console.log("deck");
console.log(deck);
console.log("topDeck");
console.log(topDeck);
console.log("topDeck2");
console.log(topDeck);
let n = 0;

function pickCard() {
  waste.push(topDeck2.shift());
  console.log("picture is :" + waste[0 + n] + "number : " + n);
  let vs = `/images/cards/${waste[0 + n]}.svg`;
  n++;
  var newNode = document.createElement("div");
  newNode.className = "discards";
  newNode.style.backgroundImage = `url(${vs})`;
  newNode.style.backgroundSize = "164px 151px";
  document.getElementById("disc").appendChild(newNode);

  var list = document.getElementById("dd"); // Get the <ul> element with id="myList"
  list.removeChild(list.childNodes[0]);
  console.log(waste.length);
  console.log(topDeck2.length);

  if (topDeck2.length === 0 && waste.length === 24) {
    resetCard();
  }
}

async function resetCard() {
  //
  for (let j = 0; j < waste.length; j++) {
    await sleepNow(30);
    var newNode = document.createElement("div");
    newNode.className = "topCards";
    document.getElementById("dd").appendChild(newNode);
    //await sleepNow(1);
    var list = document.getElementById("disc"); // Get the <ul> element with id="myList"
    list.removeChild(list.childNodes[0]);
  }
  console.log("topDeck2 After");
  console.log(topDeck);
  console.log("waste After");
  console.log(waste);
  topDeck2 = waste;
  waste = [];
  joe--;
  n = 0;
  console.log("waste" + waste.length);
  console.log("top" + topDeck2.length);
}

console.log("waste");
console.log(waste);

/////////////////////////////////////////////////////////////////////
/*
const draggableElement = document.querySelectorAll("#move");
const dropZone = document.querySelectorAll(".Column");

draggableElement.forEach((element) =>
  element.addEventListener("dragstart", (e) => {
    element.classList.add("holding");
    e.dataTransfer.setData("text/plain", element.classList);
    console.log(e);
    console.log(element.id);
  })
);
// hovering over column
dropZone.forEach((element) =>
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    element.classList.add("drag-over", "selected");
    console.log("hovering");
  })
);
//leaving column zone
dropZone.forEach((element) =>
  element.addEventListener("dragleave", (e) => {
    e.preventDefault();
    element.classList.remove("drag-over", "selected");
  })
);
//dropping into column
dropZone.forEach((element) =>
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    const droppedEllementID = e.dataTransfer.getData(
      "text/plain",
      element.classList
    );

    const droppedEllement = document.getElementsByClassName(
      `${droppedEllementID}`
    )[0].id;

    const finl = document.getElementById(droppedEllement);
    console.log(droppedEllement);
    console.log(finl);

    element.appendChild(finl);
    element.classList.remove("drag-over", "selected");
    console.log("dropped");
    console.log(droppedEllementID);
  })
);
*/
const nodes = document.getElementsByClassName("move");
const DropZone = document.querySelectorAll(".Column");
var selectedn = "";
var selectednpos = 0;

for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("drag has started");
  });
}

// hovering over column
DropZone.forEach((element) =>
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    element.classList.add("drag-over", "selected");
    console.log("hovering");
  })
);
//leaving column zone
DropZone.forEach((element) =>
  element.addEventListener("dragleave", (e) => {
    e.preventDefault();
    element.classList.remove("drag-over", "selected");
  })
);
//dropping into column
DropZone.forEach((element) =>
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    const droppedEllementID = e.dataTransfer.getData(
      "text/plain",
      element.classList
    );
    const finl = document.getElementById(droppedEllementID);
    console.log(finl);
    element.appendChild(finl);
    element.classList.remove("drag-over", "selected");
    console.log("dropped");
    console.log(droppedEllementID);
  })
);
