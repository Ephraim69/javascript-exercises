const removeFromArray = function() {
	const arr = arguments[0];

	for (let i = 1; i < arguments.length; i++)
	{
		let n = arr.indexOf(arguments[i]);
		if (n !== -1)
		{
			arr.splice(n, 1);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
