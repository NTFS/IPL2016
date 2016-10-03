/*

Due: #10 pg. 84 (ONLY run once), Git course
Design the logic for a program for the River Falls Homes Construction Company.
Design a program that prompts the user for a lot number in the River Falls subdivision,
and data about the home to be built there including number of bedrooms, number of bathrooms,
and size of garage in number of cars it holds.
Output is the price of the home which is $50,000 base price plus $17,000 for each bedroom,
$12,500 for each bathroom,, and $6,000 for each car the garage holds.

*/

/**
 *   @author N, A (NA)
 *   @version 0.0.1
 *   @summary Project 1 code || created: 09.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

// | bedroom: x17,000 | bathroom: x12,500 | Each car: x06,000 |
let lotNumber, numBedrooms, numBathrooms, garageSize, totalPrice;
let bedroomPrice = "17000";
let bathroomPrice = "12500";
let eachCarPrice = "6000";
let basePrice = "50000";
let bathroomTotalPrice, bedroomTotalPrice, garageSizeTotalPrice;

function main() {
	process.stdout.write('\x1Bc'); //Clears the screen
	setLotNumber();
	setNumBedrooms();
	setNumBathrooms();
	setGarageSize();
	getTotalPrice();
	printOutput();
}

main();

function setLotNumber() {
	process.stdout.write('\x1Bc'); //Clears the screen
	lotNumber = 0;
	lotNumber = Number(PROMPT.question(`\nPlease enter your (River Falls Subdivision) Lot Number: `));
}

function setNumBedrooms() {
	process.stdout.write('\x1Bc'); //Clears the screen
	numBedrooms = 0;
	numBedrooms = Number(PROMPT.question(`\nPlease enter the number of bedrooms: `));
}

function setNumBathrooms() {
	process.stdout.write('\x1Bc'); //Clears the screen
	numBathrooms = 0;
	numBathrooms = Number(PROMPT.question(`\nPlease enter the number of bathrooms: `));
}

function setGarageSize() {
	process.stdout.write('\x1Bc'); //Clears the screen
	garageSize = 0;
	garageSize = Number(PROMPT.question(`\nPlease enter the number of cars the garage holds: `));
}

function getTotalPrice() {
	process.stdout.write('\x1Bc'); //Clears the screen
	let locTotalPrice = Number(basePrice); //Base price
	bathroomTotalPrice = 0;
	bedroomTotalPrice = 0;
	garageSizeTotalPrice = 0;
	
	bathroomTotalPrice = Number(numBathrooms * bathroomPrice);
	bedroomTotalPrice = Number(numBedrooms * bedroomPrice);
	garageSizeTotalPrice = Number(garageSize * eachCarPrice);
	
	if(bathroomTotalPrice !== 0) {
		locTotalPrice = Number(locTotalPrice + bathroomTotalPrice);
	}
	if(bedroomTotalPrice !== 0) {
		locTotalPrice = Number(locTotalPrice + bedroomTotalPrice);
	}
	if(garageSizeTotalPrice !== 0) {
		locTotalPrice = Number(locTotalPrice + garageSizeTotalPrice);
	}
	if(basePrice !== 0 || basePrice != NULL)
	{
		totalPrice = Number(locTotalPrice);
	}
}

function printOutput() {
	console.log(`The Total Price of Lot ${lotNumber} is: \$${totalPrice}\nBathroom: \$${bathroomTotalPrice}\
	\nBedroom: \$${bedroomTotalPrice}\nGarage Size: \$${garageSizeTotalPrice}`);
}






