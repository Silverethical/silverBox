/** imports */
import silverBoxCloseButtonOnClick from "../../helpers/closeButtonOnClick"
import silverBoxIconsComponent from "./icons";

/**
 * Returns headerWrapper based on given arguments from config
 * @param {string} title - silverBox title text
 * @param {string} htmlText - silverBox html element under title
 * @param {string} simpleText - silverBox paragraph under title
 * @param {string} imageSource - silverBox icon
 * @param {string} closeButton - silverBox closeButton
 * @returns {Element} - headerWrapper element
 */
function silverBoxHeaderComponent({
    titleConfig,
    htmlText,
    simpleText,
    imageSource,
    closeButton,
    centerContent,

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
    if (titleConfig?.text) titleSpan.textContent = titleConfig.text


    // title Icons conditions   
    if ((titleConfig?.customIcon && titleConfig?.alertIcon) || (titleConfig?.customIcon && titleConfig?.customSvgIcon) || titleConfig?.customIcon) {
        // stores returned customIcon element into a variable
        let customIcon = silverBoxIconsComponent({ customIcon: titleConfig?.customIcon })

        // if titleCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
        if (titleConfig?.customIconId) customIcon.children[0].parentElement.id = titleConfig?.customIconId

        // if titleCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
        if (titleConfig?.customIconClassName) titleConfig?.customIconClassName.split(" ").forEach(className => { customIcon.children[0].parentElement.classList.add(className) })



        // if customIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (customIcon) {
            title.append(customIcon)
        }
    }
    else if (titleConfig?.alertIcon) {
        // stores returned alertIcon element into a variable
        let alertIcon = silverBoxIconsComponent({ alertIcon: titleConfig?.alertIcon })

        // if alertIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (alertIcon) {
            title.append(alertIcon)
        }

    }
    // customSvgIcon

    else if ((titleConfig?.customSvgIcon)) {

        let customSvgIcon = silverBoxIconsComponent({ customSvgIcon: titleConfig?.customSvgIcon })

        // if titleCustomIcon id exists, the img element of the customIcon Wrapper will receive given Id
        if (titleConfig?.customSvgIconId) customSvgIcon.children[0].parentElement.id = titleConfig?.customSvgIconId

        // if titleCustomIcon class exists, the img element of the customIcon Wrapper will receive given class
        if (titleConfig?.customSvgIconClassName) titleConfig?.customSvgIconClassName.split(" ").forEach(className => { customSvgIcon.children[0].parentElement.classList.add(className) })

        // if customSvgIcon exists due to iconComponent conditions, it will be added to the titleWrapper
        if (customSvgIcon) {
            title.append(customSvgIcon)
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
    if (titleConfig) headerWrapper.appendChild(title)


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