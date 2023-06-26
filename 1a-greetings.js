/**
 * Write a function that takes an array of names, and returns an array with a greeting for each of those names: "Hello, <name>!".
 *  function name: greetingPlusNames
 * parameters:
 * - NAMES: array of strings
 *  returns: array of strings
 */

function greetingPlusNames(names) {
	const newArr = [];

	for (let name of names) {
		newArr.push("Hello, " + [name] + "!");
	}

	return newArr;
}

console.log(greetingPlusNames(["Ash", "Beth", "Ciara"]), ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"])