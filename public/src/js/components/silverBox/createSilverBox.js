/**
 * Returns silverBox based on given argument from config
 * @param {string} direction - html direction value
 * @param {object} components - array of elements
 * @param {string} positionClassName - overlay of silverBox className
 * @param {boolean} isInput - boolean value
 * @param {string} theme - html data-theme attribute value which is either light or dark
 * @param {boolean} centerContent - specifies wether the content is centered or not
 * @returns {HTMLObjectElement} - silverBox overlay
 */
function createSilverBox({ direction, components, positionClassName, isInput, theme = "light", centerContent }) {
	// main overlay
	const overlay = document.createElement("div");

	// add classlist to silverBox overlay
	overlay.classList.add("silverBox-container", positionClassName);

	// set a data for overlay
	overlay.dataset.theme = theme;

	// the modalBox
	const silverBoxModal = document.createElement("div");

	// add classlist to silverBox
	silverBoxModal.classList.add("silverBox");

	// set a direction for the modal
	if (direction) silverBoxModal.setAttribute("dir", direction);

	// centers the modal contents if the config is given
	if (centerContent) silverBoxModal.style.textAlign = "center";

	// create form variable to contain a form element if it's needed
	let form;

	// checks if we have inputs in the given config, if true the elements will be added to a form elements, else there will be no form elements
	if (isInput) {
		// create  form element for inputs
		form = document.createElement("form");

		// add classlist to form element
		form.classList.add("silverBox-form");

		// submit event listener for silverBox form
		form.addEventListener("submit", (e) => {
			// form preventDefault
			e.preventDefault();
		});

		// appends the form into the silverBoxModal
		silverBoxModal.append(form);
	}

	// append the components items (input,header and etc.) to the silverBox/form
	appendingToModal(isInput ? form : silverBoxModal, components);

	// if silverBox is not empty, it will be added to it's overlay
	if (silverBoxModal.childElementCount !== 0) overlay.append(silverBoxModal);

	// returns the silverBox overlay if it's not empty
	if (overlay.childElementCount !== 0) return overlay;
}

/**
 * append the component element to a parent element
 * @param {HTMLObjectElement} element - parent HTML element
 * @param {object} components - component items including (header,input and etc)
 */
function appendingToModal(element, components) {
	// loops through the component key
	Object.keys(components).map((item) => {
		// appends the components if they exist
		if (components[item]) element.append(components[item]);
	});
}

export default createSilverBox;
