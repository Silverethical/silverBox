/**
 * confirm button component
 * @param {string} text - button text
 * @returns button element
 */
export function confirmButton(text="confirm") {
    let button = document.createElement("button")
    button.classList.add("silverBox-confirm-button")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button

}