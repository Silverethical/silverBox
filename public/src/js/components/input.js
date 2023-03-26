

function inputComponent({ inputType = "text", placeHolder, readOnly, label, hint, width, height, inputMaxLength }) {

	// changing the inputType case to lowerCase to avoid case conflict problem
	inputType = inputType.toLowerCase()

	// parent and children element creation
	let inputWrrapper = document.createElement('div')
	inputWrrapper.classList.add('silverBox-input')

	// label
	let labelEl = document.createElement("label")
	labelEl.textContent = label

	// input or textArea selection conditions
	let inputEl

	if (inputType !== "textarea") {
		inputEl = document.createElement('input')
		inputEl.setAttribute('type', inputType)
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
	if (inputMaxLength == 1) inputEl.style.textAlign = 'center'

	// add input elements custom height and width if their given
	inputEl.style.width = width
	inputEl.style.height = height
	// restart the inputs/textArea parent's width if the width exist
	if (width) inputWrrapper.style.width = 'fit-content'

	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '')

	// appending lable and inputs to the main div
	inputWrrapper.append(labelEl)
	inputWrrapper.appendChild(inputEl)
	inputWrrapper.appendChild(hintEl)

	return inputWrrapper
}
export default inputComponent

