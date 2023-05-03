/**
 * Returns inputWrapper element based on given arguments from config
 * @param {string} type - type of input
 * @param {string} placeHolder - placeHolder of input
 * @param {boolean} readOnly - value of input readonly attribute which is either true or false
 * @param {string} label - label name of input
 * @param {string} hint - hint of input
 * @param {string} width - width of input
 * @param {string} height - height of input
 * @param {string} maxLength - maxLength attribute of input
 * @param {string} textAlign - specifies the position of texts in input
 * @param {string} fontSize - text fontSize of input
 * @param {string} placeHolderFontSize - placeHolder fontSize of input
 * @returns {Element} - inputWrapper element
 */
function silverBoxInputComponent({ type, select, numberOnly, placeHolder, readOnly, label, hint, width, height, maxLength, textAlign, fontSize, placeHolderFontSize, name, className, id }) {
	// changing the type case to lowerCase to avoid case conflict problem
	type = type.toLowerCase()

	// parent and children element creation
	let inputWrapper = document.createElement('div')
	inputWrapper.classList.add('silverBox-input')

	// label
	let labelEl = document.createElement("label")
	labelEl.textContent = label

	// select
	let selectEl = document.createElement('select')
	selectEl.classList.add('silverBox-select')

	// checks if the select config exists
	if (select) {
		let optionsArray = []
		// creates option elements based on the given configs
		select.forEach(option => {
			// each option element creation
			let optionEl = document.createElement('option')
			// sets the option value
			optionEl.setAttribute('value', option.value ? option.value : '')
			// sets the option text (if text doesn't exist, the text value will be the option value )
			optionEl.textContent = option.text ? option.text : option.value
			// gives the option element a disabled attr if the config exists
			if (option.disabled) optionEl.setAttribute('disabled', '')
			// gives the option element a selected attr if the config exists
			if (option.selected) optionEl.setAttribute('selected', '')

			// pushes each new config to the array
			optionsArray.push(optionEl)


		})
		// appends the option into the selectEl
		optionsArray.forEach(optionEl => {
			selectEl.append(optionEl)
		})

	}
	// input or textArea selection conditions
	let inputEl


	if (type !== "textarea") {
		inputEl = document.createElement('input')
		if (type) inputEl.setAttribute('type', type)
	}
	else {
		inputEl = document.createElement('textArea')
	}

	// hint
	let hintEl = document.createElement('span')
	hintEl.classList.add('silverBox-input-hint')
	hintEl.textContent = hint

	// general input/textArea configs
	if (placeHolder) inputEl.setAttribute('placeholder', placeHolder)
	if (maxLength) inputEl.setAttribute('maxlength', maxLength)
	if (textAlign) inputEl.style.textAlign = textAlign

	// add input elements custom height and width and fontSize if their given
	inputEl.style.width = width
	inputEl.style.height = height
	inputEl.style.fontSize = fontSize

	// converts text input to numberOnly input
	if (numberOnly) {

		inputEl.addEventListener('input', () => {
			// first, replaces the persian digits to english, then only allows the numeric characters
			inputEl.value = inputEl.value.replace(/[۰-۹]/g, digit => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)).replace(/[^0-9]/g, '')
		})

	}
	if (!placeHolderFontSize) {
		if (fontSize) inputEl.style.setProperty('--silverBox-placeHolder-fontSize', fontSize)
	}
	else {
		if (placeHolderFontSize) inputEl.style.setProperty('--silverBox-placeHolder-fontSize', placeHolderFontSize)

	}

	// giving inputs id/class and name attribute
	// name
	if (name) inputEl.setAttribute("name", name)
	if (className) inputEl.classList.add(className)
	if (id) inputEl.id = id
	// restart the inputs/textArea parent's width if the width exist
	if (width) inputWrapper.style.width = 'fit-content'

	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '')

	// appending label,hint and input/select to the inputWrapper
	if (label) inputWrapper.append(labelEl)
	// checks if the select config is given, if it's true the select element will be replaced as the input
	if (select) {

		inputWrapper.append(selectEl)

	}
	else {
		inputWrapper.appendChild(inputEl)
	}
	if (hint) inputWrapper.appendChild(hintEl)

	return inputWrapper


}
export default silverBoxInputComponent

