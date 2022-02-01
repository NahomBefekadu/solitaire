function checkforLast(name) {
  //console.log(name);
  let numb = document.getElementById("disc").children.length;
  let contianer = document.getElementById("disc");
  let chosenEl = document.getElementById(name);
  for (let i = 0; i < numb; i++) {
    if (contianer.children[i].dataset.name === chosenEl.dataset.name) {
      contianer.children[i].draggable = true;
    } else {
      contianer.children[i].draggable = false;
    }
    console.log(contianer.children[i].dataset.name);
  }
}

function pickCard() {
  let y = document.getElementById("dd");
  console.log(y.hasChildNodes());
  if (y.hasChildNodes()) {
    var x = document.getElementById("dd").lastChild;
    x.dataset.status = 1;
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.style.backgroundSize = "164px 151px";
    x.setAttribute("id", x.dataset.name);
    document.getElementById("disc").appendChild(x);
    checkforLast(x.dataset.name);
  } else {
    resetCard();
  }
}

async function resetCard() {
  let numb = document.getElementById("disc").children.length;
  console.log(numb);
  for (let i = 0; i < numb; i++) {
    var x = document.getElementById("disc").lastChild;
    x.dataset.status = 0;
    x.style.backgroundImage = null;
    x.style.backgroundSize = null;
    x.draggable = false;
    document.getElementById("dd").appendChild(x);
  }
}
