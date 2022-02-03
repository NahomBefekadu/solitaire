const nodes = document.getElementsByClassName("Column");
const DropZone = document.querySelectorAll(".Column");
const TopZone = document.querySelector("#disc");
const movesHistory = [];

var numMove = 0;
console.log(TopZone.classList);
console.log(DropZone.classList);

for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("dblclick", (e) => {
    //e.dataTransfer.setData("text/plain", e.target.id);
    
    const choosen = nodes[i].lastElementChild.id;
    console.log("double click has started" + choosen);

    var col1 = document.getElementById("col1").lastElementChild.id;
    var col2 = document.getElementById("col2").lastElementChild.id;
    var col3 = document.getElementById("col3").lastElementChild.id;
    var col4 = document.getElementById("col4").lastElementChild.id;
    var col5 = document.getElementById("col5").lastElementChild.id;
    var col6 = document.getElementById("col6").lastElementChild.id;
    var col7 = document.getElementById("col7").lastElementChild.id;
    var heart = document.getElementById("heart").lastElementChild.id;
    var spade = document.getElementById("spade").lastElementChild.id;
    var club = document.getElementById("club").lastElementChild.id;
    var diamond = document.getElementById("diamond").lastElementChild.id;
    
    console.log(" element id " + col1 +", " +col2+", " +col3+", " +col4+", " +col5+", " +col6+", " +col7 );

    let choosenSuit = choosen.charAt(0);
    let choosenNum = choosen.charAt(1) + choosen.charAt(2);
    console.log(" chosen suite " + choosenSuit +", chosen value " +choosenNum );
    var whereto = "";
    if(doubleClickMove(choosen, col1)==true){ 
      moveit(choosen, "col1");
    }; 
    if(doubleClickMove(choosen, col2)==true){
      var col2 = document.getElementById("col2").lastElementChild;
      moveit(choosen, "col2");
    };
    
    if(doubleClickMove(choosen, col3)==true){
      var col3 = document.getElementById("col3").lastElementChild;
      moveit(choosen, "col3");
    };
     
    if(doubleClickMove(choosen, col4)==true){
      var col4 = document.getElementById("col4").lastElementChild;
      moveit(choosen, "col4");
    };
    
    if(doubleClickMove(choosen, col5)==true){
      var col5 = document.getElementById("col5").lastElementChild;
      moveit(choosen, "col5");
    };
     
    if(doubleClickMove(choosen, col6)==true){
      var col6 = document.getElementById("col6").lastElementChild;
      moveit(choosen, "col6");
    };
     
    if(doubleClickMove(choosen, col7)==true){
      var col7 = document.getElementById("col7").lastElementChild;
      moveit(choosen, "col7");
    }; 

    if(goForIt(choosen, heart, "win")==true){
      var heart = document.getElementById("heart").lastElementChild;
      moveit(choosen, "heart");
    };
 
    if(goForIt(choosen, spade, "win")==true){
      var spade = document.getElementById("spade").lastElementChild;
      moveit(choosen, "spade");
    };
 
    if(goForIt(choosen, club, "win")==true){
      var club = document.getElementById("club").lastElementChild;
      moveit(choosen, "club");
    };   
    if(goForIt(choosen, diamond, "win")==true){
      var diamond = document.getElementById("diamond").lastElementChild;
      moveit(choosen, "diamond");
    };
 
    
  });
}

