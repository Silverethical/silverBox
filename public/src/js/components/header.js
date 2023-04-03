/** imports */
import closeButtonOnClick from "./closeButtonOnClick"

/**
 * Returns headerWrapper based on given arguments from config
 * @param {string} titleText - silverBox title text
 * @param {string} htmlText - silverBox html element under title
 * @param {string} simpleText - silverBox paragraph under title
 * @param {string} imageSource - silverBox icon
 * @param {string} closeButton - silverBox closeButton
 * @returns {Element} - headerWrapper element
 */
function headerComponent({ titleText, htmlText, simpleText, imageSource, closeButton }) {
    // header wrapper
    let headerWrapper = document.createElement("header")
    headerWrapper.classList.add('header-wrapper')
    // icon and closeButton wrapper
    let iconWrapper = document.createElement('div')
    iconWrapper.classList.add('icon-wrapper')

    // title 
    let title = document.createElement("h2")
    title.classList.add("silverBox-header-title")
    title.textContent = titleText

    // htmlStructure
    let htmlStructure = document.createElement("div")
    htmlStructure.classList.add("silverBox-header-description")
    htmlStructure.innerHTML = htmlText

    // textStructure
    let textStructure = document.createElement("p")
    textStructure.textContent = simpleText
    textStructure.classList.add("silverBox-header-description")

    // svg of closeButton button
    let closeButtonEl = document.createElement("span")
    closeButtonEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>'
    closeButtonEl.onclick = closeButtonOnClick
    closeButtonEl.classList.add("silverBox-close-button")

    // add icon to iconWrapper
    if (imageSource) iconWrapper.appendChild(imageSource)
    // add closeButton to iconWrapper
    if (closeButton) iconWrapper.appendChild(closeButtonEl)

    // appends the icon Wrapper to headerWrapper
    if (iconWrapper.childElementCount !== 0) headerWrapper.append(iconWrapper)
    // add title to headerWrapper
    if (titleText) headerWrapper.appendChild(title)


    // add htmlStructure/text to headerWrapper
    if (htmlText && simpleText) {
        headerWrapper.appendChild(htmlStructure)
    }
    else if (htmlText) {
        headerWrapper.appendChild(htmlStructure)
    }
    else if (simpleText) {
        headerWrapper.appendChild(textStructure)
    }
    // checks if header Element is empty or not
    return headerWrapper.childElementCount !== 0 ? headerWrapper : ''


}
export default headerComponent;