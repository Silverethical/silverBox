/**
 * cancel button component
 * @param {string} text - button text
 * @returns Cancel button element
 */
export function cancelButton(text="Cancel") {
    let button = document.createElement("button")
    button.classList.add("silverBox-cancel-button","silverBox-buttons")
    let buttonText = document.createTextNode(text)
    button.appendChild(buttonText)
    return button

}