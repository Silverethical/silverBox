/**
 * 
 * @param {*} placeHolder - placer holder
 * @returns 
 */
export function inputComponent(placeHolder="default placeholder",type="text") {
	const input = document.createElement("input")
	input.classList.add("silverBox-inputs")
	input.setAttribute("type",type)
	input.setAttribute("placeholder",placeHolder)
	return input
}
