


var round = [1,2,3,4,5];
var x = 0;
var y = 0;
var playWin = "You win!";
var compWin = "Sorry, you lose!";


var compare = function(choice1, choice2){
	if(choice1 === choice2){
		i--;
		return "It is a tie!";
	}
	if(choice1 === 'Rock'){
		if(choice2 === "Paper"){
			y++;
			return compWin;
		}
		if(choice2 === "Scissors"){
			x++;
			return playWin;
		}	
	}
	if(choice1 === 'Paper'){
		if(choice2 === 'Scissors'){
			y++;
			return compWin;
		}
		if(choice2 === "Rock"){
			x++;
			return playWin;
		}
	}
	if(choice1 === 'Scissors'){
		if(choice2 === 'Rock'){
			y++;
			return compWin;
		}
		if(choice2 === 'Paper'){
			x++;
			return playWin;
		}	
	}
}

function game(){
	var playerChoice = prompt("Choose Rock, Paper, or Scissors");
	var computerChoices = ["Rock", "Paper", "Scissors"];
	function randomChoice(){
	return computerChoices[Math.floor(Math.random()*computerChoices.length)];
};
	alert(compare(playerChoice, randomChoice()));
	alert(x+" - "+y);
}

for(var i = 0; i < 6; i++){
	if(round[i]){
		game();		
	}
}
