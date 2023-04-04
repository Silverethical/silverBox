/**
 * Returns footer element based on arguments as text
 * @param {string} footerInside - footer element textContent
 * @returns {Element} footer element
 */
function silverBoxfooterComponent({ footerInside }) {
    // creates footer
    let footerEl = document.createElement("footer")
    // creates footer inside div
    let footerInsideEl = document.createElement("div")
    // creates hr line
    let line = document.createElement("hr")
    // adds given argument as HTML element to footerInsideEl
    footerInsideEl.innerHTML = footerInside

    // appends elements to footerEl
    footerEl.append(line)
    footerEl.append(footerInsideEl)
    // returns the footer
    return footerEl
}
export default silverBoxfooterComponent;