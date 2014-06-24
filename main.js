// Problem 1

var letterCapitalize = function(string) {
	var words = string.split(" ");

	for(var i=0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}

	return words.join(" ");
}

console.log("1. Use letterCapitalize('some string') to test.")




// Problem 2
var wordCount = function(string) {
	var words = string.split(" ");
	return words.length
}

console.log("2. Use wordCount('some string') to test.")




// Problem 3