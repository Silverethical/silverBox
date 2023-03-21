/**
 * 
 * @param {string} text - button text 
 * @param {string} buttonBgColor - button background color 
 * @param {string} elementUniqueClassList - button classList
 * @returns 
 */
function buttonComponent({ text = "button", buttonBgColor, elementUniqueClassList }) {
    // 
    let button = document.createElement("button")
    button.style.background = buttonBgColor
    if (buttonBgColor) button.setAttribute("style", `background-color:${buttonBgColor};`)
    button.classList.add(elementUniqueClassList, "silverBox-button")
    let buttonTextSpan = document.createElement("span")
    buttonTextSpan.classList.add("silverBox-button-text")
    buttonTextSpan.textContent = text
    button.appendChild(buttonTextSpan)
    return button
}
export default buttonComponent;
