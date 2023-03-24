import closeButtonOnClick from "./closeButtonOnClick"

function headerComponent({ titleText, htmlText, simpleText, imageSource, closeButton }) {
    // header wrapper
    let headerWrapper = document.createElement("header")

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

    let closeButtonEl = document.createElement("div")
    closeButtonEl.textContent = "X"
    closeButtonEl.onclick = closeButtonOnClick
    closeButtonEl.classList.add("silverBox-close-button")
    if (closeButton) headerWrapper.appendChild(closeButtonEl)
    // add icon to headerWrapper
    if (imageSource) headerWrapper.appendChild(imageSource)
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