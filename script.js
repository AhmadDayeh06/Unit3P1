/* Declare variables below to save the different sections (divs) of your story*/
//All Messi's options.
let messiButton = document.querySelector(".option-one");
let screenOptOne = document.querySelector(".option-one-screen");
let shootRight = document.querySelector(".striker-right");
let shootLeft = document.querySelector(".striker-left");
let messiScored = document.querySelector(".option-one-first-end");
let messiMissed = document.querySelector(".option-one-second-end");

//All Martinez's options
let emiButton = document.querySelector(".option-two");
let screenOptTwo = document.querySelector(".option-two-screen");
let goalieLeft = document.querySelector(".goalie-left");
let goalieRight = document.querySelector(".goalie-right");
let goalieCleared = document.querySelector(".option-two-first-end");
let goalieMissed = document.querySelector(".option-two-second-end");

//Endings
let argentinaWin = document.querySelector(".argentina-winning");
let argentinaLose = document.querySelector(".argentina-losing");

// a question, and the answer will be diplayed using .innerHTML.
let questionButton= document.querySelector(".question");
let answer = document.querySelector(".Argentina-wc-finals");
questionButton.onclick = function (){
  //the use of .innerHTML
  answer.innerHTML = "Brazil 2014 & Qatar 2022";
};
//When choosing Messi, all screens will be hid in case one of them was opend previously, and the screen for Messi's options will be displayed.
messiButton.onclick = function () {
  screenOptOne.style.display = "block";
  screenOptTwo.style.display = "none";
  messiScored.style.display = "none";
  messiMissed.style.display = "none";
  goalieCleared.style.display = "none";
  goalieMissed.style.display = "none";
  argentinaWin.style.display = "none";
  argentinaLose.style.display = "none";
};

//When choosing Martinez, all screens will be hid in case one of them was opend previously, and the screen for Martinez's options will be displayed
emiButton.onclick = function () {
  screenOptTwo.style.display = "block";
  screenOptOne.style.display = "none";
  goalieCleared.style.display = "none";
  goalieMissed.style.display = "none";
  argentinaWin.style.display = "none";
  argentinaLose.style.display = "none";
  messiScored.style.display = "none";
  messiMissed.style.display = "none";
};

//On events of choosing to kick the ball to the right or the left. the function scoringOrMissing will be called.
shootRight.onclick = function () {
  scoringOrMissing();
};

shootLeft.onclick = function () {
  scoringOrMissing();
};
// on events of choosing to jump to the right or the left. The function clearingOrNot will be called.
goalieLeft.onclick = function () {
  clearingOrNot();
};

goalieRight.onclick = function () {
  clearingOrNot();
};
//Funtion 1
function scoringOrMissing() {
  //This will randomize the possibilities of losing or winning the world cup. It will randomly choose number 1 or 0 each time the user clicks buttons that call this function.
  let strikerResult = Math.floor(Math.random() * 2);

  if (strikerResult === 0) {
    // Messi scored
    messiScored.style.display = "block";
    screenOptTwo.style.display = "none";
    screenOptOne.style.display = "none";
    messiMissed.style.display = "none";
    goalieCleared.style.display = "none";
    goalieMissed.style.display = "none";
    setTimeout(function() {
      argentinaWin.style.display = "block";
    }, 2000); // Delay of 2 seconds before displaying Argentina winning
    argentinaLose.style.display = "none";
  } else {
    // Messi missed
    goalieMissed.style.display = "none";
    messiMissed.style.display = "block";
    screenOptTwo.style.display = "none";
    screenOptOne.style.display = "none";
    messiScored.style.display = "none";
    goalieCleared.style.display = "none";
    argentinaWin.style.display = "none";
    setTimeout(function() {
      argentinaLose.style.display = "block";
    }, 2000); // Delay of 2 seconds before displaying Argentina losing
  }
}

function clearingOrNot() {
    //This will randomize the possibilities of losing or winning the world cup. It will randomly choose number 1 or 0 each time the user clicks buttons that call this function.
  let goalieResult = Math.floor(Math.random() * 2);

  if (goalieResult === 0) {
    // Martinez cleared
    goalieCleared.style.display = "block";
    goalieMissed.style.display = "none";
    screenOptTwo.style.display = "none";
    screenOptOne.style.display = "none";
    messiScored.style.display = "none";
    messiMissed.style.display = "none";
    setTimeout(function() {
      argentinaWin.style.display = "block";
    }, 2000); // Delay of 2 seconds before displaying Argentina winning
    argentinaLose.style.display = "none";
  } else {
    // Martinez missed
    goalieCleared.style.display = "none";
    screenOptTwo.style.display = "none";
    screenOptOne.style.display = "none";
    messiScored.style.display = "none";
    messiMissed.style.display = "none";
    argentinaWin.style.display = "none";
    goalieMissed.style.display = "block";
    setTimeout(function() {
      argentinaLose.style.display = "block";
    }, 2000); // Delay of 2 seconds before displaying Argentina losing
  }
}
