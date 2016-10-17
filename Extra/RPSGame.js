/**
 *   @author N, A(NA)
 *   @version 0.0.1
 *   @summary Rock-Paper-Scissors Code || created: 10.17.2016
 *   @todo
 */


"use strict";
const PROMPT = require('readline-sync');

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let playerChoice, computerChoice, continueGame;

function main() {
	setPlayerChoice(); //getUserInput
	setComputerChoice(); //getRandomGeneratedInput
	getWinner(); //DeclareWinner
}

main();

function setPlayerChoice() {
	process.stdout.write('\x1Bc');
	let tempChoice = 0;
	tempChoice = Number(PROMPT.question(`\n1=Rock, 2=Paper or 3=Scissors?`));
	if(tempChoice > 3 || tempChoice < 1)
	{
		PROMPT.question(`\nPLEASE INPUT VALID CHOICE!`);
		return setPlayerChoice();
	}
	else {
	playerChoice = tempChoice;
	}
}
	
function setComputerChoice() {
	var minVal = 1;
	var maxVal = 3
	computerChoice = Math.floor(minVal+(Math.random()*(maxVal-minVal)));
}

function continueGamen() {
	continueGame = Number(PROMPT.question(`\nWould you like to play again?: 1 = YES, 2 = NO: `));
		if(continueGame > 2 || continueGame < 1) {
			PROMPT.question(`\nPlease input proper choice!`);
			return continueGamen();
		}
		else if(continueGame == 2) {
			//exit
		}
		else {
			return main();
		}
}
//(1)ROCK, (2)PAPER, (3)SCISSORS
function getWinner() {
	if(playerChoice == computerChoice) {
		PROMPT.question(`TIE!`);
		return continueGamen();
		}
	
	else if(playerChoice == ROCK && computerChoice == PAPER) {
		PROMPT.question(`\nComputer has Won using Paper!`);
		return continueGamen();
	}
	
	else if(playerChoice == PAPER && computerChoice == SCISSORS) {
		PROMPT.question(`\nComputer has Won using SCISSORS!`);
	return continueGamen();
	}
	
	else if(playerChoice == SCISSORS && computerChoice == ROCK) {
		PROMPT.question(`\nComputer has Won using ROCK!`);
	return continueGamen();
	}
	
	else {
		PROMPT.question(`\nYou've WON! against ${computerChoice}`);
		return continueGamen();
	}
}














