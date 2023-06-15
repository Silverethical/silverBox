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

export default appendingToModal;
