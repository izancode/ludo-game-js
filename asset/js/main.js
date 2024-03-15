const body = document.body;
const mainContainer = document.querySelector(".container");
const loduBox = ["mainSquare", "vReactangle", "hReactangle", "finishBox"];
const loduBoxIndex = [0, 1, 0, 2, 3, 2, 0, 1, 0];
const combinedDivs = [];
const redRoadArray = [53, 54, 55, 56, 57, 31, 28, 25, 22, 19, 16, 17, 18, 21, 24, 27, 30, 33, 70, 71, 72, 73, 74, 75, 81, 87, 86, 85, 84, 83, 82, 36, 39, 42, 45, 48, 51, 50, 49, 46, 43, 40, 37, 34, 69, 68, 67, 66, 65, 64, 58, 59, 60, 61, 62, 63, 88];
const greenRoadArray = [21, 24, 27, 30, 33, 70, 71, 72, 73, 74, 75, 81, 87, 86, 85, 84, 83, 82, 36, 39, 42, 45, 48, 51, 50, 49, 46, 43, 40, 37, 34, 69, 68, 67, 66, 65, 64, 58, 52, 53, 54, 55, 56, 57, 31, 28, 25, 22, 19, 16, 17, 20, 23, 26, 29, 32, 88];
const yellowRoadArray = [46, 43, 40, 37, 34, 69, 68, 67, 66, 65, 64, 58, 52, 53, 54, 55, 56, 57, 31, 28, 25, 22, 19, 16, 17, 18, 21, 24, 27, 30, 33, 70, 71, 72, 73, 74, 75, 81, 87, 86, 85, 84, 83, 82, 36, 39, 42, 45, 48, 51, 50, 47, 44, 41, 38, 35, 88];
const blueRoadArray = [86, 85, 84, 83, 82, 36, 39, 42, 45, 48, 51, 50, 49, 46, 43, 40, 37, 34, 69, 68, 67, 66, 65, 64, 58, 52, 53, 54, 55, 56, 57, 31, 28, 25, 22, 19, 16, 17, 18, 21, 24, 27, 30, 33, 70, 71, 72, 73, 74, 75, 81, 80, 79, 78, 77, 76, 88];
const players = ["Player 1", "Player 2", "Player 3", "Player 4", ];
let allpawnReds = "";
let redCurrentPosition = 0;
let redElement;
let redElementForUnderSix;
let redRoadRun = 0;
let redCurrentValue;
let theOutSideRedPawn;
const diceImg = new Image();
diceImg.src = "asset/images/dice/jack.png";
diceImg.classList.add("diceImage");
body.appendChild(diceImg);
loduBoxIndex.forEach(index => {
  const div1 = document.createElement("div");
  mainContainer.appendChild(div1);
  div1.classList.add(loduBox[index]);
});
const mainSquare = document.querySelectorAll(".mainSquare");
const vReactangle = document.querySelectorAll(".vReactangle");
const hReactangle = document.querySelectorAll(".hReactangle");
const finishBox = document.querySelectorAll(".finishBox");
mainSquare.forEach(mainSquares => {
  for (let i = 0; i < 4; i++) {
    const mainSquaresDiv = document.createElement("div");
    mainSquares.appendChild(mainSquaresDiv);
  }
});
const mainSquareAlldiv = document.querySelectorAll(".mainSquare div");
mainSquareAlldiv.forEach(function (div) {
  combinedDivs.push(div);
});
vReactangle.forEach(div2 => {
  for (let i = 0; i < 18; i++) {
    const newDiv2 = document.createElement("div");
    div2.appendChild(newDiv2);
  }
});
const vReactanglediv = document.querySelectorAll(".vReactangle div");
vReactanglediv.forEach(function (div) {
  combinedDivs.push(div);
});
hReactangle.forEach(div3 => {
  for (let i = 0; i < 18; i++) {
    const newDiv3 = document.createElement("div");
    div3.appendChild(newDiv3);
  }
});
const hReactanglediv = document.querySelectorAll(".hReactangle div");
hReactanglediv.forEach(function (div) {
  combinedDivs.push(div);
});
finishBox.forEach(div4 => {
  for (let i = 0; i < 4; i++) {
    const newDiv4 = document.createElement("div");
    div4.appendChild(newDiv4);
  }
});
const finishBoxDiv = document.querySelectorAll(".finishBox div");
finishBoxDiv.forEach(function (div) {
  combinedDivs.push(div);
})
combinedDivs.forEach(function (road, index) {
  // road.innerHTML = index;
  combinedDivs[53].classList.add('redStartingPointStar');
  combinedDivs[46].classList.add('greenStartingPointStar');
  combinedDivs[86].classList.add('yellowStartingPointStar');
  combinedDivs[21].classList.add('blueStartingPointStar');
  // Arrow
  combinedDivs[50].classList.add('greenArrow');
  combinedDivs[17].classList.add('blueArrow');
  combinedDivs[58].classList.add('redArrow');
  combinedDivs[81].classList.add('yellowArrow');
  redcombinedDivnew = [combinedDivs[59], combinedDivs[60], combinedDivs[61], combinedDivs[62], combinedDivs[63]];
  redcombinedDivnew.forEach((redcombinedDivnewunder) => {
    redcombinedDivnewunder.classList.add('bg-red');
  });
  greencombinedDivnew = [combinedDivs[47], combinedDivs[44], combinedDivs[41], combinedDivs[38], combinedDivs[35]];
  greencombinedDivnew.forEach((greencombinedDivnewunder) => {
    greencombinedDivnewunder.classList.add('bg-green');
  });
  bluecombinedDivnew = [combinedDivs[20], combinedDivs[23], combinedDivs[26], combinedDivs[29], combinedDivs[32]];
  bluecombinedDivnew.forEach((bluecombinedDivnewunder) => {
    bluecombinedDivnewunder.classList.add('bg-blue');
  });
  yellowcombinedDivnew = [combinedDivs[80], combinedDivs[79], combinedDivs[78], combinedDivs[77], combinedDivs[76]];
  yellowcombinedDivnew.forEach((yellowcombinedDivnewunder) => {
    yellowcombinedDivnewunder.classList.add('bg-yellow');
  });
  graycombinedDivnew = [combinedDivs[66], combinedDivs[22], combinedDivs[73], combinedDivs[45]];
  graycombinedDivnew.forEach((graycombinedDivnewunder) => {
    graycombinedDivnewunder.classList.add('grayStartingPointStar');
  });
  if (index >= 0 && index <= 3) {
    const redPlayer = combinedDivs[index];
    redPlayer.classList.add('borderRed');
    redPlayer.innerHTML = "<i class='fa-solid fa-chess-pawn fa-xl pawnRed'></i>";
  } else if (index >= 4 && index <= 7) {
    const greenPlayer = combinedDivs[index];
    greenPlayer.classList.add('borderGreen');
    // greenPlayer.innerHTML = "<i class='fa-solid fa-chess-pawn fa-xl pawnGreen'></i>";
  } else if ((index >= 8 && index <= 11)) {
    const yellowPlayer = combinedDivs[index];
    yellowPlayer.classList.add('borderYellow');
    // yellowPlayer.innerHTML = "<i class='fa-solid fa-chess-pawn fa-xl pawnYellow'></i>";
  } else if ((index >= 12 && index <= 15)) {
    const bluePlayer = combinedDivs[index];
    bluePlayer.classList.add('borderBlue');
    // bluePlayer.innerHTML = "<i class='fa-solid fa-chess-pawn fa-xl pawnBlue'></i>";
  }
});
allpawnReds = document.querySelectorAll(".pawnRed");
allpawnGreens = document.querySelectorAll(".pawnGreen");
allpawnYellows = document.querySelectorAll(".pawnYellow");
allpawnBlues = document.querySelectorAll(".pawnBlue");
players[0] = [players[0], allpawnReds]
players[1] = [players[1], allpawnGreens]
players[2] = [players[2], allpawnYellows]
players[3] = [players[3], allpawnBlues]
let currentPlayerIndex = 0;
// console.log(players);
const redInTheHouse = [combinedDivs[0], combinedDivs[1], combinedDivs[2], combinedDivs[3]];
console.log(combinedDivs[0].innerHTML.length);

