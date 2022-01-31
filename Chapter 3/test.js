//Chapter 3 - Functions 
// Question 1 - Minimum 

/*
let minFunction = (a, b) => {
	return console.log(Math.min(a, b));
}

minFunction(4, 7);
*/

// Question 2 - Recursion 

/*
function isEven(target) {
	if (target < 0) {
		return `${target} is negative`;
	}
	if (target == 0) {
		return true;
	} else if (target == 1) {
		return false;
	} else {
		return isEven(target - 2)
	} 
}

console.log(isEven(75));
*/

// Quesiton 3(a) - Bean Counting - Count Bs

/*
let countBs = string => {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === "B") {
			counter++;
		}
	}
	return counter;
}

console.log(countBs("BoldBoybad"));
*/

// Question 3(b) - Bean Counting - 

/*
let countChars = (string, character) => {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === character) {
			counter++;
		}
	}
	return counter;
}

console.log(countChars("Hello there Everyone.", "e"));
// 5
*/



