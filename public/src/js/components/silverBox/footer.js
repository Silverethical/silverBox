/**
 * Returns footer element based on arguments as text
 * @param {string} footerContent - footer HTML content
 * @returns {Element} - footer element
 */
function silverBoxFooterComponent({ footerContent }) {
	// creates footer
	const footerEl = document.createElement("div");

	// add className to footer element
	footerEl.classList.add("silverBox-footer");

	// creates hr line
	const line = document.createElement("hr");

	// appends line to footerEl
	footerEl.append(line);

	// appends footer to footerEl innerHTML
	footerEl.innerHTML += footerContent;

	// returns the footer
	return footerEl;
}

export default silverBoxFooterComponent;