function diceImgClick() {
  let randomDiceImg = Math.floor(Math.random() * 6) + 1;
  if (randomDiceImg === 1) {
      
        
        diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
        setTimeout(function() {
          diceImg.src = "asset/images/dice/1.png";
      }, 1000); 

  
  } else if (randomDiceImg === 2) {
   
   
    diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
    setTimeout(function() {
      diceImg.src = "asset/images/dice/2.png";
  }, 1000); 
  } else if (randomDiceImg === 3) {
    
   
    diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
    setTimeout(function() {
      diceImg.src = "asset/images/dice/3.png";
  }, 1000); 
  } else if (randomDiceImg === 4) {
    
   
    diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
    setTimeout(function() {
      diceImg.src = "asset/images/dice/4.png";
  }, 1000); 
  } else if (randomDiceImg === 5) {
   
    
   
    diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
    setTimeout(function() {
      diceImg.src = "asset/images/dice/5.png";
  }, 1000); 
  } else if (randomDiceImg === 6) {
   
    diceImg.src = "https://www.animatedimages.org/data/media/710/animated-dice-image-0004.gif";
    setTimeout(function() {
      diceImg.src = "asset/images/dice/6.png";
  }, 1000); 
   
  }



  if (randomDiceImg === 6 && (combinedDivs[0].innerHTML.length === 52 && combinedDivs[1].innerHTML.length === 52 && combinedDivs[2].innerHTML.length === 52 && combinedDivs[3].innerHTML.length === 52)) {
    alert("its 6 and 4 pawn are in the house");
    redElement = allpawnReds[redCurrentPosition];
    redCurrentValue = redRoadArray;
    redCurrentPosition = (redCurrentPosition + 1) % allpawnReds.length;
    theOutSideRedPawn = combinedDivs[redCurrentValue[redRoadRun]].appendChild(redElement);
  } else if (randomDiceImg === 6 && combinedDivs[0].innerHTML.length === 0 && ((combinedDivs[1].innerHTML.length === 52 || combinedDivs[1].innerHTML.length === 0) && (combinedDivs[2].innerHTML.length === 52 || combinedDivs[2].innerHTML.length === 0) && (combinedDivs[3].innerHTML.length === 52 || combinedDivs[3].innerHTML.length === 0))) {
    alert("its 6 and 3 pawn are in the house");
    // let redPawnMustBeRun = allpawnReds[index];
    allpawnReds = document.querySelectorAll(".pawnRed");
    allpawnReds.forEach(item => {
      item.addEventListener("click", redPwanFunctionOne);
      item.classList.add("redHover");
    })
    function redPwanFunctionOne() {
      if (event.target === allpawnReds[0] || event.target === allpawnReds[1] || event.target === allpawnReds[2] || event.target === allpawnReds[3]) {
        // redElement = allpawnReds[redCurrentPosition];
        // console.log(this.redElement);
        if (event.target === allpawnReds[0]) {
          let pawnRedOne = allpawnReds[0];
          theOutSideRedPawn = combinedDivs[redCurrentValue[0]].appendChild(pawnRedOne);
        } else if (event.target === allpawnReds[1]) {
          let pawnRedTwo = allpawnReds[1];
          theOutSideRedPawn = combinedDivs[redCurrentValue[0]].appendChild(pawnRedTwo);
        } else if (event.target === allpawnReds[2]) {
          let pawnRedThree = allpawnReds[2];
          theOutSideRedPawn = combinedDivs[redCurrentValue[0]].appendChild(pawnRedThree);
        } else if (event.target === allpawnReds[3]) {
          let pawnRedFour = allpawnReds[3];
          theOutSideRedPawn = combinedDivs[redCurrentValue[redRoadRun += randomDiceImg]].appendChild(pawnRedFour);
        }
        allpawnReds.forEach(item => {
          item.classList.remove("redHover");
          randomDiceImg = "Your Turn";
          item.removeEventListener("click", redPwanFunctionOne);
        })
      }
    }
  } else if (randomDiceImg <= 5) {
    if (combinedDivs[0].innerHTML.length === 52 && combinedDivs[1].innerHTML.length === 52 && combinedDivs[2].innerHTML.length === 52 && combinedDivs[3].innerHTML.length === 52) {
      // alert("next player turn")
      console.log("next Player Turn");
    } else if (randomDiceImg <= 5 && combinedDivs[0].innerHTML.length === 0 && combinedDivs[1].innerHTML.length === 52 && combinedDivs[2].innerHTML.length === 52 && combinedDivs[3].innerHTML.length === 52) {
      alert("Move your outer pawn");
      allpawnReds[0].classList.add("redHover");
      allpawnReds[0].addEventListener("click", redPwanFunctionTwo);
      function redPwanFunctionTwo() {
        pawnRedFour = allpawnReds[0];
        alert("working outer pawn click");
        theOutSideRedPawn = combinedDivs[redCurrentValue[redRoadRun += randomDiceImg]].appendChild(pawnRedFour);
        pawnRedFour.classList.remove("redHover");
        randomDiceImg = "Next player Turn";
      
        pawnRedFour.removeEventListener("click", redPwanFunctionTwo);
      }
    }
  }
}

diceImg.addEventListener('click', diceImgClick);