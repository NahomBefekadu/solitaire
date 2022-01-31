let suits = ["H", "C", "D", "S"];
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let starterDeck = [];
let waste = [];
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
      name: [suits[i] + ranks[j]],
      status: 0,
      rank: ranks[j],
      suit: suits[i],
    });
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

ShuffleDeck(starterDeck);

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
insertCard(24, waste);

module.exports = {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  waste,
};

/*
way to require modules
const { c1, c2, c3, c4, c5, c6, c7, waste } = require("./Card");
console.log(c2);
 
*/
