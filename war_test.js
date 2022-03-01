let expect = chai.expect;

describe('MyFunctions', function(){
	
	describe('#Deck constructor', function(){
		it("Ensure constructor creates a new instance of the Deck ", function(){
			testDeck1 = new Deck();
			expect(testDeck1).to.be.an('object');
		});
	});


	describe('#buildDeck', function(){
		it("Ensure buildDeck creates a deck of 52 cards", function(){
			testDeck = new Deck();
			testDeck.buildDeck();
			let x = testDeck.returnDeck();
			expect(x).to.have.length(52);
		});
	});

	describe('#shuffleDeck', function(){
		it("Ensure the deck still contains 52 cards after the shuffle", function(){
			testDeck = new Deck();
			testDeck.buildDeck();
			testDeck.shuffleDeck();
			let x = testDeck.returnDeck();
			expect(x).to.have.length(52);
		});
	});


	describe('#returnDeck', function(){
		it("Should return an array", function(){
			testDeck = new Deck();
			let x = testDeck.returnDeck();
			expect(x).to.be.an('array');
		});
	});


	describe('#dealOneCard', function(){
		it("Should return one card with the string 'of' inside it", function(){
			testDeck = new Deck();
			testDeck.buildDeck();
			let x = testDeck.dealOneCard();
			expect(x).to.contain('of');
		});
		
	});
	
	describe('#Player constructor', function(){
		it("Ensure constructor creates a new instance of the player", function(){
			testPlayer = new Player();
			expect(testPlayer).to.be.an('object');
		});
	});


	describe('#takeOneCard', function(){
		it("Should push one card to the player's current hand", function(){ testDeck = new Deck();
			testDeck.buildDeck();
			testDeck.shuffleDeck();
			testPlayer = new Player();
			testPlayer.takeOneCard(testDeck.dealOneCard());
			let x = testPlayer.returnHand();
			expect(x).to.be.have.length(1);
		});
	});

	describe('#returnHand', function(){
		it("Should return an array", function(){
			testPlayer = new Player();
			let x = testPlayer.returnHand();
			expect(x).to.be.an('array');
		});
	});

	
	describe('#playCard', function(){
		it("Should return a string with the substring 'of' inside it", function(){
			testDeck = new Deck();
			testDeck.buildDeck();
			testDeck.shuffleDeck();
			testPlayer = new Player();
			testPlayer.takeOneCard(testDeck.dealOneCard());
			let x = testPlayer.playCard();	
			expect(x).to.contain('of');
		});
	});

	
	describe('#incrementScore', function(){
		it("Should increment the score of the Player by 1", function(){
			testPlayer = new Player();
			let x = testPlayer.returnScore();
			testPlayer.incrementScore();
			let y = testPlayer.returnScore();
			let answer = y - x;
			expect(answer).to.eql(1);
		});
	});
	
	describe('#returnScore', function(){
		it("Should return a number between 0 and 26", function(){
			testPlayer = new Player();
			let x = testPlayer.returnScore();
			expect(x).to.be.within(0,26);
		}); 
	});


	describe('#returnCardValue', function(){
		it("Should return a number between 2 and 14", function(){
			testDeck = new Deck();
			testDeck.buildDeck();
			testDeck.shuffleDeck();
			testPlayer = new Player();
			testPlayer.takeOneCard(testDeck.dealOneCard());
			let answer = testPlayer.playCard();
			let finalAnswer = testPlayer.returnCardValue(answer);
			expect(finalAnswer).to.be.within(2,14);
		}); 
	});



});
