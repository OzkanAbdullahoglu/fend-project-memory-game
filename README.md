# Memory Game Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. As requested in this project all functionality had been done in `js/app/js` . All functions had been tested and working properly.

## Project Rubric Criterias
#### Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
<p align="center">
  <img src="./img/shuffled.png" alt="Shuffling Code"
       width="654" height="450"></p>

#### Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

<p align="center">
  <img src="./img/popup.png" alt="Bootstrap Popup"
       width="654" height="450"></p>
       
#### Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.
<p align="center">
    <img src="./img/before-restart.png" alt="Before restart"
       width="654" height="450"></p>
       <p align="center">
  <img src="./img/after-restart.png" alt="After restart"
       width="654" height="450"></p>
       
#### Star Rating
The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating.
<p align="center">
<img src="./img/star-rating.png" alt="Star rating"
       width="654" height="225"></p>
       
#### Timer
When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
<p align="center">
<img src="./img/game-timer.png" alt="Game timer"
       width="654" height="225"></p>
       
#### Move Counter
Game displays the current number of moves a user has made.
<p align="center">
<img src="./img/current-moves.png" alt="Current moves"
       width="654" height="225"></p>

## Dependencies
In this project;

* [Font-Awesome](https://fontawesome.com/) had been used for icons , 
* [Bootstrap modal plugin](https://getbootstrap.com/docs/4.0/components/modal/) had been used for creating a slide down modal at the end of the game. 
