import "./main.scss";
/*
    we want to test your expirience with es6 and array manipulation
    so let's make a deck of cards class with es6 
        - (52 cards in total)
        - this deck should contain 4 suits (heart, diamond, spade, club)
        - each suit to contain 13 cards (ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king)
    
    this deck should have the following methods

        - .shuffle()
            shuffle the deck (sounds like a fun algorithm, but instead show us your npm skills
            and import a module to help you for this method)

        - .getAllOf( suit )
            reaveal cards of a chosen suit

        - .deal( numberOfCards )
            deal us a card, calling this multiple times should deal us the next card
            
        - .compare()
            compare the top two cards and alert which has a higher value

        tips, extra credit:
        - using the deck class, how would i go about dynamically adding new suits to the deck
        - what if i want aces to be high value, or aces to be low value?

    DONT WORRY IF YOU DONT FINISH EVERYTHING!!! :)
*/

// something to get you started:
class Deck {
  constructor() {}
}

const deck = new Deck();

console.log(deck);
//console.log(deck.compare())
//console.log(deck.deal(num))
//console.log(deck.getAllOf(suit))
//console.log(deck.shuffle(suit))
