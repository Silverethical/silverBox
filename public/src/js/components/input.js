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
function silverBoxinputComponent({ type, placeHolder, readOnly, label, hint, width, height, inputMaxLength, textAlign, fontSize, placeHolderFontSize }) {

	if (type !== '') {
		// changing the type case to lowerCase to avoid case conflict problem
		type = type.toLowerCase()

		// parent and children element creation
		let inputWrapper = document.createElement('div')
		inputWrapper.classList.add('silverBox-input')

		// label
		let labelEl = document.createElement("label")
		labelEl.textContent = label

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

		// appending label and inputs to the main div
		inputWrapper.append(labelEl)
		inputWrapper.appendChild(inputEl)
		inputWrapper.appendChild(hintEl)

		return inputWrapper
	} else {
		return ''
	}
}
export default silverBoxinputComponent

