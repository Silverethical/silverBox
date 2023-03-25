function inputComponent({ inputType = "text", placeHolder, readOnly, label, hint }) {

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
	inputEl.setAttribute('placeholder', placeHolder)


	// readOnly condition for inputs
	if (readOnly) inputEl.setAttribute('readonly', '')

	// appending lable and inputs to the main div
	inputWrrapper.append(labelEl)
	inputWrrapper.appendChild(inputEl)
	inputWrrapper.appendChild(hintEl)

	return inputWrrapper
}
export default inputComponent

