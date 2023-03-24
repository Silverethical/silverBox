import closeButtonOnClick from "./closeButtonOnClick";

/**
 *
 * @param {string} text - button text
 * @param {string} buttonBgColor - button background color
 * @param {string} elementUniqueClassList - button classList
 * @returns
 */
function buttonComponent({
	text,
	buttonBgColor,
	elementUniqueClassList,
	leftIcon,
	rightIcon,
	borderColor,
	textColor,
	closeOnClick,
}) {
	// button
	let button = document.createElement("button");
	button.style.background = buttonBgColor;
	// background color
	if (buttonBgColor)
		button.setAttribute(
			"style",
			`background-color:${buttonBgColor}; border-color:${borderColor}; color:${textColor};`
		);
	button.classList.add(elementUniqueClassList, "silverBox-button");

	if (closeOnClick === true) button.onclick = closeButtonOnClick;

	// button left icon
	if (leftIcon) {
		let buttonLeftIcon = document.createElement("img");
		buttonLeftIcon.setAttribute("src", leftIcon);
		button.appendChild(buttonLeftIcon);
	}
	// button text
	let buttonTextSpan = document.createElement("span");
	buttonTextSpan.classList.add("silverBox-button-text");
	buttonTextSpan.textContent = text;
	button.appendChild(buttonTextSpan);
	// button right icon
	if (rightIcon) {
		let buttonRightIcon = document.createElement("img");
		buttonRightIcon.setAttribute("src", rightIcon);
		button.appendChild(buttonRightIcon);
	}
	// appends everything into button
	return button;
}
export default buttonComponent;
