/*
 * Create a list that holds all of your cards
 */
window.onload = function() {
    beginner();
    //let listArray = [];
}

let cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle', 'fa-diamond', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-paper-plane-o', 'fa-cube'];
let deck = document.querySelector('.deck');
let container = document.querySelector('.container');
let regenerate = document.createElement('ul');
let count = 0;
let counter = document.querySelector('.counter');
let starElement = document.querySelectorAll('.fa-star');
let moves = document.querySelector('.moves');
let clickedCard = document.querySelectorAll('.card');
let deneme = [...clickedCard];
console.log(deneme[1]);
console.log(clickedCard[1]);
let listArray = [];
    

function cardShuffle() {
    shuffle(cards);
    console.log(cards);
    
    deck.remove();
    
    
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



function clickCounter() {
    count += 1;
    
    console.log(counter);
    counter.innerHTML = 'Counter: ' + count;
    console.log(count);
}



function badge() {

    if (count > 4 && count <= 6) {
        starElement[2].className = 'fa fa-star-half-o';
    } else if (count > 6 && count <= 8) {
        starElement[2].className = 'fa fa-star-o';
        moves.textContent = '2 Stars';
    } else if (count > 8 && count <= 10) {
        starElement[1].className = 'fa fa-star-half-o';
    } else if (count > 10 && count <= 12) {
        starElement[1].className = 'fa fa-star-o';
        moves.textContent = '1 Star';
    } else if (count > 12 && count <= 14) {
        starElement[0].className = 'fa fa-star-half-o';
    } else if (count > 14 && count <= 16) {
        starElement[0].className = 'fa fa-star-o';
        moves.textContent = 'No Badge';
    }
}

function begin(deneme) {

    
   // console.log(deneme);
    //for (let i = 0; i < clickedCard.length; i++) {
      //  console.log(deneme);
        //deneme.addEventListener('click', function(e) {
        //	 e.target.removeEventListener('click',arguments.callee);
             
        	//e.stopPropagation();
        	//deneme.dispatchEvent(event);
            //e.preventDefault();
           // console.log("tık");
            //console.log(deneme);
            displayCard(deneme);
            collectMatchedCards(deneme);
            clickCounter();
            badge();
            
            //console.log(e.target);
            if (listArray.length % 2 === 0) {
                console.log("true");
                if (listArray[(listArray.length - 1)] === listArray[(listArray.length - 2)]) {
                    console.log("true");
                    //console.log(e.target);
                    console.log(listArray[(listArray.length - 1)])
                    //console.log(clickedCard[i]);
                    //console.log(clickedCard[i - 1]);
                    locked(listArray[(listArray.length - 1)]);

                } else {
                    //e.target.addEventListener('click',arguments.callee);

                    setTimeout(function() { hide(listArray[(listArray.length - 1)]); }, 750);
                    setTimeout(function() { hide(listArray[(listArray.length - 1)]); }, 750);

                }
            }
            if (listArray.length === 16) {
                setTimeout(winner, 1000);
            }
        }
    


function displayCard(open) {
    open.className = 'card open show';
    //let deneme = open.activeElement;
    //e.target.removeEventListener('click',arguments.callee);
    //console.log(deneme);
}


function collectMatchedCards(list) {
    let cardName = list.children[0].className;
    console.log(cardName);
    listArray.push(cardName);
    console.log(listArray);
    //return cardName;
}

function locked(equal) {
    let matchedCards = document.querySelectorAll('[class=' + CSS.escape(equal) + ']');
    console.log(matchedCards.nodeName);
    console.log(matchedCards);
    console.log(matchedCards[1].parentElement.className);
    for (let i = 0; i < matchedCards.length; i++) {
        matchedCards[i].parentElement.className = 'card match';
        console.log(matchedCards);
    }
}

function hide(notEqual) {
    let unMatchedCards = document.querySelectorAll('[class=' + CSS.escape(notEqual) + ']')
    console.log(unMatchedCards);
    for (let i = 0; i < unMatchedCards.length; i++) {
        unMatchedCards[i].parentElement.className = 'card';

        console.log(unMatchedCards);
    }
    listArray.pop();
    console.log(listArray);
}

function winner() {
    alert('Congratulations ! Deck is cleared sucessfully ! ' + moves.textContent);
}

function emptyArray() {
    let listArray = [];
    console.log(listArray);
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

const reset = document.querySelector('.restart');
reset.addEventListener('click', function(evt) {
    listArray.length = 0;
    count = -1;
    moves.textContent = '3 Stars';
    for (i = 0; i < starElement.length; i++) {
        starElement[i].className = 'fa fa-star'
    }
    clickCounter();
    cardShuffle();
    beginner();
    console.log(listArray);
});	

function beginner () {
for (let i = 0; i < clickedCard.length; i++) {
    console.log(clickedCard.length);
        console.log(clickedCard[i]);
        deneme = clickedCard[i];
        console.log(deneme);
        //deneme.addEventListener('click', begin);
        deneme.addEventListener('click',function(e){
            begin(e.target);
            console.log(e.target);
        });
    }
}