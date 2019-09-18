var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];

function checkForMatch() {
document.getElementById('game-board').setAttribute('src', cards.cardImage);
if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!")} 
else {alert("Sorry, try again.");}
}

function flipCard() {
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards.rank);
cardsInPlay.push(cards.rank);
console.log(cards.cardImage);
console.log(cards.suit);
}

checkForMatch();

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('i','data-id');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();




