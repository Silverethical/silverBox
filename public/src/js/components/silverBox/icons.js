/**
 * Returns an icon based on the alert icon type and custom icon URL. If a custom icon URL is provided,
 * the function will create a user icon using the provided URL. Otherwise, it retrieves the requested icon
 * from the icons object and optionally centers it if the isCentred parameter is true.
 *
 * @param {String} alertIcon - The name of the alert icon to retrieve from the icons object (e.g. "warning").
 * @param {String} customIcon - The URL of a custom icon, if one is specified.
 * @param {String} customSvgIcon - The URL of a custom svg icon, if one is specified.
 * @param {Boolean} isCentred - Determines whether to center the icon or not (default is false).
 *
 * @returns {HTMLElement|null} - The requested icon element or null if no matching icon was found.
 */
const silverBoxIconsComponent = ({
	alertIcon,
	customIcon,
	customSvgIcon,
	isCentred = false,
	customIconClassName,
	customIconId,
	customSvgIconClassName,
	customSvgIconId,
}) => {
	// Check if a custom icon URL was provided.
	if (customIcon) {
		// Return a new custom icon element using the provided URL and clone it to avoid modifying the original icon.
		return silverBoxCreateCustomIcon(customIcon, isCentred, customIconClassName, customIconId, false).cloneNode(
			true
		);
	}

	// Check if a custom svg icon URL was provided.
	if (customSvgIcon) {
		// Return a new svg icon element using the provided URL and clone it to avoid modifying the original icon.
		return silverBoxCreateCustomIcon(
			customSvgIcon,
			isCentred,
			customSvgIconClassName,
			customSvgIconId,
			true
		).cloneNode(true);
	}

	// Check if the requested icon exists in the icons object.
	if (icons[alertIcon]) {
		// closeButton is not a node, so return it as is.
		if (alertIcon === "closeButton") return icons[alertIcon];

		// Retrieve the requested icon from the icons object and clone it to avoid modifying the original icon.
		const clonedIcon = icons[alertIcon].cloneNode(true);

		// Add the "silverBox-centered-icon" class to the cloned icon element.
		if (isCentred) clonedIcon.classList.add("silverBox-centered-icon");

		// Return the cloned icon element.
		return clonedIcon;
	}

	// Return null if no matching icon was found.
	return null;
};

// Create an object to store the available icons.
const icons = {
	warning: createIcon("silverBox-warning", "!"),
	success: createIcon("silverBox-tick-mark", "", "inside"),
	info: createIcon("silverBox-info", "i"),
	error: createIcon("silverBox-error", "", "x"),
	question: createIcon("silverBox-question", "?"),
	// X button
	closeButton:
		'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>',
};

/**
 * Creates an icon element with the specified class name and child element (if any).
 * @param {String} className - The class name for the icon element.
 * @param {String} text - The text to display in the icon element (if any).
 * @param {String} childClass - The class name for a child element (if any).
 * @returns {HTMLElement} - The icon element.
 */
function createIcon(className, text, childClass) {
	// Create a new div element with the specified class name and class.
	const icon = document.createElement("div");

	// add given className to icon
	icon.classList = className;

	// add default classNames
	icon.classList.add("silverBox-icon", "silverBox-default-icon");

	// If childClass is defined, create a child div element with the specified class name and append it to the icon element.
	if (childClass) {
		// create child element
		const child = document.createElement("div");

		// add given child className
		child.classList = childClass;

		// appends the child element to icon
		icon.appendChild(child);
	}

	// If text is defined create a new span element with the text and append it to the icon element.
	else if (text) {
		const span = document.createElement("span");
		span.textContent = text;
		icon.appendChild(span);
	}

	// append icon into
	return icon;
}

/**
 * A function that creates a user icon element with the specified url.
 *
 * @param {String} customIcon - The URL for the user icon.
 * @param {Boolean} isCentred - Whether to center the icon or not.
 * @param {String} customIconClassName - A custom class to add to the icon element.
 * @param {String} customIconId - A custom ID to add to the icon element.
 * @returns {HTMLElement} - The user icon element created.
 */
function silverBoxCreateCustomIcon(customIcon, isCentred, className, id, isSvg) {
	// create a wrapper for customIcon
	const customIconWrapper = document.createElement("div");

	// add className to customIcon wrapper
	customIconWrapper.classList.add(`silverBox-image-wrapper`);

	// give wrapper a centred class if it's given
	if (isCentred) customIconWrapper.classList.add("silverBox-centered-icon");

	// Adds customIcon Id
	if (id) customIconWrapper.id = id;

	// Adds customIcon class
	if (className) customIconWrapper.classList += ` ${className}`;

	// if there is a svg config the svg code will be added to the wrapper
	if (!!isSvg) {
		customIconWrapper.innerHTML += customIcon;
	}

	// if there is no svg config the image element will be created
	else {
		const img = document.createElement("img");
		img.src = customIcon;
		img.classList = "silverBox-icon silverBox-custom-icon";
		customIconWrapper.append(img);
	}

	return customIconWrapper;
}

export default silverBoxIconsComponent;
