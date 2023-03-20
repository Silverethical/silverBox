/**
 * confirm button component
 * @param {string} text - button text
 * @returns button element
 */
export function confirmButton(text="Confirm") {
    let button = document.createElement("button")
    button.classList.add("silverBox-confirm-button","silverBox-buttons")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button

}