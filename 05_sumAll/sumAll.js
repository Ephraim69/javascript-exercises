const sumAll = function(n1, n2) {
	if (typeof(n1) !== "number" || typeof(n2) !== "number")
		return "ERROR";
	if (n1 < 0 || n2 < 0)
		return "ERROR";
	const range = [n1, n2];
	range.sort((a,b) => a-b);
	for (let i = range[0] + 1; i <= range[1]; i++)
	{
		range[0] += i;
	}
	return range[0];
};

// Do not edit below this line
module.exports = sumAll;
