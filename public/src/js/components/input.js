function inputComponent({ inputType = "text", placeHolder = "default placeholder", readOnly = false, label = 'this is a label', }) {

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


	// general input/textArea configs
	inputEl.setAttribute('placeholder', placeHolder)


	// readOnly condition for inputs
	if (readOnly == true) {
		inputEl.setAttribute('readonly', '')
	}
	// appending lable and inputs to the main div
	inputWrrapper.append(labelEl)
	inputWrrapper.appendChild(inputEl)

	return inputWrrapper
}
export default inputComponent

