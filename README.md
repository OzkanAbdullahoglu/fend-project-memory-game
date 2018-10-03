# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Project Rubric Criterias](#project-rubric-criterias)
* [Built With](#built-with)
* [Game Play](#game-play)
* [Authors](#authors)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. This is an Udacity Project for Udacity students. As requested in this project all functionality had been done in `js/app/js` . All functions had been tested and working properly.

## Project Rubric Criterias
#### Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

#### Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

<p align="center">
  <img src="./img/popup.png" alt="Bootstrap Popup"
       width="654" height="450"></p>

#### Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.
<p align="center">

#### Star Rating
The game displays a star rating (from 1-3) that reflects the player's performance. At the beginning of a game, it should display 3 stars. After some number of moves, it should change to a 2 star rating. After a few more moves, it should change to a 1 star rating.

#### Timer
When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
<p align="center">

#### Move Counter
Game displays the current number of moves a user has made.

## Built With
In this project;

* [Font-Awesome](https://fontawesome.com/) had been used for icons ,
* [Bootstrap modal plugin](https://getbootstrap.com/docs/4.0/components/modal/) had been used for creating a slide down modal at the end of the game.

## Game Play
This is a classic memory challenge game , you need to match all cards in the deck. Player rating will be decreasing 3 to 1 star up to the move counts. At the end of the game a popup will appear which inform the player about his/her stats.

## Authors
* Richard Kalehoff
* Ozkan Abdullahoglu
