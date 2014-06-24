// Problem 1

var letterCapitalize = function(string) {
	var words = string.split(" ")
	console.log(words)
	

	for(var i=0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}

	return words.join(" ");
}


// Problem 2