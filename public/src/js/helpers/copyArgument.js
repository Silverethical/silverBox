// copyies the specefic given text
function copyArgument(element) {
    navigator.clipboard.writeText(element.textContent)
}
export default copyArgument