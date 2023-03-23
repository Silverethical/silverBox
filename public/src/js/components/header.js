function headerComponent({ titleText, descriptionText, imageSource }) {
    // header wrapper
    let headerWrapper = document.createElement("header")

    // title 
    let title = document.createElement("h2")
    title.classList.add("silverBox-header-title")
    title.textContent = titleText

    // description
    let description = document.createElement("div")
    description.classList.add("silverBox-header-description")
    description.innerHTML = descriptionText

    // add icon to headerWrapper
    if (imageSource) headerWrapper.appendChild(imageSource)
    // add title to headerWrapper
    if (titleText) headerWrapper.appendChild(title)
    // add description to headerWrapper
    if (descriptionText) headerWrapper.appendChild(description)
    // checks if header Element is empty or not
    return headerWrapper.childElementCount !== 0 ? headerWrapper : ''


}
export default headerComponent;