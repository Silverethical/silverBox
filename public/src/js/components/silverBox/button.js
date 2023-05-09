import silverBoxCloseButtonOnClick from "../../helpers/closeButtonOnClick";
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

	// button data attributes
	if (buttonName.dataAttribute) {
		for (const [key, value] of Object.entries(buttonName.dataAttribute)) {
			// sets the data attr
			button.setAttribute(`data-${key}`, value)
		}
	}

	// inline styles
	if (buttonName.bgColor) button.style.backgroundColor = buttonName.bgColor
	if (buttonName.borderColor) button.style.borderColor = buttonName.borderColor
	if (buttonName.textColor) button.style.color = buttonName.textColor
	if (buttonName.disabled) button.disabled = buttonName.disabled


	button.classList.add("silverBox-button", uniqClass);

	// adds an ID that user wants
	if (buttonName.id) button.id = buttonName.id
	// adds a Class that user wants	
	if (buttonName.className) buttonName.className.split(' ').forEach(className => button.classList.add(className))

	// if closeOnClick in config is true the code will be executed
	if (buttonName.closeOnClick === true || !("closeOnClick" in buttonName)) {
		button.onclick = silverBoxCloseButtonOnClick;
	}
	// if closeOnClick in config is false the code will be executed
	else {
		// loading animation
		if (buttonName.loadingAnimation !== false && !buttonName.loadingAnimation) {
			buttonName.loadingAnimation = true
		}
		if (buttonName.loadingAnimation === true) {
			button.addEventListener("click", () => {
				button.classList.add('silverBox-loading-button')
			})
		}
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
