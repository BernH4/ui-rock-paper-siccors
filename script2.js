
let pscore = document.getElementById("pscore").innerHTML;
let cscore = document.getElementById("cscore").innerHTML;

buttons = document.querySelectorAll('button')
buttons.forEach(button => {
button.addEventListener('click', function (e) {

    console.log(e)
    console.log("ps= " + button.getAttribute("data-key"));
    //if (button.id == "stein") console.log("rock!!!");
    //else if (button.id == "papier") console.log("papier");
    //else if (button.id == "schere") console.log("schere");
    let playerWins = bothPlay(button.getAttribute("data-key"), computerPlay());
    if (playerWins) {
        pscore++;
        //pscore.innerHTML = pscore;
    }
    else cscore++;

});
});


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
