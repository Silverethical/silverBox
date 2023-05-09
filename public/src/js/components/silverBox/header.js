/** imports */
import silverBoxCloseButtonOnClick from "../../helpers/closeButtonOnClick"
import silverBoxIconsComponent from "./icons";

/**
 * Returns headerWrapper based on given arguments from config
 * @param {string} titleText - silverBox title text
 * @param {string} htmlText - silverBox html element under title
 * @param {string} simpleText - silverBox paragraph under title
 * @param {string} imageSource - silverBox icon
 * @param {string} closeButton - silverBox closeButton
 * @returns {Element} - headerWrapper element
 */
function silverBoxHeaderComponent({
    titleText,
    titleAlertIcon,
    titleCustomIcon,
    htmlText,
    simpleText,
    imageSource,
    closeButton,
    centerContent,
    titleCustomIconId,
    titleCustomIconClassName
}) {
    // header wrapper
    let headerWrapper = document.createElement("div")
    headerWrapper.classList.add('silverBox-header-wrapper')
    // icon and closeButton wrapper
    let iconWrapper = document.createElement('div')
    iconWrapper.classList.add('silverBox-icon-wrapper')

    // title 
    //title wrapper
    let title = document.createElement("h2")
    title.classList.add("silverBox-header-title")

    // titleText
    let titleSpan = document.createElement('span')
    titleSpan.textContent = titleText

    // title Icons conditions   
    if ((titleCustomIcon && titleAlertIcon) || titleCustomIcon) {
        // stores returned customIcon element into a variable
        let customIcon = silverBoxIconsComponent({ customIcon: titleCustomIcon })

        // if titleCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
        if (titleCustomIconId) customIcon.children[0].id = titleCustomIconId

        // if titleCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
        if (titleCustomIconClassName) titleCustomIconClassName.split(" ").forEach(className => { customIcon.children[0].classList.add(className) })



        // if customIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (customIcon) {
            title.append(customIcon)

        }
    }
    else {
        // stores returned alertIcon element into a variable
        let alertIcon = silverBoxIconsComponent({ alertIcon: titleAlertIcon })

        // if alertIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (alertIcon) {
            title.append(alertIcon)
        }

    }
    // checks if parentELement has a icon, if true the has-icon class will be given 
    if (title.childElementCount >= 1) title.classList.add('silverBox-title-has-icon')

    // if centerContent is true the title children will be centred
    if (centerContent) title.classList.add('silverBox-title-centred')



    // appending text to the wrapper
    title.append(titleSpan)


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
    closeButtonEl.onclick = silverBoxCloseButtonOnClick
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
    } else if (htmlText) {
        headerWrapper.appendChild(htmlStructure)
    } else if (simpleText) {
        headerWrapper.appendChild(textStructure)
    }
    // checks if header Element is empty or not
    return headerWrapper.childElementCount !== 0 ? headerWrapper : ''


}
export default silverBoxHeaderComponent;