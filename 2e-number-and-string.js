/** 
 * Write a function that takes an array of numbers and returns an array of plain objects, with properties:
 * 
 *  asNumber - the original number
 *  asString - a string representation of the number
 * 	Example: [4, -3.2] -> [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]
 * 
 * function: numAndString 
 * param: an array of numbers
 * return: an array of plain objects
 * 
 */

function numAndString(num){
	return {asNumber: num , asString:  num.toString()};
}


function numAndStringAll(arr) {
	return arr.map(numAndString)
}

console.log(numAndStringAll([4, -3.2]), [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }])