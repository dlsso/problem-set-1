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

var primeTime = function(x) {
	var prime = true;
	if(x <= 1) {
		return false;
	}

	else {
		for(var i=2; i < x; i++){
			if (x % i === 0){
				var prime = false;
			}
		}
	}
	return prime;
};

console.log("3. Use primeTime('x')")