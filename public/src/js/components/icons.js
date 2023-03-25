function iconsComponent(iconType) {
    if (iconType == "warning") return warningIcon()
    if (iconType == "success") return successIcon()
    if (iconType == "info") return infoIcon()
    if (iconType == "error") return errorIcon()
    if (iconType == "question") return questionIcon()
}
function warningIcon() {
    // create parent element
    let warningIcon = document.createElement('div')
    warningIcon.id = 'silverBox-warning'
    warningIcon.classList.add("silverBox-icon")
    // create child element
    let span = document.createElement('span')
    span.textContent = '!'
    // append child to parent
    warningIcon.append(span)
    return warningIcon
}
function successIcon() {
    // create parent element
    let silverBoxTick = document.createElement("div")
    silverBoxTick.id = "silverBox-tick-mark"
    silverBoxTick.classList.add("silverBox-icon")
    // create child element
    let silverBoxTickInside = document.createElement("div")
    silverBoxTickInside.id = "inside"
    // append child to parent
    silverBoxTick.append(silverBoxTickInside)
    return silverBoxTick
}

function infoIcon() {
    // create parent element
    let silverBoxInfo = document.createElement("div")
    silverBoxInfo.id = "silverBox-info"
    silverBoxInfo.classList.add("silverBox-icon")
    // create child element
    let silverBoxInfoSpan = document.createElement("span")
    // create child text
    silverBoxInfoSpan.textContent = "i"
    // append child to parent
    silverBoxInfo.append(silverBoxInfoSpan)
    return silverBoxInfo
}

function errorIcon() {
    // create parent element
    let errorIcon = document.createElement('div')
    errorIcon.id = 'silverBox-error'
    errorIcon.classList.add("silverBox-icon")
    // create child element
    let xIcon = document.createElement('div')
    xIcon.classList.add('x')
    // append child to parent
    errorIcon.append(xIcon)
    return errorIcon
}

function questionIcon() {
    // create parent element
    let silverBoxQuestion = document.createElement("div")
    silverBoxQuestion.id = "silverBox-question"
    silverBoxQuestion.classList.add("silverBox-icon")
    // create child element
    let silverBoxQuestionSpan = document.createElement("span")
    // create child text
    silverBoxQuestionSpan.textContent = "?"
    // append child to parent
    silverBoxQuestion.append(silverBoxQuestionSpan)
    return silverBoxQuestion
}
export default iconsComponent
