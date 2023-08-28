/**
 * Applies animation using the provided configuration.
 * @param {Object} config - The animation configuration.
 * @returns {String} - The final animation configuration.
 */
const applyAnimation = (config) => {
	// default values for animation properties
	const defaultValues = {
		name: "popUp",
		duration: "300ms",
		timingFunction: "linear",
		delay: "0ms",
		iterationCount: "1",
		direction: "normal",
		fillMode: "none",
	};

	// Convert number values to strings with 's' suffix for seconds
	const convertToMilSeconds = (value) => {
		const regex = /[a-zA-Z]$/; // Regular expression to match any alphabetic character at the end of a string

		// If the value is a number
		if (typeof value === "number") {
			// Return the value with "ms" suffix
			return `${value}ms`;
		}

		// If the value is a string and does not match the regex
		if (typeof value === "string" && !regex.test(value)) {
			// Return the value with "ms" suffix added
			return `${value}ms`;
		}

		return value; // Return the value as is (no modification needed)
	};

	// Normalize duration and delay values
	const normalizedConfig = {
		...defaultValues,
		...config,
		duration: convertToMilSeconds(config.duration) || defaultValues.duration,
		delay: convertToMilSeconds(config.delay) || defaultValues.delay,
	};

	// Destructure animation config keys
	const {
		name,
		duration,
		timingFunction,
		delay,
		iterationCount,
		direction,
		fillMode,
	} = normalizedConfig;

	return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode}`;
};

export default applyAnimation;
