// IF YOU FOUND THIS PROJECT ON TOP AND YOU ARE SEARCHING FOR GOOD RESULUTIONS
// I JUST WANT YOU TO KNOW THERE ARE WAY BETTER SOLUTIONS, THIS IS JUST MY FIRST TRY
// YOU SHOULD LOOK FOR OTHER USERS WHO COMMITED THEIR PROJECT IF 
// YOU WANT TO LEARN/SEE GOOD PRACTICES ;)

let pscore = document.getElementById("pscore");
let cscore = document.getElementById("cscore");
let resultWon = document.getElementById("result-won");
let resultLost = document.getElementById("result-lost");
let even = document.getElementById("even");

let waitForReset = 0;

buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {    
        resetHighlight();
        playRound(e);
        selectionHighlight(e);    
   });
});

resultWon.addEventListener('click', reset);
resultLost.addEventListener('click', reset);

function reset(e){
    pscore.innerText = "0";
    cscore.innerText = "0";
    waitForReset = 0;
    e.target.style.display = "none";
    //console.log("clicked")
}

function playRound(e){
    even.style.display = "none" 
    if (waitForReset == 0) {
    console.log("ps= " + e.target.getAttribute("data-key"));
    let playerWins = bothPlay(e.target.getAttribute("data-key"), computerPlay());
    if (playerWins == 1) {
        pscore.innerText = +(pscore.innerText) + 1;
    }
    else if (playerWins == 0) cscore.innerText = +(cscore.innerText) + 1;
    
    waitForReset = checkWin();
}
};

//display block funktioniert nicht
function checkWin(){
    console.log(pscore.textContent,cscore.textContent);
    if (pscore.textContent === '5') { 
      resultWon.style.display = "block" 
      return 1;
    }  
    else if (cscore.textContent === '5') {
      resultLost.style.display = "block"
      return 1;
    }
    else return 0;
};

//Computer chooses randomly "Rock", "Paper" or "Scissors"
function computerPlay() {
    cs = random(0,2);
    csbutton = document.querySelector(`[data-key="${cs}"]`);
    csbutton.style.color = "red";
    return cs;
}

function random(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
let returnvalue = Math.floor(Math.random() * (max - min +1)) + min; 
console.log("cs= "+ returnvalue)
return returnvalue;
};
//ps = playerSelection, cs = computerSelection PlayerWon == returnvalue = 1 //NOT WORKING CORRECT YET//
function bothPlay(ps,cs) {
 //   if (ps == cs) return -1;
 //   else if ((ps == 0) && cs == 2) return 0;
 //   else if (ps > cs) return 0;
 //   else return 1;
 //}
    if (ps == cs) {
        even.textContent = `Ihr habt beide das gleiche gewählt!`
        even.style.display = "block" 
        return -1//return `Nobody won! You both choosed ${ps}`
    }
    if (ps == 0) {
        if (cs == 2)   return 0;//return "You lost! Paper beats Rock.";
        if (cs == 1) return 1;//return "You won! Rock beats Scissors";
    }

    if (ps == 2) {
        if (cs == 0)    return 1;//return "You won! Paper beats Rock.";
        if (cs == 1) return 0;//return "You lost! Scissors beats Paper";
    }

    if (ps == 1) {
        if (cs == 0)   return 0;//return "You lost! Rock beats Scissors.";
        if (cs == 2)  return 1;//return "You won! Scissors beats Paper";
    }
}

function selectionHighlight(e) {
    e.target.style.border = "solid 5px green"
}

function resetHighlight() {

    buttons.forEach(button => {
        button.style.color = "#fff";
        button.style.border = "none";
    });
}