/**
 * Creates loading animation element
 * @returns {Element} - loading animation element
 */
function silverBoxLoadingAnimation() {
	// create loading element
	const loadingEl = document.createElement("span");

	// add className to loading element
	loadingEl.classList.add("silverBox-button-loading-animation");

	// return loading element
	return loadingEl;
}

export default silverBoxLoadingAnimation;
