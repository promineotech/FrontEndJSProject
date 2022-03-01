//Promineo Tech, Front End Software Development
//Project 6
//Create the the classic card game war
//52 cards, ties results in 0 points, display total points at end
//Write a Suite of Tests in Mocha and Chai to test functions

class Deck {
	constructor(){
		this.deckOfCards = [];
	}
	buildDeck(){
		this.suit = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];	
		this.faceValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
		for (let x = 0; x < this.suit.length; x++){
			for (let i = 0; i < this.faceValue.length; i++){
			this.deckOfCards.push(this.faceValue[i] + ' of ' +this.suit[x]);
			}
		}
	}
	shuffleDeck() {
    		let i = 0;
        	let j = 0;
        	let temp = 0;
    		for (i = this.deckOfCards.length - 1; i > 0; i--) {
        		j = Math.floor(Math.random() * (i + 1));
        		temp = this.deckOfCards[i];
        		this.deckOfCards[i] = this.deckOfCards[j];
        		this.deckOfCards[j] = temp;
    		}
	}

	returnDeck(){
		return this.deckOfCards;
	}

	dealOneCard(){
		return this.deckOfCards.pop();

	}

}

class Player {
	constructor(){
		this.hand = [];
		this.score = 0;
	}

	takeOneCard(card){
		this.hand.push(card);
	}

	returnHand(){
		return this.hand;
	}

	playCard(){
		return this.hand.pop();
	}
	incrementScore(){
		this.score++;
	}
	returnScore(){
		return this.score;
	}
	returnCardValue(card){
		if (card.startsWith('2')){
			return 2;
		}
		else if (card.startsWith('3')){
			return 3;
		}
		else if (card.startsWith('4')){
			return 4;
		}
		else if (card.startsWith('5')){
			return 5;
		}
		else if (card.startsWith('6')){
			return 6;
		}
		else if (card.startsWith('7')){
			return 7;
		}
		else if (card.startsWith('8')){
			return 8;
		}
		else if (card.startsWith('9')){
			return 9;
		}
		else if (card.startsWith('10')){
			return 10;
		}
		else if (card.startsWith('Jack')){
			return 11;
		}
		else if (card.startsWith('Queen')){
			return 12;
		}
		else if (card.startsWith('King')){
			return 13;
		}
		else if (card.startsWith('Ace')){
			return 14;
		}

	}

}


//Create, Build, and Shuffle Deck of Cards
myDeck = new Deck();
myDeck.buildDeck();
myDeck.shuffleDeck();

//Create New Players
player1 = new Player();
player2 = new Player();

//Deal Cards to Players one at a time
for (let x = 0; x < 26; x++){
	player1.takeOneCard(myDeck.dealOneCard());
	player2.takeOneCard(myDeck.dealOneCard());
}

//Play each Card
for (let x = 0; x < 26; x++){

	let player1Card = player1.playCard();
	let player2Card = player2.playCard();

	if (player1.returnCardValue(player1Card) > player2.returnCardValue(player2Card)){
		console.log('Player one wins this round because ' + player1Card + ' beats ' + player2Card);
		player1.incrementScore();
	}
	else if (player1.returnCardValue(player1Card) < player2.returnCardValue(player2Card)){
		console.log('Player two wins this round because ' + player2Card + ' beats ' + player1Card);
		player2.incrementScore();
	}
	else{
		console.log('This round is a tie because ' + player1Card + ' ties with ' + player2Card);
	}

		
}

// Display Final results
console.log("Player 1 Final Score: " + player1.returnScore());
console.log("Player 2 Final Score: " + player2.returnScore());

