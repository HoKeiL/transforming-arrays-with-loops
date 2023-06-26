/**
 * Write a function that takes an array of objects representing Pokémon, 
 * with string properties name and type, 
 * and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".
 * 
 * example: [{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]
 * -> ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."] 
 * 
 * 
 * function: pokemonType
 * param:array of object
 * return: an array of string
 * 
 */

function pokemonType(obj) {

	return `${obj.name} is a ${obj.type.toLowerCase()} type Pokémon.`;
}


function pokemonTypes(arr) {
	
	return arr.map(pokemonType);
}



console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."] )
