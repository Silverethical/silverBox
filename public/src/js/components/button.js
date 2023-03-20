/**
 * 
 * @param {string} text - button text 
 * @param {string} buttonBgColor - button background color 
 * @param {string} buttonColor - button color
 * @param {string} elementUniqueClassList - button classList
 * @param {string} borderRadius - button border radius
 * @returns 
 */
function buttonComponent({ text = "button", buttonBgColor = '#fff', buttonColor = "#000", elementUniqueClassList, borderRadius = "8px" }) {
    // 
    let button = document.createElement("button")
    button.style.background = buttonBgColor
    button.setAttribute("style", `background-color:${buttonBgColor}; color:${buttonColor}; border-radius:${borderRadius};`)
    button.classList.add(elementUniqueClassList, "silverBox-button")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button
}
export default buttonComponent;
