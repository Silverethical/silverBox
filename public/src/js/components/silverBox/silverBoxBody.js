import appendingToModal from "../../helpers/silverBox/appendToModal";
/**
 * Creates bodyWrapper and appends html config, text config, button component, input component to it.
 * @param {String} htmlText - Html config
 * @param {String} bodyText - Text config
 * @param {String} components - Body related components (input,button)
 * @returns
 */
function silverBoxBodyComponent({ htmlText, bodyText, components }) {
	// create bodyWrapper for html,text,inputComponent,buttonComponent
	const bodyWrapper = document.createElement("div");

	// add default className to silverBox-body
	bodyWrapper.classList = "silverBox-body-wrapper";

	if (htmlText) {
		// create htmlStructure element
		const htmlStructure = document.createElement("div");

		// add a default className for the htmlStructure element
		htmlStructure.classList.add("silverBox-body-description");

		// add the given html structure to the htmlStructure element
		htmlStructure.innerHTML = htmlText;

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

	// append all components to modal by calling the "appendingToModal" helper function
	appendingToModal(bodyWrapper, components);

	return bodyWrapper;
}

export default silverBoxBodyComponent;
