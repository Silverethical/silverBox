/**
 * Returns inputWrapper element based on given arguments from config
 * @param {string} type - type of input
 * @param {string} placeHolder - placeHolder of input
 * @param {boolean} readOnly - value of input readonly attribute which is either true or false
 * @param {string} label - label name of input
 * @param {string} hint - hint of input
 * @param {string} width - width of input
 * @param {string} height - height of input
 * @param {string} inputMaxLength - maxLength attribute of input
 * @param {string} textAlign - specifies the position of texts in input
 * @param {string} fontSize - text fontSize of input
 * @param {string} placeHolderFontSize - placeHolder fontSize of input
 * @returns {Element} - inputWrapper element
 */
function silverBoxInputComponent({ type, select, numberOnly, placeHolder, readOnly, label, hint, width, height, inputMaxLength, textAlign, fontSize, placeHolderFontSize }) {
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
		// creates option elemets based on the given configs
		select.forEach(option => {
			let optionEl = document.createElement('option')
			optionEl.setAttribute('value', option)
			optionEl.textContent = option
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
		inputEl.setAttribute('type', type)
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
	if (inputMaxLength) inputEl.setAttribute('maxlength', inputMaxLength)
	inputEl.style.textAlign = textAlign

	// add input elements custom height and width and fontSize if their given
	inputEl.style.width = width
	inputEl.style.height = height
	inputEl.style.fontSize = fontSize

	// converts text input to numberOnly input
	if (numberOnly) {
		inputEl.addEventListener('keyup', (e) => {
			if (e.key.match(/[^0-9]/g)) {
				inputEl.value = inputEl.value.replace(/[^0-9]/g, '')
			}
		})
	}
	if (!placeHolderFontSize) {
		inputEl.style.setProperty('--silverBox-placeHolder-fontSize', fontSize)
	}
	else {
		inputEl.style.setProperty('--silverBox-placeHolder-fontSize', placeHolderFontSize)

	}

	// restart the inputs/textArea parent's width if the width exist
	if (width) inputWrapper.style.width = 'fit-content'

	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '')

	// appending either the select or input to the inputWrapper
	if (select) {
		inputWrapper.append(selectEl)
	}
	else {
		// appending label and hint to the main div
		if (label) inputWrapper.append(labelEl)
		inputWrapper.appendChild(inputEl)
		if (hint) inputWrapper.appendChild(hintEl)
	}





	return inputWrapper


}
export default silverBoxInputComponent

