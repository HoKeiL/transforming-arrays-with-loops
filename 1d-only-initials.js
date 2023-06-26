/**
 *  Write a function that takes an array of names (always <firstname> <surname> format) and returns an array of initials for each person.
 * 
 * function: initials
 * param: arr of string
 * return: arr of string
 */

function initials(names){
	const newArr = [];
	
		for (const i of names){
			const nameArray = i.split(" ")
	  		const firstName = nameArray[0].charAt(0).toUpperCase()
	  		const lastName = nameArray[nameArray.length - 1].charAt(0).toUpperCase()
	  		newArr.push(firstName + "."+ lastName + ".")
		}
	
	return newArr;
	
}
	

console.log(initials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])

