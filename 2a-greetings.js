/**
 * Write a function that takes an array of names, and returns an array with a greeting for each of those names: "Hello, <name>!".
 *  function name: greetingPlusNames
 * parameters:
 * - NAMES: array of strings
 *  returns: array of strings
 */

function greetingPlusNames(name) {

	return `Hello, ${name}!`;

}

function allGreetingNames(namesArr){
	return namesArr.map(greetingPlusNames);

}


console.log(allGreetingNames(["Ash", "Beth", "Ciara"]), ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"])