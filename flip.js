function flip2() {
  var x = document.getElementById("col2").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
function flip3() {
  var x = document.getElementById("col3").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
function flip4() {
  var x = document.getElementById("col4").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
function flip5() {
  var x = document.getElementById("col5").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
function flip6() {
  var x = document.getElementById("col6").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
function flip7() {
  var x = document.getElementById("col7").lastChild;
  if (x.dataset.status === "1") {
    console.log(x.dataset.name + "  Top");
  } else {
    console.log(x.dataset.name);
    let vs = `/images/cards/${x.dataset.name}.svg`;
    x.style.backgroundImage = `url(${vs})`;
    x.draggable = true;
    x.setAttribute("id", x.dataset.name);
  }
}
