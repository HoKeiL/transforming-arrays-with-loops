/**
 * Write a function that takes an array of strings, and returns an array with the number of characters in each string.
 * 
 * function: charCountArray
 * param: arr
 * return arr of number
 */

function charCountArray(arr){
	const newArr =[];

	for (let i of arr){
		const charlength = i.length;
		newArr.push(charlength);
	}
	return newArr
}

console.log(charCountArray(["one", "two", "three", "four"]) , [3, 3, 5, 4])