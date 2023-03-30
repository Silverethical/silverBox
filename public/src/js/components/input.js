

function inputComponent({ type = "text", placeHolder, readOnly, label, hint, width, height, inputMaxLength, textAlign,fontSize }) {

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
	// restart the inputs/textArea parent's width if the width exist
	if (width) inputWrapper.style.width = 'fit-content'

	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '')

	// appending label and inputs to the main div
	inputWrapper.append(labelEl)
	inputWrapper.appendChild(inputEl)
	inputWrapper.appendChild(hintEl)

	return inputWrapper
}
export default inputComponent

