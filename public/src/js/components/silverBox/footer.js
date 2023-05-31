/**
 * Returns footer element based on arguments as text
 * @param {string} footerContent - footer HTML content
 * @returns {Element} - footer element
 */
function silverBoxFooterComponent({ footerContent }) {
	// creates footer
	const footerEl = document.createElement("div");
	footerEl.classList.add("silverBox-footer");

	// creates hr line
	const line = document.createElement("hr");
	// appends elements to footerEl
	footerEl.append(line);
	footerEl.innerHTML += footerContent;
	// returns the footer
	return footerEl;
}

export default silverBoxFooterComponent;
