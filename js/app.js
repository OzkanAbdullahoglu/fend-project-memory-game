window.onload = function() {
    timer();
    cardShuffle();
    begin();
}
let cards = [];
let count = 0;
let starElement = document.querySelectorAll('.fa-star');
let moves = document.querySelector('.moves');
let listArray = [];
let deck = document.querySelector('.deck');
let deckCards = deck.children;
let bagdeCount = 0;

for (i = 0; i < deckCards.length; i++) {};
let timeCounter = document.querySelector('.timer');
let second = 0;
let minute = 0;
let hour = 0;
let timerr;

function cardShuffle() {
    for (i = 0; i < deckCards.length; i++) {
        let pushCards = deckCards[i].children[0].className;
        cards.push(pushCards);
    }
    let shuffled = shuffle(cards);
    for (i = 0; i < shuffled.length; i++) {
        deckCards[i].children[0].className = shuffled[i];
    }
}

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
    if (count > 1) {
        moves.innerHTML = count + ' Moves';
    } else {
        moves.innerHTML = count + ' Move';
    }
}

function badge() {
    if (count > 4 && count <= 6) {
        starElement[2].className = 'fa fa-star-half-o';
    } else if (count > 6 && count <= 8) {
        starElement[2].className = 'fa fa-star-o';
        bagdeCount = 2;
    } else if (count > 8 && count <= 10) {
        starElement[1].className = 'fa fa-star-half-o';
    } else if (count > 10 && count <= 12) {
        starElement[1].className = 'fa fa-star-o';
        bagdeCount = 1;
    } else if (count > 12 && count <= 14) {
        starElement[0].className = 'fa fa-star-half-o';
    } else if (count > 14 && count <= 16) {
        starElement[0].className = 'fa fa-star-o';
        bagdeCount = 0;
    }

}
let clickedCard = document.querySelectorAll('.card');

function begin() {

    for (let i = 0; i < clickedCard.length; i++) {
        clickedCard[i].addEventListener('mouseover', function(e) {
            clickedCard[i].style.cssText = 'background: #e1cce1'
        });
        clickedCard[i].addEventListener('mouseleave', function(e) {
            clickedCard[i].style.cssText = 'background: #2e3d49'
        });
        clickedCard[i].addEventListener('click', function(e) {
            collectMatchedCards(clickedCard[i]);
            displayCard(clickedCard[i]);
            clickCounter();
            badge();

            if (listArray.length % 2 === 0) {
                disabled();

                if (listArray[(listArray.length - 1)] === listArray[(listArray.length - 2)]) {
                    setTimeout(function() { locked(listArray[(listArray.length - 1)]); }, 1000);
                    setTimeout(function() { enabled(); }, 1000);
                } else {
                    setTimeout(function() { hide(listArray[(listArray.length - 1)]); }, 1000);
                    setTimeout(function() { hide(listArray[(listArray.length - 1)]); }, 1000);
                }
            }
            if (listArray.length === 6) {
                $('#exampleModalCenter').modal('show');
                let modalSelector = document.querySelector('.modal-body');
                let outputOne = document.createElement('p');
                let outputTwo = document.createElement('p');
                modalSelector.innerHTML = '<p> Your rating is : ' + bagdeCount + ' Star(s)</p>';
                modalSelector.appendChild(outputOne);
                modalSelector.appendChild(outputTwo);
                outputOne.innerHTML = ' Your total move is : ' + count;
                if (hour > 0) {
                    outputTwo.innerHTML = 'You cleared the deck in ' + hour + ' hour(s) ' + minute + ' mins ' + second + ' secs';
                } else {
                    outputTwo.innerHTML = 'You cleared the deck in ' + minute + ' mins ' + second + ' secs';
                }
            }
        });
    }
}

function disabled() {
    let freeze = document.querySelectorAll('[class= card]');
    for (i = 0; i < freeze.length; i++) {
        freeze[i].className = 'card disabled';
    }
}

function enabled() {
    let reactive = document.querySelectorAll('[class=' + CSS.escape('card disabled') + ']');
    console.log(reactive);
    for (i = 0; i < reactive.length; i++) {
        reactive[i].className = 'card';
    }
}

function displayCard(open) {
    open.className = 'card open show ';
}


function collectMatchedCards(list) {
    let cardName = list.children[0].className;
    console.log(cardName);
    listArray.push(cardName);
}

function locked(equal) {

    let matchedCards = document.querySelectorAll('[class=' + CSS.escape(equal) + ']');
    for (let i = 0; i < matchedCards.length; i++) {
        matchedCards[i].parentElement.className = 'card match';
    }
}

function hide(notEqual) {
    let unMatchedCards = document.querySelectorAll('[class=' + CSS.escape(notEqual) + ']')
    for (let i = 0; i < unMatchedCards.length; i++) {
        unMatchedCards[i].parentElement.className = 'card';
    }
    listArray.pop();
    enabled();

}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
    clearInterval(timerr);
}

function timer() {

    timerr = setInterval(function() {
        timeCounter.innerHTML = hour + ' hrs ' + minute + ' mins ' + second + ' secs';
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        };
        if (minute == 60) {
            hour++
            minute = 0;

        };
    }, 1000);
};

const restart = document.querySelector('.restart');
const replay = document.querySelector('.btn-primary');
restart.addEventListener('click', reset);
replay.addEventListener('click', reset);

function reset() {
    location.reload();
}