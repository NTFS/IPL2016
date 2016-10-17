/**
 *   @author N, A(NA)
 *   @version 0.0.1
 *   @summary Project 2 code || created: 09.26.2016
 *   @todo
 */
	
 /*
------------------------------------------------------------------------------------------
The Drive-Rite Insurance Company provides automobile insurance policies for drivers.
Code the following:

A program that accepts insurance policy data, including a policy number,
customer last name, customer first name, birthdate, premium due date (month, day, and year),
and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:
------------------------------------------------------------------------------------------
Base price = $100
Age >15 && < 30 = + $20
Age >= 30 && < 45 +10
Age >=60 +30
Each at-fault accident = + 50
Use proper recursion looping and input validation/sanitization.
------------------------------------------------------------------------------------------
*/
 
"use strict";
const PROMPT = require('readline-sync');

const basePrice = Number(100);

let policyData, customerLastName, customerFirstName;
let totalPrice, atFaultAccidents, policyNumber, birthdayDay, birthdayMonth, birthdayYear, customerAge, dueDateMonth, dueDateDay, dueDateYear, accidents, continueResponse;
var dateNow = new Date();

function main()
{
	process.stdout.write('\x1Bc'); //Clears the screen
     if (continueResponse == null)
		 {
			  setContinueResponse();
		 }
     if (continueResponse === 1) 
		 {
			setCustomerFirstName();
			setCustomerLastName();
			setPolicyNumber();
			setBirthday();
			setCustomerAge();
			setPremiumDueDate();
			setAtFaultAccidents();
			calculateTotal();
			//return main();
		 }
}

main();

function setContinueResponse() {
     if (continueResponse === 1) {
	 	process.stdout.write('\x1Bc'); //Clears the screen
          continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
          if (continueResponse !== 0 || continueResponse !== 1) {
               console.log(`${continueResponse} is an incorrect value. Please try again.`);
               continueResponse = 1;
               setContinueResponse(); //improper recursion
          }
     } else {
          continueResponse = 1;
     }
}
function setCustomerFirstName() {
	process.stdout.write('\x1Bc'); //Clears the screen
	customerFirstName = "";
	customerFirstName = PROMPT.question(`\nPlease enter your First Name: `);
}
function setCustomerLastName() {
	process.stdout.write('\x1Bc'); //Clears the screen
	customerLastName = "";
	customerLastName = PROMPT.question(`\nPlease enter your Last Name: `);

}
function setPolicyNumber() {
	//sanitization
	process.stdout.write('\x1Bc'); //Clears the screen
	let locpolicyNumber = 0;
	policyNumber = Number(PROMPT.question(`\nPlease enter your Policy Number: `));
	//validation
	if(policyNumber !== 0) {
		policyNumber = locpolicyNumber;
	}
	else {
		process.stdout.write('\x1Bc'); //Clears the screen
		//sanitization
		process.stdout.write('Please input correct Policy Number!');
		return setPolicyNumber();
	}
}
function setBirthday() {
	//sanitization and validation
	process.stdout.write('\x1Bc'); //Clears the screen
	let locBirthdayMonth, locBirthdayYear = 0;
	birthdayDay = Number(PROMPT.question(`\nPlease enter your birthdate Day: `));
	locBirthdayMonth = Number(PROMPT.question(`\nPlease enter your birthdate Month: `));
	//validation
	if(locBirthdayMonth <= 12 && locBirthdayMonth > 0)
	{
		birthdayMonth = locBirthdayMonth;
	}
	//validation
	locBirthdayYear = Number(PROMPT.question(`\nPlease enter your birthdate Year: `));
	if(locBirthdayYear <= dateNow.getFullYear() && locBirthdayYear > 0)
	{
		birthdayYear = locBirthdayYear;
	}
}
function setCustomerAge() {
	process.stdout.write('\x1Bc'); //Clears the screen
//var days=dateNow.getDate() - birthdayDay;
//var months=dateNow.getMonth() - birthdayMonth;
var years = dateNow.getFullYear() - birthdayYear;
//Only returning Years here; as month and day is unneeded for solution
customerAge = years;
}
function setPremiumDueDate() {
	//Sanitization
	process.stdout.write('\x1Bc'); //Clears the screen
	dueDateDay, dueDateYear, dueDateMonth = 0;
	let locDueDateMonth, locDueDateYear= 0;
	
	//instantiation and validation
	dueDateDay = Number(PROMPT.question(`\nPlease enter your due date Day: `));
	locDueDateMonth = Number(PROMPT.question(`\nPlease enter your due date Month: `));
	if(locDueDateMonth <= 12 || locDueDateMonth > 0) {
		dueDateMonth = locDueDateMonth;
	} else {
		process.stdout.write('\x1Bc'); //Clears the screen
		process.stdout.write('Please enter the correct due date month!');
		return setPremiumDueDate() 
	}
	locDueDateYear = Number(PROMPT.question(`\nPlease enter your due date Year: `));
	if(locDueDateYear <= dateNow.getFullYear() + 100 && locDueDateYear > 0) {
		dueDateYear = locDueDateYear;
	} else {
		process.stdout.write('\x1Bc'); //Clears the screen
		process.stdout.write('Please enter the correct due date year!');
		return setPremiumDueDate() 
	}
}
function setAtFaultAccidents() {
	process.stdout.write('\x1Bc'); //Clears the screen
	atFaultAccidents = Number(PROMPT.question(`\nPlease enter the number of at-fault accidents you've had: `));
}
function calculateTotal() {
process.stdout.write('\x1Bc'); //Clears the screen
totalPrice = Number(0);
totalPrice = Number(basePrice);
let youngAdultPremium = Number(20);
let adultPremium = Number(10);
let seniorPremium = Number(30);

if(customerAge > Number(15) && customerAge < Number(30)) {
	totalPrice += Number((youngAdultPremium));
} else if(customerAge >= Number(30) && customerAge < Number(45)) {
	totalPrice += Number((adultPremium));
	} else if(customerAge >= Number(60)) {
		totalPrice += Number((seniorPremium));
	}
	totalPrice += Number((atFaultAccidents * 50));
	console.log(`Policy #: ${policyNumber}\nPremium due date: ${dueDateDay},${dueDateMonth},${dueDateYear}\nAge: ${customerAge}\nThe total cost for ${customerFirstName}, ${customerLastName}'s premium is: ${Number(totalPrice)}`);
}