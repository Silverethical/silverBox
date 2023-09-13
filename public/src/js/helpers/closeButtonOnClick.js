// import
import silverBoxDisableScroll from "./silverBox/disableScroll";
/** selects the silverBox container and closes the element*/
function silverBoxClose({ uniqueID, timer, onClose, element }) {
	// If timer config exists, silverBoxCloseAfterTimeout would get a uniqueID and will close the silverBox using that ID
	if (timer) {
		silverBoxCloseAfterTimeout(uniqueID);
	}
	// if there is a element passed to silverBoxClose object, the closest silverBox-container to that element would be removed
	else if (element) {
		element.closest(".silverBox-container").remove();
	}

	// Runs onClose function if it exits
	if (onClose) onClose();
}
// this function will remove a specific element with the unique ID and after a specific timeout
function silverBoxCloseAfterTimeout(elementID) {
	// selects the element by the unique ID
	const uniqueTimeOutElement = document.querySelector(
		`[data-unique-id="${elementID}"]`
	);

	uniqueTimeOutElement.remove();

	silverBoxDisableScroll(".silverBox-overlay");
}

export default silverBoxClose;
