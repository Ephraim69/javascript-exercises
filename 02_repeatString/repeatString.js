const repeatString = function(word, n) {
	newStr = "";
	if (n < 0)
		return "ERROR";
	for (let i = 0; i < n; i++)
	{
		newStr += word;
	}
	return newStr;
};
// Do not edit below this line
module.exports = repeatString;
