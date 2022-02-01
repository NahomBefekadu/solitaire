const nodes = document.getElementsByClassName("Column");
const DropZone = document.querySelectorAll(".Column");
const TopZone = document.querySelector("#disc");
var numMove = 0;
console.log(TopZone.classList);
console.log(DropZone.classList);
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
    const droppedEllementID = e.dataTransfer.getData("text/plain", e.classList);
    console.log(" element id " + droppedEllementID + " element id");
    const finl = document.getElementById(droppedEllementID);
    console.log(element.lastElementChild);
    console.log(finl);
    console.log(element.style.width);
    console.log("uim here");
    if (finl.classList.contains("topy")) {
      finl.classList.remove("topy");
    }
    console.log(finl.classList);
    if (
      element.lastElementChild.classList.contains("red") &&
      finl.classList.contains("red")
    ) {
      console.log("Invalid Move");
    } else if (
      element.lastElementChild.classList.contains("black") &&
      finl.classList.contains("black")
    ) {
      console.log("Invalid Move");
    } else {
      console.log("valid Move");
      element.appendChild(finl);
      numMove++;
    }

    // element.appendChild(finl);
    element.classList.remove("drag-over", "selected");
    console.log("dropped");
    console.log(droppedEllementID);
    updateStatus();
  })
);

const movesDone = document.querySelector(".moves");
movesDone.innerHTML = `${numMove} Moves`;
async function updateStatus() {
  movesDone.innerHTML = `${numMove} Moves`;
}
