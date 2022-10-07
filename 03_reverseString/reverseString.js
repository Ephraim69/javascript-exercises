const reverseString = function(word) {
	let revString = word;
	revString = revString.split("").reverse().join("");
	return revString;
};

// Do not edit below this line
module.exports = reverseString;
