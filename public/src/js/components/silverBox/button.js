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
	// background color
	if (buttonName.bgColor)
		button.setAttribute(
			"style",
			`background-color:${buttonName.bgColor}; border-color:${buttonName.borderColor}; color:${buttonName.textColor};`
		);
	button.classList.add("silverBox-button", uniqClass);

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
