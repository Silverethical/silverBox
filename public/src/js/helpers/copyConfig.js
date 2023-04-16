/**
 * 
 * @param {string} copy - the value that wants to be copied
 * @param {element} element - the element's innerHTML that want to be changed 
 * in our case it's the copy button
 * @param {number} timeOut - the amount of numbers that the text changes back to normal
 * after click
 */
function copyConfig(copy, element,timeOut) {
    navigator.clipboard.writeText(copy);
    // changes the text to copied!
    element.innerHTML = "copied!"
    // changes it back to copy after 1s
    setTimeout(() => {
        element.innerHTML = "copy"
    }, timeOut)
}
export default copyConfig