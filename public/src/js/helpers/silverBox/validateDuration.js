// Function to convert number values to strings with 's' suffix for seconds
const validateDuration = (value) => {
	// Check if the value is a valid number
	if (Number(value)) {
		// If it is a number, add 'ms' suffix and return the value as a string
		return `${value}ms`;
	}

	// Check if the value is a valid number with "ms" or "s" suffix, or return "300ms" as the default
	return (parseInt(value) || parseFloat(value)) &&
		(value.endsWith("ms") || value.endsWith("s"))
		? value
		: "300ms";
};

export default validateDuration;
