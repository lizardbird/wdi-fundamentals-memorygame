console.log("JS file is connected to HTML! Woo!")

var cards = ["queen","queen", "king", "king"];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var score = 0;

function createBoard() {
	for (var i = 0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
		gameBoard.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen'){
		this.innerHTML= '<img src = "images/queen-of-hearts.png">';
	}// else if (this.getAttribute('data-card') === 'queen diamonds'){
		//this.innerHTML= '<img src = "images/queen-of-diamonds.png">';
	 else if (this.getAttribute('data-card') === 'king '){
		this.innerHTML= '<img src = "images/king-of-hearts.png">';
	} //else if (this.getAttribute('data-card') === 'king diamonds'){
		//this.innerHTML= '<img src = "images/king-of-diamonds.png">';
	 else {alert("That card does not exist!");}	
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);}
}

function isMatch(cardsPlayed) {
	if (cardsPlayed[0] === cardsPlayed[1]) {
		alert("You found a match!");
		score +=1;
		document.getElementById('score').textContent = "Your score is " + score;
		} else {
		alert("Sorry, try again.");
		}
}


createBoard();

/*var createCards = function(){
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < 4; i++){
		var newCard = document.createElement('div');
		newCard.className = "card";
		gameBoard.appendChild(newCard);	
	}
};
createCards();
*/

/*
if (cardOne === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/
