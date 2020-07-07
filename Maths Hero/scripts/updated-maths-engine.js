
//---------------- MATHS ENGINE --------------

// These need re-scoping when the math engine is working 
var ranNum1, ranNum2, sum;
var currentSymbol;
var userAnswer;

//-----------------------------------------------------------------------------------------------------
// randomly generate the first and second numbers
function generateTheNumbers() {

	// Generate the first random number for the sum
	ranNum1 = Math.floor(Math.random()*12);
		if (ranNum1 == 0) {
			ranNum1 = 1;
		}
			console.log("(generateTheNumbers) First random number: " + ranNum1);

	// Generate the second random number for the sum
	ranNum2 = Math.floor(Math.random()*12);
		if (ranNum2 == 0) {
			ranNum2 = 1;
		}
			console.log("(generateTheNumbers) Second random number: " + ranNum2);

	// Check if the first number is bigger than the second, if so flip them
	if (ranNum1 < ranNum2) {
		console.log("(generateTheNumbers) ranNum1 (" + ranNum1 + ") is LESS than ranNum2 (" + ranNum2 + ") - flipping");
		ranNum2 = [ranNum1, ranNum1 = ranNum2][0]; // switch values
			console.log("(generateTheNumbers) RanNum1 is now (" + ranNum1 + ") and ranNum2 is now (" + ranNum2 + ")");
	} else {
			console.log("(generateTheNumbers) Numbers are the same or ranNum1 is GREATER than ranNum2");
	}
			console.log("---------------");

	// Return the values so they can be reached outside of this function
	return ranNum1, ranNum2;
}

//-----------------------------------------------------------------------------------------------------
// randomly choose one of the operators
function generateTheOperatorSymbol() {
	var operatorSymbols = ["+", "-", "x", "/"];
	var operatorIndex = Math.floor(Math.random()*(operatorSymbols.length)); 
			console.log("(generateTheOperatorSymbol) The operatorIndex is: " + operatorIndex);
		currentSymbol = operatorSymbols[operatorIndex];
			console.log("(generateTheOperatorSymbol) The current symbol is: " + currentSymbol);
	
			console.log("---------------");

	//return currentSymbol;
}

//-----------------------------------------------------------------------------------------------------
function createAndRunTheSum() {
		console.log("(createAndRunTheSum) ranNum1 is (" + ranNum1 + ") and ranNum2 is (" + ranNum2 + ")");
		console.log("(createAndRunTheSum) The current symbol is: " + currentSymbol);
	if (currentSymbol === "+")  {
		sum = ranNum1 + ranNum2;
	} else if (currentSymbol === "-") {
		sum = ranNum1 - ranNum2;
	} else if (currentSymbol === "x") {
		sum = ranNum1 * ranNum2;
	} else if (currentSymbol === "/") {
		sum = (ranNum1 / ranNum2).toFixed(0);
		remainder = (ranNum1 % ranNum2);
	} else {
		console.log("(createAndRunTheSum) Looks like an issue with the symbol");
	}

		console.log("(createAndRunTheSum) Sum is: " + ranNum1 + " " + currentSymbol + " " + ranNum2 + " = " + sum);

			if (currentSymbol === "/") {
				console.log("(createAndRunTheSum) The answer is: " + sum + " with a remainder of " + remainder);
			}

		console.log("---------------");
}

//-----------------------------------------------------------------------------------------------------
// TEMPORARY HACK until we get the user entering the sum
function testForUserAnswer() {
	userAnswer = sum;
	console.log("(testForUserAnswer) The User Answer is (the same as sum): " + userAnswer);
}

//-----------------------------------------------------------------------------------------------------

// Run each function in order
generateTheNumbers();
generateTheOperatorSymbol();
createAndRunTheSum();
testForUserAnswer();