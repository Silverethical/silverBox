// import
import silverBoxDisableScroll from '../../helpers/silverBox/disableScroll';
/** selects the silverBox wrapper and closes the element*/
function silverBoxCloseButtonOnClick({ uniqueID, timer }) {
	// if the modal doesn't have a timer, the modal will be closed on click
	if (!timer) {

		setTimeout(() => {
			// selects the all silverBox-wrapper classes in the page
			const silverBox = document.querySelectorAll(".silverBox-wrapper");

			if (silverBox[silverBox.length - 1]) silverBox[silverBox.length - 1].remove();
			// checks for silverBoxAfter removing the wrapper
			silverBoxDisableScroll(".silverBox-overlay")
		}, 10)

	}
	// else, THE specific modal will be removed from page
	else {
		silverBoxCloseAfterTimeout(uniqueID, timer)
	}
}
// this function will remove a specific element with the unique ID and after a specific timeout
function silverBoxCloseAfterTimeout(elementID, timeOut) {

	// selects the element by the unique ID
	const uniqueTimeOutElement = document.querySelector(`[uniqueID="${elementID}"]`)

	setTimeout(() => {
		if (uniqueTimeOutElement) uniqueTimeOutElement.remove()
		silverBoxDisableScroll(".silverBox-overlay")
	}, timeOut)
}

export default silverBoxCloseButtonOnClick;
