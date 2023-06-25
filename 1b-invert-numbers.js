/**
 * Write a function that takes an array of numbers, and returns an array with the same numbers, but signs flipped.
 * 
 * function: SignsFlippedArray
 * param: arr
 * return: arr of number
 */

function SignsFlippedArray(arr){
	const newArr =[];

	for (let i of arr){
		let flippedSignNum = i * -1;
		newArr.push(flippedSignNum);
	}

	return newArr;

}
console.log(SignsFlippedArray([1, -3, 2, 8, -10]) , [-1, 3, -2, -8, 10])
console.log(SignsFlippedArray([-1,-2,-3]) , [1,2,3,])
