/**
 * Applies animation using the provided configuration.
 * @param {Object} config - The animation configuration.
 * @returns {String} - The final animation configuration.
 */
const applyAnimation = (config) => {
	// default values for animation properties
	const defaultValues = {
		name: "popUp",
		duration: ".3s",
		timingFunction: "linear",
		delay: "0s",
		iterationCount: "1",
		direction: "normal",
		fillMode: "none",
	};

	// destructuring animation config key
	const {
		name,
		duration,
		timingFunction,
		delay,
		iterationCount,
		direction,
		fillMode,
	} = { ...defaultValues, ...config };

	return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode}`;
};

export default applyAnimation;
