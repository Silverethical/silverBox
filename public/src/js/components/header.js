function headerComponent({ titleText = "default title", descriptionText = "description text",imageSource}) {
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
    let icon = document.createElement("img")
    icon.classList.add("silverBox-header-icon")
    icon.setAttribute("src",imageSource)
    headerWrapper.appendChild(icon)
    // add title to headerWrapper
    headerWrapper.appendChild(title)
    // add description to headerWrapper
    headerWrapper.appendChild(description)
    // add icon to headerWrapper
    return headerWrapper
}
export default headerComponent;