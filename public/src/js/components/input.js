/**
 * 
 * @param {*} placeHolder - placer holder
 * @returns 
 */
export function inputComponent(placeHolder="default placeholder") {
	const input = document.createElement("input")
	input.classList.add("silverBox-inputs")
	input.setAttribute("placeholder",placeHolder)
	return input
}
