// import
import silverBoxDisableScroll from "./silverBox/disableScroll";
/** selects the silverBox container and closes the element*/
function silverBoxClose({ silverBoxElement, timer, onClose, element }) {
	// If timer config exists, silverBoxCloseAfterTimeout would get a uniqueID and will close the silverBox using that ID
	if (timer) {
		silverBoxCloseAfterTimeout(silverBoxElement);
	}

	// if there is a element passed to silverBoxClose object, the closest silverBox-container to that element would be removed
	else if (element) {
		element.closest(".silverBox-container").remove();
	}

	// Runs onClose function if it exits
	if (typeof onClose === "function") onClose();
}
// this function will remove a specific element with the unique ID and after a specific timeout
function silverBoxCloseAfterTimeout(silverBoxElement) {
	if (silverBoxElement) silverBoxElement.remove();

	silverBoxDisableScroll(".silverBox-overlay");
}

export default silverBoxClose;
