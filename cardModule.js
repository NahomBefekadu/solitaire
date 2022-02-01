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
    newNode.className = "card2 topy";
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
//---------------------------------------------------------------------
//setup bottom cards

addMainBoard();
async function addMainBoard() {
  //col 1
  var x1 = document.getElementById("col1").lastChild;
  x1.dataset.status = 1;
  let vs1 = `/images/cards/${x1.dataset.name}.svg`;
  x1.style.backgroundImage = `url(${vs1})`;
  x1.draggable = true;
  x1.setAttribute("id", x1.dataset.name);
  //---------------------------------------------------------

  //col 2
  var x2 = document.getElementById("col2").lastChild;
  x2.dataset.status = 1;
  let vs2 = `/images/cards/${x2.dataset.name}.svg`;
  x2.style.backgroundImage = `url(${vs2})`;
  x2.draggable = true;
  x2.setAttribute("id", x2.dataset.name);
  //---------------------------------------------------------

  //col 3
  var x3 = document.getElementById("col3").lastChild;
  x3.dataset.status = 1;
  let vs3 = `/images/cards/${x3.dataset.name}.svg`;
  x3.style.backgroundImage = `url(${vs3})`;
<<<<<<< HEAD
  x3.draggable = true;
  //---------------------------------------------------------
=======
  x3.draggable = true; 
  x3.setAttribute("id", x3.dataset.name);
 //---------------------------------------------------------
>>>>>>> f9f8bfe38ba99e7efa2cad6d92f2fad74b961b00

  //col 4
  var x4 = document.getElementById("col4").lastChild;
  x4.dataset.status = 1;
  let vs4 = `/images/cards/${x4.dataset.name}.svg`;
  x4.style.backgroundImage = `url(${vs4})`;
<<<<<<< HEAD
  x4.draggable = true;
=======
  x4.draggable = true; 
  x4.setAttribute("id", x4.dataset.name);
>>>>>>> f9f8bfe38ba99e7efa2cad6d92f2fad74b961b00
  //---------------------------------------------------------

  //col 5
  var x5 = document.getElementById("col5").lastChild;
  x5.dataset.status = 1;
  let vs5 = `/images/cards/${x5.dataset.name}.svg`;
  x5.style.backgroundImage = `url(${vs5})`;
<<<<<<< HEAD
  x5.draggable = true;
=======
  x5.draggable = true; 
  x5.setAttribute("id", x5.dataset.name);
>>>>>>> f9f8bfe38ba99e7efa2cad6d92f2fad74b961b00
  //---------------------------------------------------------

  //col 6
  var x6 = document.getElementById("col6").lastChild;
  x6.dataset.status = 1;
  let vs6 = `/images/cards/${x6.dataset.name}.svg`;
  x6.style.backgroundImage = `url(${vs6})`;
  x6.draggable = true;
<<<<<<< HEAD
=======
  x6.setAttribute("id", x6.dataset.name);
>>>>>>> f9f8bfe38ba99e7efa2cad6d92f2fad74b961b00
  //---------------------------------------------------------

  //col 7
  var x7 = document.getElementById("col7").lastChild;
  x7.dataset.status = 1;
  let vs7 = `/images/cards/${x7.dataset.name}.svg`;
  x7.style.backgroundImage = `url(${vs7})`;
<<<<<<< HEAD
  x7.draggable = true;
}
=======
  x7.draggable = true; 
  x7.setAttribute("id", x7.dataset.name);
}
>>>>>>> f9f8bfe38ba99e7efa2cad6d92f2fad74b961b00
