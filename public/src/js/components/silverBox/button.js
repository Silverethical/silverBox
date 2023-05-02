import silverBoxCloseButtonOnClick from "./closeButtonOnClick";
import silverBoxLoadingAnimation from "./loadingAnimation";

/**
 *
 * @param {object} buttonName - button config
 * @param {string} uniqClass - button classList
 * @returns
 */
function silverBoxButtonComponent(buttonName, uniqClass, defaultText) {

	// button
	let button = document.createElement("button");
	button.style.background = buttonName.bgColor;

	// inline styles
	if (buttonName.bgColor) button.style.backgroundColor = buttonName.bgColor
	if (buttonName.borderColor) button.style.borderColor = buttonName.borderColor
	if (buttonName.textColor) button.style.color = buttonName.textColor

	button.classList.add("silverBox-button", uniqClass);

	// adds an ID that user wants
	if (buttonName.buttonId) button.id = buttonName.buttonId
	// adds a Class that user wants	
	if (buttonName.buttonClass) button.classList.add(buttonName.buttonClass)

	// if closeOnClick in config is true the code will be executed
	if (buttonName.closeOnClick === true) {
		button.onclick = silverBoxCloseButtonOnClick;
	}
	// if closeOnClick in config is false the code will be executed
	else {
		button.addEventListener("click", () => {
			button.classList.add('silverBox-loading-button')
		})
	}


	// button left icon
	if (buttonName.iconStart) {
		let buttonLeftIcon = document.createElement("img");
		buttonLeftIcon.setAttribute("src", buttonName.iconStart);
		buttonLeftIcon.classList.add('silverBox-button-icon')
		button.appendChild(buttonLeftIcon);
	}
	// button text
	let buttonTextSpan = document.createElement("span");
	buttonTextSpan.classList.add("silverBox-button-text");
	buttonTextSpan.textContent = buttonName.text ? buttonName.text : defaultText;
	button.appendChild(buttonTextSpan);
	button.append(silverBoxLoadingAnimation())
	// button right icon
	if (buttonName.iconEnd) {
		let buttonRightIcon = document.createElement("img");
		buttonRightIcon.setAttribute("src", buttonName.iconEnd);
		buttonRightIcon.classList.add('silverBox-button-icon')
		button.appendChild(buttonRightIcon);
	}
	// appends everything into button
	return button;
}
export default silverBoxButtonComponent;
