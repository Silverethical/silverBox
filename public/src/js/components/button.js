import closeButtonOnClick from "./closeButtonOnClick";
import silverBoxloadingAnimation from "./loadingAnimation";

/**
 *
 * @param {string} text - button text
 * @param {string} buttonBgColor - button background color
 * @param {string} elementUniqueClassList - button classList
 * @returns
 */
function silverBoxbuttonComponent(buttonName, uniqClass) {
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
		button.onclick = closeButtonOnClick;
	}
	// if closeOnClick in config is false the code will be executed
	else {
		button.addEventListener("click", () => {
			button.disabled = true
			button.classList.add('silverBox-loading-button')
		})
	}


	// button left icon
	if (buttonName.leftIcon) {
		let buttonLeftIcon = document.createElement("img");
		buttonLeftIcon.setAttribute("src", buttonName.leftIcon);
		buttonLeftIcon.classList.add('silverBox-button-icon')
		button.appendChild(buttonLeftIcon);
	}
	// button text
	let buttonTextSpan = document.createElement("span");
	buttonTextSpan.classList.add("silverBox-button-text");
	buttonTextSpan.textContent = buttonName.text;
	button.appendChild(buttonTextSpan);
	button.append(silverBoxloadingAnimation())
	// button right icon
	if (buttonName.rightIcon) {
		let buttonRightIcon = document.createElement("img");
		buttonRightIcon.setAttribute("src", buttonName.rightIcon);
		buttonRightIcon.classList.add('silverBox-button-icon')
		button.appendChild(buttonRightIcon);
	}
	// appends everything into button
	return button;
}
export default silverBoxbuttonComponent;
