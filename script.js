debug();
let p = 0;
    let c = 0;
    for(let i = 0; i < 5; i++) {
      let roundResult = playRound(playerPlay(), computerPlay());
      if (roundResult == "playerWon")  {p++; console.log('%c Player won round!', 'color: green;');}
      if (roundResult == "playerLost") {c++; console.log('%c Player lost round!', 'color: red;');}
      if (roundResult == "even")  {console.log('%c Even!', 'color: orangel;');}
    }
    if      (p > c)   console.log(`The round is over, you won! Results: You: ${p} Computer: ${c}`);
    else if (p < c)   console.log(`The round is over, you sadly lost! Results: You: ${p} Computer: ${c}`);
    else if (p == c)  console.log(`The round is over, nobody won! Results: You: ${p} Computer: ${c}`);






    //generate random nummer between "min" and "max"
    function random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min; 
    }
    //Player chooses "Rock, Paper or Siccors" and returns choosen object
    function playerPlay() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
          button.addEventListener('click', (e) => {
              if (button.id = "stein") alert("rock!!!");
          });
      });
    }


    //Computer chooses randomly "Rock", "Paper" or "Scissors"
    function computerPlay() {
      let itemnumber = random(0,2);
      //console.log(itemnumber);

      let computerSelection;
      switch (itemnumber)  {
        case 0:
          console.log("ComputerSelection: rock");
          return "rock";
          break;
        case 1:
        console.log("ComputerSelection: paper");
          return "paper";
          break;
        case 2: 
          console.log("ComputerSelection: scissors");
          return "scissors";
          break;
      }
    }
    

  