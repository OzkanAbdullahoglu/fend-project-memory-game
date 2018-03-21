/*
 * Create a list that holds all of your cards
 */
window.onload = function() {
    begin();
}
const reset = document.querySelector('.restart');
reset.addEventListener('click', function(evt) {
    cardShuffle();
    begin();
});

function cardShuffle() {
    let cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle', 'fa-diamond', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-paper-plane-o', 'fa-cube']
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

function begin() {
    let clickedCard = document.querySelectorAll('.card');
    console.log(clickedCard);
    //let listOfOpenCards = [];
    for (let i = 0; i < clickedCard.length; i++) {
        console.log(clickedCard[i]);
        clickedCard[i].addEventListener('click', function(e) {
            //e.preventDefault();
            console.log("tık");
            //let choosen = clickedCard[i];
            //let choosen1 =clickedCard[i].className ;
            //clickedCard[i].className = 'card open show';


            console.log(clickedCard[i]);
            
            //console.log(choosen1);
            displayCard(clickedCard[i]);
            openCards(clickedCard[i]);
            if (listArray.length % 2 === 0) {
            	console.log("true");
            	if (listArray[(listArray.length-1)]===listArray[(listArray.length-2)]) {
            		console.log("true");
            		console.log(e.target);
            		console.log(listArray[(listArray.length-1)])
            		console.log(clickedCard[i]);
            		console.log(clickedCard[i-1]);
            		match(listArray[(listArray.length-1)]);
            		//match(clickedCard[i-1]);
            		//console.log(deneme);
            	}
            }
              //listOfOpenCards.push(openCards(clickedCard[i]));
              /*clickedCard[i].removeEventListener('click', function(e){
              	e.preventDefault();
              });
              
/*if (openCards(clickedCard[i]).length!== 0) {
match(clickedCard,)
}*/
     //console.log(listOfOpenCards);     
        });
    }
}




/*clickedCard.forEach(function(check){
	console.log(check);
	if(check.className==='card match') {
		console.log("cardmatch");
	} else if (check.className==='card open show') {
		console.log("cardopenshow") 
	} else if (check.className==='card') {
		check.classList.add('open show');
		//transform.className.add('show');
		console.log(check);
	}
});
	//clickedCard.addEventListener('click', function(evt) {
		console.log("tık");
		//clickedCard.classList.add("open")
		//displayCard();
*/

function displayCard(open) {
    open.className = 'card open show';
    //return cardClass;
    //console.log(cardClass);
}
let listArray = [];
//let deneme = [];
function openCards(list) {
    //let deneme2 = e.target;
    let cardName= list.children[0].className;
    //console.log(cardName);
    listArray.push(cardName);
    //deneme.push(deneme2);
    console.log(listArray);
    return cardName;
}

function match (equal) {
	let matchedCards =document.querySelectorAll('[class=' + CSS.escape(equal) + ']');
	console.log(matchedCards.nodeName);
	console.log(matchedCards);
	console.log(matchedCards[1].parentElement.className);
	for (let i = 0; i<matchedCards.length; i++) {
		matchedCards[i].parentElement.className = 'card match';
		console.log(matchedCards);
	}
	//equal.parentElement.className = 'card match';

	
	
}

function hide (notEqual,array) {
	if (array[i] !== array[i+1]) {
	notEqual.className = 'card';
}
}

/*function counter (count) {

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