import validateDuration from "./validateDuration";
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

	// Normalize duration and delay values
	const normalizedConfig = {
		...defaultValues,
		...config,
		duration: validateDuration(config.duration) || defaultValues.duration,
		delay: validateDuration(config.delay) || defaultValues.delay,
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
