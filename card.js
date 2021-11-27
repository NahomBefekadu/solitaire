let suits = ["H", "C", "D", "S"];
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
let topDeck=[];
let waste = [];
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
 
createBoard();

async function createBoard(){
  //
  
  for (let j = 0; j < 28; j++) {
    await sleepNow(30)
    var newNode = document.createElement('div')
    newNode.className = 'topCards'
    document.getElementById('dd').appendChild(newNode)
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


ShuffleDeck(deck);
console.log(deck);
 

function pickCard(){  
  waste.push(deck.shift());
  let vs = `/images/cards/${waste[0]}.svg`

  var newNode = document.createElement('div')
  newNode.className = 'discards'
  newNode.style.backgroundImage=`url(${vs})`;
  newNode.style.backgroundSize="164px 151px";
  document.getElementById('disc').appendChild(newNode)
}
pickCard();

console.log(waste);