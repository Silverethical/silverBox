/**
 * confirm button component
 * @param {string} text - button text
 * @returns button element
 */
export function buttonComponent({text = "Confirm", buttonColor = '#000', elementUniqueClassList}) {
    let button = document.createElement("button")
    button.style.background = buttonColor
    button.classList.add(elementUniqueClassList, "silverBox-button")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button

}