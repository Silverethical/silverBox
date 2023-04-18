/** selects the silverBox wrapper and closes the element*/
function silverBoxCloseButtonOnClick({ uniqueID, timer }) {

	// if the modal doesn't have a timer, the modal will be closed on click
	if (!timer) {
		// selects the all silverBox-wrapper classes in the page
		const silverBox = document.querySelectorAll(".silverBox-wrapper");
		if (silverBox[silverBox.length - 1]) silverBox[silverBox.length - 1].remove();

	}
	// else, THE specefic modal will be removed from page
	else {
		silverBoxCloseAfterTimeout(uniqueID, timer)
	}


}
// this function will remove a specefic element with the uniqe ID and after a specefic timeout
function silverBoxCloseAfterTimeout(elementID, timeOut) {

	// selects the element by the unique ID
	const uniqueTimeOutElement = document.querySelector(`[uniqueID="${elementID}"]`)

	setTimeout(() => {
		if (uniqueTimeOutElement) uniqueTimeOutElement.remove()
	}, timeOut)
}

export default silverBoxCloseButtonOnClick;
