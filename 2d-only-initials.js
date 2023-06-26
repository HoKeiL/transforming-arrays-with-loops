/**
 *  Write a function that takes an array of names (always <firstname> <surname> format) and returns an array of initials for each person.
 * 
 * function: initials
 * param: arr of string
 * return: arr of string
 */

function initials(name){

	const splitedName = name.split(" ")
	const firstName = splitedName.charAt(0).toUpperCase()
	const lastName = name[name.length - 1].charAt(0).toUpperCase()
	let initial = firstName + "."+ lastName + "."
	return initial;

}

	
console.log(initials("Ash Ketchum"), "A.K.")
//console.log(initialsAll(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])

