/*
 * Create a list that holds all of your cards
 */
const reset = document.querySelector('.restart');
reset.addEventListener('click', function(evt) {
    cardShuffle();
    //removeDeck()
});

function cardShuffle() {
    let cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle']
    shuffle(cards);
    console.log(cards);
    const deck = document.querySelector('.deck');
    deck.remove();
    const container = document.querySelector('.container');
    const regenerate = document.createElement('ul');
    regenerate.className = 'deck';
    container.appendChild(regenerate);
    for (let i = 0; i < cards.length; i++) {
        let list = document.createElement('li')
        let ist = document.createElement('i')
        list.className = 'card';
        ist.className = 'fa';
        ist.classList.add(cards[i]);
        regenerate.appendChild(list);
        list.appendChild(ist);
    }
}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */