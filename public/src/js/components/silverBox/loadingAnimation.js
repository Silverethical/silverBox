/**
 * Creates loading animation element
 * @returns {Element} - loading animation element
 */
function silverBoxLoadingAnimation() {
	const loadingEl = document.createElement("span");
	loadingEl.classList.add("silverBox-button-loading-animation");
	return loadingEl;
}

export default silverBoxLoadingAnimation;
