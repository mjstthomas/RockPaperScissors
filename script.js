window.setTimeout(function(){
var playerChoice = prompt("Choose Rock, Paper, or Scissors")
}, 1000);
var computerChoices = ["Rock", "Paper", "Scissors"];

function randomChoice(){
	return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
