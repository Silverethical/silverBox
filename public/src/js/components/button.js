/**
 * confirm button component
 * @returns button element
*/
function buttonComponent({ text = "Confirm", buttonBgColor = '#fff', buttonColor = "#000", elementUniqueClassList }) {
    let button = document.createElement("button")
    button.style.background = buttonBgColor
    button.setAttribute("style", `background-color:${buttonBgColor}; color:${buttonColor};`)
    button.classList.add(elementUniqueClassList, "silverBox-button")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button
}
const body = document.body
body.appendChild(buttonComponent(buttonComponent({})))
export default buttonComponent;