/**
 *  Write a function that takes an array of names (always <firstname> <surname> format) and returns an array of initials for each person.
 * 
 * function: initials
 * param: arr of string
 * return: arr of string
 */

function initials(name){
	const initial = [];
  
	const splitedName = name.split(" ")
	for (const i of splitedName) {
  
	  const firstName = i[0].charAt(0).toUpperCase()
	  initial.push(firstName)
	}
  
	const output = `${initial.join(".")}.`
  
	  return output;
  
  }

  function initialsAll(arr){

	return arr.map(initials);

  }
	

console.log(initialsAll(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), ["A.K.", "L.H.", "Y.M."])

