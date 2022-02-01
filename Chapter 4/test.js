// Question #1a - The Sum of a Range 


let range = (start, end) => {
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