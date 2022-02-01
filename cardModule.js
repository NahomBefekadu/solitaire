let suitss = ["H", "C", "D", "S"];
let rankss = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let starterDeck = [];
let wastee = [];
let c1 = [];
let c2 = [];
let c3 = [];
let c4 = [];
let c5 = [];
let c6 = [];
let c7 = [];

// @status = 0 card is face down, 1 card is face up
// @name = card suit and number
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    starterDeck.push({
      name: [suitss[i] + rankss[j]],
      status: 0,
      rank: rankss[j],
      suit: suitss[i],
    });
  }
}

let ShuffleDeckk = function (DCK) {
  let var1, tmp;

  for (let i = DCK.length - 1; i > 0; i--) {
    var1 = Math.floor(Math.random() * (i + 1));
    tmp = DCK[i];
    DCK[i] = DCK[var1];
    DCK[var1] = tmp;
  }
  return DCK;
};

ShuffleDeckk(starterDeck);

let insertCard = function (i, crd = []) {
  for (var j = 0; j < i; j++) {
    crd.push(starterDeck.pop());
  }
};
insertCard(7, c7);
insertCard(6, c6);
insertCard(5, c5);
insertCard(4, c4);
insertCard(3, c3);
insertCard(2, c2);
insertCard(1, c1);
insertCard(24, wastee);

/*----------------Top card creation-----------------------------------*/
console.log(wastee);
createBoard();
async function createBoard() {
  await sleepNow(30);
  wastee.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "topCards";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("dd").appendChild(newNode);
  });
}

/*-------------------------Main Card Creation-----------------------------*/
createMainBoard();
async function createMainBoard() {
  c1.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col1").appendChild(newNode);
  });
  c2.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col2").appendChild(newNode);
  });
  c3.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col3").appendChild(newNode);
  });
  c4.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col4").appendChild(newNode);
  });
  c5.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col5").appendChild(newNode);
  });
  c6.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col6").appendChild(newNode);
  });
  c7.map((obj) => {
    var newNode = document.createElement("div");
    newNode.className = "card2";
    newNode.dataset.name = obj.name;
    newNode.dataset.rank = obj.rank;
    newNode.dataset.suit = obj.suit;
    newNode.dataset.status = obj.status;
    document.getElementById("col7").appendChild(newNode);
  });
}
