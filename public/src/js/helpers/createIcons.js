/**
 * Creates an icon element with the specified class name and child element (if any).
 * @param {string} className - The class name for the icon element.
 * @param {string} text - The text to display in the icon element (if any).
 * @param {string} childClass - The class name for a child element (if any).
 * @returns {Element} - The icon element.
 */
export const createIcon = (className, text, childClass) => {
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

	return icon;
};

/**
 * Creates a user icon element with the specified URL.
 * @param {string} userIcon - The URL for the user icon.
 * @returns {Element} - The user icon element.
 */
export const createUserIcon = (userIcon) => {
	// Create a new img element with the specified class and ID, and set its src attribute to the provided URL.
	const img = document.createElement("img");
	img.setAttribute("src", userIcon);
	img.classList.add("silverBox-icon");
	img.id = "silverBox-custom-icon";

	return img;
};
