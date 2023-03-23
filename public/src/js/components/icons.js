function iconsComponent(iconType) {
    if (iconType == "warning") return warningIcon()
    if (iconType == "success") return successIcon()
    if (iconType == "info") return infoIcon()
    if (iconType == "failed") return failedIcon()
    if (iconType == "question") return questionIcon()
}
function warningIcon() {
    // create parent element
    let warningIcon = document.createElement('div')
    warningIcon.id = 'silverBox-warning'
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
    // create child element
    let silverBoxInfoSpan = document.createElement("span")
    // create child text
    silverBoxInfoSpan.textContent = "i"
    // append child to parent
    silverBoxInfo.append(silverBoxInfoSpan)
    return silverBoxInfo
}

function failedIcon() {
    // create parent element
    let failedIcon = document.createElement('div')
    failedIcon.id = 'silverBox-failed'
    // create child element
    let xIcon = document.createElement('div')
    xIcon.classList.add('x')
    // append child to parent
    failedIcon.append(xIcon)
    return failedIcon
}

function questionIcon() {
    // create parent element
    let silverBoxQuestion = document.createElement("div")
    silverBoxQuestion.id = "silverBox-question"
    // create child element
    let silverBoxQuestionSpan = document.createElement("span")
    // create child text
    silverBoxQuestionSpan.textContent = "?"
    // append child to parent
    silverBoxQuestion.append(silverBoxQuestionSpan)
    return silverBoxQuestion
}
export default iconsComponent