function moveit(param1, param2){
  //console.log("where to " + document.getElementById(param2).classList);
  
  numMove ++;
  movesDone.innerHTML = `${numMove} Moves`;
  console.log("moves are " + numMove); 
  if (document.getElementById(param1).classList.contains("topy")) {
    console.log("found topy");
    document.getElementById(param1).classList.remove("topy");
    console.log("topy removed");
  }

  if (param2 === "heart") {
    console.log("Topy added");
    document.getElementById(param1).classList.add("topy");
  }
  if (param2 === "spade") {
    console.log("Topy added");
    document.getElementById(param1).classList.add("topy");
  }
  if (param2 === "diamond") {
    console.log("Topy added");
    document.getElementById(param1).classList.add("topy");
  }
  if (param2 === "club") {
    console.log("Topy added");
    document.getElementById(param1).classList.add("topy");
  }
  
  document.getElementById(param2).appendChild(document.getElementById(param1));
  //param2.classList.remove("drag-over", "selected");
   console.log("dropped");
   //console.log(droppedEllementID);
   updateStatus();


}

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
    const toEllementID = element.lastElementChild.id;
    const toFirstEllementID = element.firstElementChild.id;
    console.log(" element id " + droppedEllementID + " element id");
    const finl = document.getElementById(droppedEllementID);
    console.log(element.lastElementChild);
    console.log(finl);
    console.log(element.style.width);
    console.log("uim here");
    console.log(element.firstElementChild);

    
    console.log(finl.classList);
    console.log("This is me");
    console.log(finl.nextElementSibling);
    if (finl.nextElementSibling) {
      var el = finl.nextElementSibling.id;
    }
    // const finl2 = document.getElementById(el);
    /*     while (el) {
      element.appendChild(el);
      el = el.nextSibling;
    } */

    /*
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
    */

    
    if (goForIt(droppedEllementID, toEllementID, toFirstEllementID) == true) {
      numMove ++;
      movesDone.innerHTML = `${numMove} Moves`;
      console.log("moves are " + numMove);
      moves = [droppedEllementID, toEllementID];
      if (finl.classList.contains("topy")) {
        finl.classList.remove("topy");
      }

      if (element.id === "heart") {
        console.log("Topy added");
        finl.classList.add("topy");
      }
      if (element.id === "spade") {
        console.log("Topy added");
        finl.classList.add("topy");
      }
      if (element.id === "diamond") {
        console.log("Topy added");
        finl.classList.add("topy");
      }
      if (element.id === "club") {
        console.log("Topy added");
        finl.classList.add("topy");
      }

      

      movesHistory.push(moves);
      console.log(movesHistory.length);
      console.log(movesHistory);
      element.appendChild(finl);

      //This is the section for checking for siblings and appending, im using a loop to iterate over them
      let ccc = 1;
      var counter = 0;
      while (el) {
        ccc++;
        counter++;
        
        console.log("ab");
        const finl2 = document.getElementById(el);
        if (finl2.nextElementSibling) {
          console.log("ab2");
          console.log(finl2.nextElementSibling);
          var el = finl2.nextElementSibling.id;
        }
        console.log("ab3");
        element.appendChild(finl2);
        console.log("ab4" + ccc);
        //numMove++;
        if (ccc > 13) {
          counter=1;
          //alert("infinite loop");
          //numMove++;
          return;
        }
      }
       
    }

    // element.appendChild(finl);
    element.classList.remove("drag-over", "selected");
    console.log("dropped");
    console.log(droppedEllementID);
    updateStatus();
  })
);

const movesDone = document.querySelector(".moves");

async function updateStatus() {
  movesDone.innerHTML = `${numMove} Moves`;
}

function goBack() {
  console.log(movesHistory[movesHistory.length - 1]);
  paramFrom = movesHistory[movesHistory.length - 1][0];
  console.log(paramFrom);
  //document.getElementById(paramTo).appendChild(paramFrom);
  numMove--;
}

