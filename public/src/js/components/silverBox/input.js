/**
 * Returns inputWrapper element based on given arguments from config
 * @param {String} type - type of input
 * @param {String} placeHolder - placeHolder of input
 * @param {Boolean} readOnly - value of input readonly attribute which is either true or false
 * @param {String} label - label name of input
 * @param {String} hint - hint of input
 * @param {String} width - width of input
 * @param {String} height - height of input
 * @param {Number} maxLength - maxLength attribute of input
 * @param {String} textAlign - specifies the position of texts in input
 * @param {String} fontSize - text fontSize of input
 * @param {String} placeHolderFontSize - placeHolder fontSize of input
 * @returns {HTMLElement} - inputWrapper element
 */
function silverBoxInputComponent({
	type,
	select,
	numberOnly,
	placeHolder,
	readOnly,
	label,
	hint,
	width,
	height,
	maxLength,
	textAlign,
	fontSize,
	placeHolderFontSize,
	name,
	className,
	id,
	value,
}) {
	// Create a wrapper div element for the input
	const inputWrapper = document.createElement("div");
	inputWrapper.classList = "silverBox-input-wrapper";

	// Create a label element and set its text content to the provided label
	const labelEl = document.createElement("label");
	labelEl.textContent = label;

	if (select) {
		// Create a select element if the 'select' flag is true
		const selectEl = document.createElement("select");
		selectEl.classList = "silverBox-select";

		// Iterate over the 'select' options array
		select.map((option) => {
			const optionEl = document.createElement("option");
			optionEl.value = option.value ?? "";
			optionEl.textContent = option.text ?? option.value ?? "";

			// Set the 'disabled' attribute if the option is disabled
			if (option.disabled) optionEl.setAttribute("disabled", "");

			// Set the 'selected' attribute if the option is selected
			if (option.selected) optionEl.setAttribute("selected", "");

			// Append the option element to the select element
			selectEl.append(optionEl);
		});

		// Append the select element to the input wrapper
		inputWrapper.append(selectEl);
	} else {
		// Create an input element (either input or textarea) based on the 'type'
		const isTextArea = type.toLowerCase() === "textarea";
		const inputEl = document.createElement(isTextArea ? "textarea" : "input");

		// Set the 'type' attribute for input elements (except for textarea)
		if (!isTextArea && type) inputEl.setAttribute("type", type);

		// Set the value of the input element to the provided value (or an empty string)
		inputEl.value = value ?? "";

		// Set the placeholder attribute if a placeholder value is provided
		if (placeHolder) inputEl.placeholder = placeHolder;

		// Set the maxLength attribute if a maxLength value is provided
		if (maxLength) inputEl.maxLength = maxLength;

		// Set the text alignment style if textAlign is provided
		if (textAlign) inputEl.style.textAlign = textAlign;

		// Set the width style if width is provided
		if (width) inputEl.style.width = width;

		// Set the height style if height is provided
		if (height) inputEl.style.height = height;

		// Set the font size style if fontSize is provided
		if (fontSize) inputEl.style.fontSize = fontSize;

		// Add an event listener to handle numberOnly behavior if numberOnly flag is true
		if (numberOnly) {
			inputEl.addEventListener("input", () => {
				inputEl.value = inputEl.value
					.replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
					.replace(/[^0-9]/g, "");
			});
		}

		// Set the placeholder font size style if provided or fallback to fontSize
		const givenPHFS = placeHolderFontSize ?? fontSize ?? false;
		if (givenPHFS !== false) inputEl.style.setProperty("--silverBox-placeHolder-fontSize", givenPHFS);

		// Set the name attribute if a name value is provided
		if (name) inputEl.name = name;

		// Add the provided className to the input element's class list
		inputEl.classList += ` ${className}`;

		// Set the id attribute if an id value is provided
		if (id) inputEl.id = id;

		// Set the wrapper width to 'fit-content' if width is provided
		if (width) inputWrapper.style.width = "fit-content";

		// Set the 'readonly' attribute if readOnly flag is true
		if (readOnly) inputEl.setAttribute("readonly", "");

		// Append the label element to the input wrapper
		if (label) inputWrapper.append(labelEl);

		// Append the input element to the input wrapper
		inputWrapper.append(inputEl);
	}

	// Create a span element for the hint text and set its content to the provided hint
	const hintEl = document.createElement("span");
	hintEl.classList = "silverBox-input-hint";
	hintEl.textContent = hint ?? "";

	// Append the hint element to the input wrapper
	if (hint) inputWrapper.append(hintEl);

	// Return the input wrapper element
	return inputWrapper;
}

export default silverBoxInputComponent;
