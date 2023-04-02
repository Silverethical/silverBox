import { createIcon, createUserIcon } from "../helpers/createIcons";

// Create an object to store the available icons.
const icons = {
	warning: createIcon("silverBox-warning", "!"),
	success: createIcon("silverBox-tick-mark", "", "inside"),
	info: createIcon("silverBox-info", "i"),
	error: createIcon("silverBox-error", "", "x"),
	question: createIcon("silverBox-question", "?"),
};

/**
 * Returns an icon element based on the alert icon type and custom icon URL.
 * @param {string} alertIcon - The alert icon type.
 * @param {string} customIcon - The URL for a custom icon (optional).
 * @returns {Element} - The icon element.
 */
const iconsComponent = (alertIcon, customIcon) => {
	// If customIcon is defined, create a user icon using the provided URL.
	if (customIcon) return createUserIcon(customIcon);

	// Return the requested icon based on alertIcon.
	return icons[alertIcon];
};

export default iconsComponent;
