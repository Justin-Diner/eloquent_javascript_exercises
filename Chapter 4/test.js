// Question #1a - The Sum of a Range - Page 78

/*let range = (start, end) => {
	let result = [];
	for (let i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
}

console.log(range(3, 10));
// [3, 4, 5, 6, 7, 8, 9, 10]

// Question #1b
let arrayofNums = range(1, 10);
let sum = numbers => {
	let result = 0;
	for (let num of numbers) {
		result += num;
	}
	return result
}

console.log(sum(arrayofNums));
// 55

// Question 1c 
let range2 = (start, end, step) => {
	let result = [];
	if (start === end) {
		return "Start is equal to end.";
	}
	if (start <= end) {
		for (let i = start; i <= end; i += step) {
			result.push(i);
		}
	} else { 
		for (let i = start; i >= end; i += step) {
			result.push(i);
		}
	}
	return result;
}

console.log(range2(1, 10, 2));
// [1, 3, 5, 7, 9]
console.log(range2(5, 2, -1));
// [5, 4, 3, 2]
console.log(range2(10, 10, -1));
// "Start is equal to end."
*/

// Question 2 - Reversing an Array - Page 79
//Method Reverse 


/*let methodReverse = array1 => {
	return array1.reverse();
} 
*/


/*// Reverse In a New Array
let reverseArray = array2 => {
	let resultArray = [];
	for (let i = array2.length - 1; i >= 0; i--){
		resultArray.push(array2[i]);
	}
	return resultArray
}*/


/*let reverseArrayInPlace = array3 => {
	let temp;
	for(let i = 0; i < Math.floor(array3.length / 2); i++) {
		temp = array3[i];
		array3[i] = array3[array3.length - 1 - i];
		array3[array3.length - 1 - i] = temp;
	}
	return array3; 
}*/

/*const testArray = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5];
const testArray3 = [1, 2, 3, 4, 5];
 console.log(methodReverse(testArray));
// [5, 4, 3, 2, 1]
 console.log(reverseArray(testArray2));
// [5, 4, 3, 2, 1]
 console.log(reverseArrayInPlace(testArray3));
// [5, 4, 3, 2, 1]
*/

// Question 3: A List - Page 79

let arrayToList = arr => {
	let list = {};
	if (Array.isArray(arr)) {
		let currListItem = list;
		for (let item of arr) {
			let newListItem = {
				value: item, 
				rest: null
			};
			if (typeof currListItem.rest === 'undefined') {
				list = newListItem;
			} else {
				currListItem.rest = newListItem;
			}
		currListItem = newListItem;
		}
	}
	return list
}

let listToArray = list => {
	let result = [];
	if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
		return result;
	} else {
		result.push(list.value);
		while (list.hasOwnProperty('rest') && list.rest !== null) {
			list = list.rest;
			if (list.hasOwnProperty('value')) {
				result.push(list.value);
			}
		}
	}
	return result;
}

let arrayInput = [1, 2, 3];
console.log(arrayToList(arrayInput));
console.log(listToArray())