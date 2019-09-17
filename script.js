

var round = [1,2,3,4,5];
var x = 0;
var y = 0;
var playWin = "You win!";
var compWin = "Sorry, you lose!";
var playerDisp = document.querySelector("#playerDisp");
var compDisp = document.querySelector("#compDisp");
var p = document.querySelector("p");
var numInput = document.querySelector("input");
var gameButton = document.querySelector("button");
var gameOver = false;
var resetButton = document.getElementById("reset");
var winningScore = 3;


var compare = function(choice1, choice2){
	if(choice1 === choice2){
		p.textContent = "Tie";
		return "It is a tie!";
	}
	if(choice1 === 'Rock'){
		if(choice2 === "Paper"){
			p.textContent = "Paper";
			y++;
			return compWin;
		}
		if(choice2 === "Scissors"){
			p.textContent = "Scissors";
			x++;
			return playWin;
		}	
	}
	if(choice1 === 'Paper'){
		if(choice2 === 'Scissors'){
			p.textContent = "Scissors";
			y++;
			return compWin;
		}
		if(choice2 === "Rock"){
			p.textContent = "Rock";
			x++;
			return playWin;
		}
	}
	if(choice1 === 'Scissors'){
		if(choice2 === 'Rock'){
			p.textContent = "Rock";
			y++;
			return compWin;
		}
		if(choice2 === 'Paper'){
			p.textContent = "Paper";
			x++;
			return playWin;
		}	
	}
}
function Choices(){
	var rbuttons = document.getElementsByName("RPS");
	for(var i = 0;i < rbuttons.length; i++){
		if(rbuttons[i].checked){
			return rbuttons[i].value;
		}
	}
}

function randomChoice(){
	var computerChoices = ["Rock", "Paper", "Scissors"];
	return computerChoices[Math.floor(Math.random()*computerChoices.length)];
};


function game(){
	var playerChoice = Choices();
	alert(compare(playerChoice, randomChoice()));
};

gameButton.addEventListener("click", function(){
	if(!gameOver){
		game();
	}
	if(x === 3){
		gameOver = true;
		playerDisp.style.color = "green";
	}
	if(y === 3){
		gameOver = true;
		compDisp.style.color = "green";
	}
	playerDisp.textContent = x;
	compDisp.textContent = y;
})

resetButton.addEventListener("click", function(){
	x = 0;
	playerDisp.style.color = "white";
	playerDisp.textContent = x;
	y = 0;
	compDisp.style.color = "white";
	compDisp.textContent = y;
	gameOver = false;

})

/*for(var i = 0; i < 6; i++){
	if(round[i]){
		game();
		playerDisp.textContent = x;
		compDisp.textContent = y;
	}
};*/