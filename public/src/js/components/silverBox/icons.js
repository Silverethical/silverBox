/**
 * Returns an icon based on the alert icon type and custom icon URL. If a custom icon URL is provided,
 * the function will create a user icon using the provided URL. Otherwise, it retrieves the requested icon
 * from the icons object and optionally centers it if the isCentred parameter is true.
 *
 * @param {string} alertIcon - The name of the alert icon to retrieve from the icons object (e.g. "warning").
 * @param {string} customIcon - The URL of a custom icon, if one is specified.
 * @param {boolean} isCentred - Determines whether to center the icon or not (default is false).
 *
 * @returns {Element|null} - The requested icon element or null if no matching icon was found.
 */
const silverBoxIconsComponent = ({ alertIcon, customIcon, isCentred = false, customIconClass, customIconId }) => {
	// Check if a custom icon URL was provided.
	if (customIcon) {
		// Create a new user icon element using the provided URL and clone it to avoid modifying the original icon.
		const clonedIcon = silverBoxCreateCustomIcon(customIcon, isCentred, customIconClass, customIconId).cloneNode(
			true
		);

		return clonedIcon;
	}

	// Check if isCentred is true and if the requested icon exists in the icons object.
	if (icons[alertIcon]) {
		// Retrieve the requested icon from the icons object and clone it to avoid modifying the original icon.
		const clonedIcon = icons[alertIcon].cloneNode(true);

		// Add the "centered-icon" class to the cloned icon element.
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
};

/**
 * Creates an icon element with the specified class name and child element (if any).
 * @param {string} className - The class name for the icon element.
 * @param {string} text - The text to display in the icon element (if any).
 * @param {string} childClass - The class name for a child element (if any).
 * @returns {Element} - The icon element.
 */
function createIcon(className, text, childClass) {

	// Create a new div element with the specified class name and class.
	const icon = document.createElement("div");
	icon.classList = className;
	icon.classList.add("silverBox-icon");

	// If childClass is defined, create a child div element with the specified class name and append it to the icon element.
	if (childClass) {
		const child = document.createElement("div");
		child.classList = childClass;
		icon.appendChild(child);
	}
	// If text is defined, create a new span element with the text and append it to the icon element.
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
* @param {string} customIcon - The URL for the user icon.
* @param {boolean} isCentred - Whether to center the icon or not.
* @param {string} customIconClass - A custom class to add to the icon element.
* @param {string} customIconId - A custom ID to add to the icon element.
*
* @returns {HTMLElement} The user icon element created.
*/
function silverBoxCreateCustomIcon(customIcon, isCentred, customIconClass, customIconId) {
	// create customIconWrapper
	const customIconWrapper = document.createElement("div")
	customIconWrapper.classList.add("silverBox-userIcon-wrapper")
	// Create a new img element with the specified class and ID, and set its src attribute to the provided URL.
	const img = document.createElement("img");
	img.setAttribute("src", customIcon);
	img.classList.add("silverBox-icon", "silverBox-custom-icon");
	// Adds customIcon Id
	if (customIconId) img.id = customIconId;
	// Adds customIcon class
	if (customIconClass) img.classList.add(customIconClass)
	if (isCentred) customIconWrapper.classList.add("silverBox-centered-icon");
	// append icon to customIconWrapper
	customIconWrapper.append(img)
	return customIconWrapper;
}

export default silverBoxIconsComponent;
