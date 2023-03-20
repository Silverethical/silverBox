function inputComponent({ elementType = "input", inputType = "text", placeHolder = "default placeholder", readOnly = false, label = 'this is a label', }) {

	// parent and children element creation
	let inputWrrapper = document.createElement('div')
	inputWrrapper.classList.add('silverBox-input')

	// label
	let labelEl = document.createElement("label")
	labelEl.textContent = label

	// input
	let inputEl = document.createElement(elementType)

	// general input/textArea configs
	inputEl.setAttribute('placeholder', placeHolder)

	// input or textArea selection conditions (for adding input types)
	if (elementType == "input") {
		inputEl.setAttribute('type', inputType)
	}
	// readOnly condition for inputs
	if (readOnly == true) {
		inputEl.setAttribute('readonly')
	}

	inputWrrapper.append(labelEl)
	inputWrrapper.appendChild(inputEl)
	return inputWrrapper
}
export default inputComponent

