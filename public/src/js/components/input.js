/**
 * 
 * @param {*} placeHolder - placer holder
 * @returns 
 */
export function inputComponent(placeHolder = "default placeholder", type = "text",elementType="input",elementClassList="silverBox-inputs") {
	const input = document.createElement(elementType)
	input.classList.add(elementClassList)
	input.setAttribute("type", type)
	input.setAttribute("placeholder", placeHolder)
	return input
}
