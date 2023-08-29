// Function to convert number values to strings with 's' suffix for seconds
const validateDuration = (value) => {
	// Check if the value is a valid number
	if (Number(value)) {
		// If it is a number, add 'ms' suffix and return the value as a string
		return `${value}ms`;
	}

	// Check if the value can be parsed as an integer or float
	if (parseInt(value) || parseFloat(value)) {
		// If it can be parsed as a number, return the value as a string
		return value;
	} else {
		// If the value is not a valid number, return a default value of "300ms"
		return "300ms";
	}
};

export default validateDuration;
