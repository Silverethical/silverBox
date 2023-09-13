import appendingToModal from "../../helpers/silverBox/appendToModal";
/**
 * Creates bodyWrapper and appends html config, text config, button component, input component to it.
 * @param {String} htmlContent - The HTML structure to be displayed.
 * @param {String} bodyText - The text content to be displayed.
 * @param {String} components - The array of components to be appended.
 * @returns {HTMLElement} - The created body wrapper element.
 */
function silverBoxBodyComponent({ htmlContent, bodyText, components, isInput }) {
	// create bodyWrapper for html,text,inputComponent,buttonComponent
	const bodyWrapper = document.createElement("div");

	// add default className to silverBox-body
	bodyWrapper.classList = "silverBox-body-wrapper";

	if (htmlContent) {
		// create htmlStructure element
		const htmlStructure = document.createElement("div");

		// add a default className for the htmlStructure element
		htmlStructure.classList.add("silverBox-body-description");

		// add the given html structure to the htmlStructure element
		if (htmlContent.outerHTML) htmlStructure.append(htmlContent);
		else htmlStructure.innerHTML = htmlContent;

		// add the htmlStructure to it's wrapper
		bodyWrapper.appendChild(htmlStructure);
	} else if (bodyText) {
		// create textStructure element
		const textStructure = document.createElement("p");

		// add the given textConfig to the textStructure element
		textStructure.textContent = bodyText;

		// add a default className to the textStructure element
		textStructure.classList.add("silverBox-body-description");

		// append the textStructure to it's wrapper
		bodyWrapper.appendChild(textStructure);
	}

	// Create form variable to contain a form element if it's needed
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

		// appends the form into the bodyWrapper
		bodyWrapper.append(form);
	}
	// append all components to modal by calling the "appendingToModal" helper function
	appendingToModal(form ? form : bodyWrapper, components);

	return bodyWrapper;
}

export default silverBoxBodyComponent;
