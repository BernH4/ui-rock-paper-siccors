
let pscore = document.getElementById("pscore");
let cscore = document.getElementById("cscore");
let resultWon = document.getElementById("result-won");
let resultLost = document.getElementById("result-lost");

buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', playRound)
});

resultWon.addEventListener('click', reset);
resultLost.addEventListener('click', reset);

function reset(e){
    pscore.innerText = "0"   ;
    cscore.innerText = "0";
    e.target.style.display = "none";
    //console.log("clicked")
}

function playRound(e){
   //console.log(e.target.getAttribute("data-key"));


    console.log("ps= " + e.target.getAttribute("data-key"));
    let playerWins = bothPlay(e.target.getAttribute("data-key"), computerPlay());
    if (playerWins) {
        pscore.innerText = +(pscore.innerText) + 1;
    }
    else cscore.innerText = +(cscore.innerText) + 1;
    
//display block funktioniert nicht
if (pscore.innerText == 5) 
    {resultWon.style.display = "block"}
else if (cscore.innerText == 5) 
    {resultLost.style.display = "block"}
};







//Computer chooses randomly "Rock", "Paper" or "Scissors"
function computerPlay() {
return random(0,2);

}

function random(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
let returnvalue = Math.floor(Math.random() * (max - min +1)) + min; 
console.log("cs= "+ returnvalue)
return returnvalue;
};
//ps = playerSelection, cs = computerSelection PlayerWon == returnvalue = 1
function bothPlay(ps,cs) {
if ((ps == 0) && cs == 2) return 0;
else if (ps > cs) return 0;
else return 1;
}
