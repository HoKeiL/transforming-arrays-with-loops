/**
 * Write a function that takes an array of numbers, and returns an array with the same numbers, but signs flipped.
 * 
 * function: SignsFlippedArray
 * param: arr
 * return: arr of number
 */

function SignsFlippednum(num){

	return flippedSignNum = num * -1;


}

function SignsFlippednAll(arr) {
	return arr.map(SignsFlippednum);
	
}
console.log(SignsFlippednAll([1, -3, 2, 8, -10]) , [-1, 3, -2, -8, 10])
console.log(SignsFlippednAll([-1,-2,-3]) , [1,2,3,])
