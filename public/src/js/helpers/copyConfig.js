/**
 * 
 * @param {string} copy - the value that wants to be copied
 * @param {element} iconElement - the iconElement's color that want to be changed 
 * in our case it's the copy button
 * @param {number} timeOut - the amount of numbers that the text changes back to normal
 * after click
 */
function copyConfig(copy, iconElement, timeOut) {
    navigator.clipboard.writeText(copy);
    // changes the text to copied!
    iconElement.classList.add('silverBox-copied')
    // changes it back to copy after 1s
    setTimeout(() => {
        iconElement.classList.remove('silverBox-copied')
    }, timeOut)
}
export default copyConfig