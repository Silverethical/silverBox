import appendingToModal from "../../helpers/silverBox/appendToModal";
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
function createSilverBox({
	direction,
	components,
	positionClassName,
	theme = "light",
	centerContent,
}) {
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

	// append the components items (header,body,footer) to the silverBox
	appendingToModal(silverBoxModal, components);

	// if silverBox is not empty, it will be added to it's overlay
	if (silverBoxModal.childElementCount !== 0) overlay.append(silverBoxModal);

	// returns the silverBox overlay if it's not empty
	if (overlay.childElementCount !== 0) return overlay;
}

export default createSilverBox;