function goForIt(param1, param2, param3) {
  let param1Suit = param1.charAt(0);
  let param1Num = param1.charAt(1) + param1.charAt(2);
  let param2Suit = param2.charAt(0);
  let param2Num = param2.charAt(1) + param2.charAt(2);
  let param3Suit = param3.charAt(0);
  let param3Num = param3.charAt(1) + param3.charAt(2);

  //check color
  let colorFrom = "";
  let colorTo = "";

  switch (param1Suit) {
    case "H":
      colorFrom = "red";
      break;
    case "D":
      colorFrom = "red";
      break;
    case "S":
      colorFrom = "black";
      break;
    case "C":
      colorFrom = "black";
      break;
  }

  switch (param2Suit) {
    case "H":
      colorTo = "red";
      break;
    case "D":
      colorTo = "red";
      break;
    case "S":
      colorTo = "black";
      break;
    case "C":
      colorTo = "black";
      break;
  }

  console.log("color from is " + colorFrom + ", color to is " + colorTo);

  //check value

  switch (param1Num) {
    case "J":
      param1Num = 11;
      break;
    case "Q":
      param1Num = 12;
      break;
    case "K":
      param1Num = 13;
      break;
    case "A":
      param1Num = 1;
      break;
  }

  switch (param2Num) {
    case "J":
      param2Num = 11;
      break;
    case "Q":
      param2Num = 12;
      break;
    case "K":
      param2Num = 13;
      break;
    case "A":
      param2Num = 1;
      break;
  }

  console.log("suit 1 is " + param1Suit + ", value 1 is " + param1Num);
  console.log("suit 2 is " + param2Suit + ", value 2 is " + param2Num);
   
  if (param3 == "win") {
    var heart = document.getElementById("heart").lastElementChild.id;
    var spade = document.getElementById("spade").lastElementChild.id;
    var club = document.getElementById("club").lastElementChild.id;
    var diamond = document.getElementById("diamond").lastElementChild.id;

  console.log("heartLast is " + heart);
    if (param1Num == 1 && param2 =="win") {
      return true;
      
    } else {
      if ((param1Num - param2Num == 1) & (param1Suit == param2Suit)) {
        console.log("valid Move");
        return true;
      } else {
        console.log("Invalid Move number is larger" + param1Num - param2Num);
        return false;
      }
    }
  } else {
    if (colorTo == "" || colorFrom == "") {
      if (param1Num == 13) {
        return true;
      } else {
        console.log("Invalid Move no color");
        return false;
      }
    } else {
      if (colorFrom == colorTo) {
        console.log("Invalid Move same color");
        return false;
      } else {
        if (param2Num - param1Num == 1) {
          console.log("valid Move");
          return true;
        } else {
          console.log("Invalid Move number is larger");
          return false;
        }
      }
    }
  }
}

function doubleClickMove(param1, param2 ) {
  let param1Suit = param1.charAt(0);
  let param1Num = param1.charAt(1) + param1.charAt(2);
  let param2Suit = param2.charAt(0);
  let param2Num = param2.charAt(1) + param2.charAt(2); 

  //check color
  let colorFrom = "";
  let colorTo = "";

  switch (param1Suit) {
    case "H":
      colorFrom = "red";
      break;
    case "D":
      colorFrom = "red";
      break;
    case "S":
      colorFrom = "black";
      break;
    case "C":
      colorFrom = "black";
      break;
  }

  switch (param2Suit) {
    case "H":
      colorTo = "red";
      break;
    case "D":
      colorTo = "red";
      break;
    case "S":
      colorTo = "black";
      break;
    case "C":
      colorTo = "black";
      break;
  }

  //console.log("color from is " + colorFrom + ", color to is " + colorTo);

  //check value

  switch (param1Num) {
    case "J":
      param1Num = 11;
      break;
    case "Q":
      param1Num = 12;
      break;
    case "K":
      param1Num = 13;
      break;
    case "A":
      param1Num = 1;
      break;
  }

  switch (param2Num) {
    case "J":
      param2Num = 11;
      break;
    case "Q":
      param2Num = 12;
      break;
    case "K":
      param2Num = 13;
      break;
    case "A":
      param2Num = 1;
      break;
  }

  
  

 
  //console.log("suit 2 is " + param2Suit + ", value 2 is " + param2Num);

  if (param2 == "win") {
    
    if (param1Num == 1) {
      console.log("valid Move");
      return true;
    } else {
      if ((param1Num - param2Num == 1) & (param1Suit == param2Suit)) {
        console.log("valid Move");
        return true;
      } else {
        //console.log("Invalid Move number is larger" + param1Num - param2Num);
        return false;
      }
    }
  } else {
    if (colorTo == "" || colorFrom == "") {
      if (param1Num == 13) {
        return true;
      } else {
        //console.log("Invalid Move no color");
        return false;
      }
    } else {
      if (colorFrom == colorTo) {
        //console.log("Invalid Move same color");
        return false;
      } else {
        if (param2Num - param1Num == 1) {
          //console.log("valid Move");
          return true;
        } else {
          //console.log("Invalid Move number is larger");
          return false;
        }
      }
    }
  }
}


//---------------------------------------------------------------------------end of the double click
