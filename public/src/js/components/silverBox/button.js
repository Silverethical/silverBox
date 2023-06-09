import silverBoxCloseButtonOnClick from "../../helpers/closeButtonOnClick";
import silverBoxLoadingAnimation from "./loadingAnimation";

/**
 * Creates predefined buttons
 * @param {Object} buttonName - Button config
 * @param {String} uniqClass - Button classList
 * @returns {HTMLElement} - Button
 */
function silverBoxButtonComponent(buttonName, uniqClass, defaultText) {
	// create button element
	const buttonEl = document.createElement("button");

	// Check if the onClick property of buttonName exists
	if (!!buttonName.onClick) {
		// Add "click" event listener to buttonEl
		buttonEl.addEventListener("click", async () => {
			// Wait for the onClick function of buttonName to complete
			await buttonName.onClick();
		});
	}

	// loop over dataAttribute object entries
	Object.entries(buttonName.dataAttribute || {}).map(([key, value]) => {
		buttonEl.setAttribute(`data-${key}`, value);
	});

	// inline styles
	if (buttonName.bgColor) buttonEl.style.backgroundColor = buttonName.bgColor;
	if (buttonName.borderColor) buttonEl.style.borderColor = buttonName.borderColor;
	if (buttonName.textColor) buttonEl.style.color = buttonName.textColor;
	if (buttonName.disabled) buttonEl.disabled = buttonName.disabled;

	// add default className to button element
	buttonEl.classList.add("silverBox-button", uniqClass);

	// add given id to button element if it exits
	if (buttonName.id) buttonEl.id = buttonName.id;

	// add given className to button element if it exits
	if (buttonName.className) buttonEl.classList += ` ${buttonName.className}`;

	// if closeOnClick in config is true the code will be executed
	if (buttonName.closeOnClick !== false) buttonEl.onclick = silverBoxCloseButtonOnClick;

	// if closeOnClick in config is false the code will be executed
	if (buttonName.loadingAnimation !== false) {
		// loading animation
		buttonEl.addEventListener("click", () => {
			buttonEl.classList.add("silverBox-loading-button");
		});
	}

	// create button text element
	const buttonTextSpan = document.createElement("span");

	// add "silverBox-button-text" className to buttonText span
	buttonTextSpan.classList = "silverBox-button-text";

	// add given/default text for buttonTextSpan element
	buttonTextSpan.textContent = buttonName.text ? buttonName.text : defaultText;

	// append iconStart / buttonTextSpan / silver box loadingAnimation / iconEnd
	buttonEl.append(
		createSilverBoxButtonIcon(buttonName.iconStart || ""),
		buttonTextSpan,
		silverBoxLoadingAnimation(),
		createSilverBoxButtonIcon(buttonName.iconEnd || "")
	);

	return buttonEl;
}

/**
 * create button Icon element
 * @param {String} iconSrc - Given image src
 * @returns {HTMLElement}
 */
function createSilverBoxButtonIcon(iconSrc) {
	// return an empty string if there is no iconSrc
	if (!iconSrc) return "";

	// create button Icon
	const buttonIcon = document.createElement("img");

	// add image to button Icon
	buttonIcon.src = iconSrc;

	// add default className to button Icon
	buttonIcon.classList = "silverBox-button-icon";

	return buttonIcon;
}
export default silverBoxButtonComponent;
