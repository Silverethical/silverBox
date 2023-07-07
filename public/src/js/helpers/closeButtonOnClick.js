// import
import silverBoxDisableScroll from "./silverBox/disableScroll";
/** selects the silverBox container and closes the element*/
function silverBoxCloseButtonOnClick({ uniqueID, timer, onClose }) {
	// if the modal doesn't have a timer, the modal will be closed on click
	if (!timer) {
		// selects the all silverBox-container classes in the page
		const silverBox = document.querySelectorAll(".silverBox-container");

		if (silverBox[silverBox.length - 1])
			silverBox[silverBox.length - 1].remove();
		// checks for silverBoxAfter removing the wrapper
		silverBoxDisableScroll(".silverBox-overlay");
	}
	// If timer exits specific modal will be removed from page
	else {
		silverBoxCloseAfterTimeout(uniqueID);
	}

	// Runs onClose function if it exits
	if (onClose) onClose();
}
// this function will remove a specific element with the unique ID and after a specific timeout
function silverBoxCloseAfterTimeout(elementID) {
	// selects the element by the unique ID
	const uniqueTimeOutElement = document.querySelector(`[uniqueID="${elementID}"]`);

	uniqueTimeOutElement.remove();

	silverBoxDisableScroll(".silverBox-overlay");
}

export default silverBoxCloseButtonOnClick;
