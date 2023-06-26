// function name: lowercaseDomains
// parameters:
//   - DOMAIN_NAMES: array of strings
// returns: array of strings

/**
 * Return a formatted version of an array of domain names, all in lower case.
 * @parameter {string[]} domainNames - mixed-case string array of domain names, e.g. `["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]`
 * @returns {string[]} lowercase version of domainNames, e.g. `["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]`
 */
function inLowerCase(domainName) {
	return domainName.toLowerCase();
}

function lowercaseDomains(domainNames) {
	const cleanedDomains = domainNames.map(inLowerCase);
	return cleanedDomains; // or return the map call directly
}

// test cases

console.log(
	lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),
	["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
)

console.log(
	lowercaseDomains(["m1a.tech", "example.cO.UK", "HTTPS://JavaScript.Info"]),
	["m1a.tech", "example.co.uk", "https://javascript.info"]
)